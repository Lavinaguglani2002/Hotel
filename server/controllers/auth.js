const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const UserModel = require('../models/User');

// Signup function with password hashing
module.exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send({ code: 400, message: "All fields are required" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).send({ code: 200, message: "Signup success" });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).send({ code: 500, message: "Signup error", error: err });
    }
};

// Login function with JWT token generation
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(404).send({ code: 404, message: "User not found or password incorrect" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).send({ email: user.email, userId: user._id, code: 200, message: "User found", token });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).send({ code: 500, message: "Error finding user" });
    }
};

// Send OTP email to user's real email address
module.exports.sendotp = async (req, res) => {
    console.log(req.body);
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);

    try {
        let user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ code: 404, message: "User not found" });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: 'OTP',
            text: String(otp),
            html: `<html><body>Your OTP is: ${otp}</body></html>`
        });

        if (info.messageId) {
            await UserModel.updateOne({ email: req.body.email }, { otp: otp });
            res.status(200).send({ code: 200, message: "OTP sent" });
        } else {
            res.status(500).send({ code: 500, message: 'Error sending OTP' });
        }
    } catch (err) {
        console.error('Send OTP error:', err);
        res.status(500).send({ code: 500, message: 'Server error' });
    }
};

// API endpoint for submitting OTP and changing password
module.exports.submitotp = async (req, res) => {
    console.log(req.body);

    try {
        const user = await UserModel.findOne({ otp: req.body.otp });
        if (!user) {
            return res.status(404).send({ code: 404, message: "OTP not found or expired" });
        }

        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        await UserModel.updateOne({ email: user.email }, { password: hashedPassword, otp: null });

        res.status(200).send({ code: 200, message: "Password updated" });
    } catch (err) {
        console.error('Submit OTP error:', err);
        res.status(500).send({ code: 500, message: 'Server error' });
    }
};
