const express = require('express');
const router = express.Router();
const Booking = require("../models/booking");
const Room = require("../models/room"); // Import the Room model
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51PKxo5SFYVPmDGPnuiuWaj27ZrK1FTrfrRG7ZRDInUI8NrlgFIqrroTBqO6GiZQi9wRjVMcgqsPSeU1wlHVnNJ4D00ZZcKHAMe');

router.post("/bookroom", async (req, res) => {
    const { room, userid, fromdate, todate, totalamount, totaldays, token } = req.body;

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const payment = await stripe.charges.create({
            amount: totalamount * 100,
            customer: customer.id,
            currency: 'inr',
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        });

        if (payment) {
            const newbooking = new Booking({
                room: room.name,
                roomid: room._id,
                userid,
                fromdate: moment(fromdate).format('MM-DD-YYYY'),
                todate: moment(todate).format("DD-MM-YYYY"),
                totalamount,
                totaldays,
                transactionId: payment.id // Use the actual transaction ID from Stripe
            });

            const booking = await newbooking.save();

            const roomtemp = await Room.findOne({ _id: room._id });
            roomtemp.currentbookings.push({
                bookingid: booking._id,
                fromdate: moment(fromdate).format('DD-MM-YYYY'),
                todate: moment(todate).format('DD-MM-YYYY'),
                status: booking.status
            });

            await roomtemp.save();
            return res.send("Room booked successfully");
        } else {
            return res.status(400).json({ error: "Payment failed" });
        }
    } catch (error) {
        console.error('Error booking room:', error);
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;
