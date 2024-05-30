// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import moment from 'moment';
// import { useNavigate } from 'react-router-dom';
// import StripeCheckout from 'react-stripe-checkout';
// function Room() {
//     const navigate=useNavigate()
//     const { roomid, fromdate, todate } = useParams(); // Destructure params from useParams
//     const [room, setRoom] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);
//     const [totaldays, setTotaldays] = useState(0); // State for total number of days

//     useEffect(() => {
//         const fetchRoomDetails = async () => {
//             if (!roomid) return;

//             try {
//                 setLoading(true);
//                 const response = await axios.post('http://localhost:3000/api/rooms/getroombyid', { roomid });
//                 if (response.data) {
//                     setRoom(response.data);
//                 } else {
//                     setError(true);
//                     alert('Room not found');
//                 }
//             } catch (error) {
//                 setError(true);
//                 console.error('Error fetching room details:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRoomDetails();
//     }, [roomid]);

//     useEffect(() => {
//         const fromDate = moment(fromdate, 'DD-MM-YYYY');
//         const toDate = moment(todate, 'DD-MM-YYYY');

//         const days = toDate.diff(fromDate, 'days') + 1;
//         setTotaldays(days);
//     }, [fromdate, todate]);

//     async function bookRoom() {
//         alert('Booking successful!');
//         navigate("/") // Alert message shown immediately when Pay Now is clicked
        
//         const bookingDetails = {
//             room,
//             userid: JSON.parse(localStorage.getItem('email')),
//             fromdate,
//             todate,
//             totalamount: room.rentperday * totaldays, // Calculate total amount based on rent per day and total days
//             totaldays,
//         };
//         try {
//             const result = await axios.post("/api/bookings/bookroom", bookingDetails);
//             // Handle success, maybe redirect to confirmation page or show success message
//         } catch (error) {
//             console.error('Error booking room:', error);
//             // Handle error here
//         }
//     }
//     function onToken(token){
// console.log(token)
//     }

//     return (
//         <div className="room-details-container">
//             <h1 className="title">Booking Details</h1>
//             <hr />
//             {loading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p>Error occurred while fetching room details.</p>
//             ) : (
//                 <div className="room-details-content">
//                     <div className="room-image-container">
//                         <img className="room-image" src={room.imageurls[0]} alt="Room" />
//                     </div>
//                     <div className="room-info">
//                         <p className="room-name">Name: {room.name}</p>
//                         <p>Max Count: {room.maxcount}</p>
//                         <p>Rent per day: {room.rentperday}</p>
//                         <p>FromDate: {fromdate}</p>
//                         <p>ToDate: {todate}</p>
//                         <p>Total Amount: {room.rentperday * totaldays}</p>
//                         <p>Total Days: {totaldays}</p>
//                         {/* Add more room details as needed */}
//                     </div>
//                     <button className='btn btn-primary' onClick={bookRoom}>Pay Now</button>
//                     <StripeCheckout
//                     amount={totalamount *100}
//                                         token={onToken}
//                                         currency='INR'
//                                         stripeKey="pk_test_51PKxo5SFYVPmDGPnCepON4eZjxP2aQs1toYtJ6CJWTTyznZwe5tah6I8KCGzaT0so3QlcTFrZ9LJQPfbgQvYoXpi00J3aJ4aDi"

// />
                        
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Room;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import Swal from "sweetalert2"

function Room() {
    const navigate = useNavigate();
    const { roomid, fromdate, todate } = useParams(); // Destructure params from useParams
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [totaldays, setTotaldays] = useState(0); // State for total number of days
    const [totalamount, setTotalAmount] = useState(0); // State for total amount

    useEffect(() => {
        const fetchRoomDetails = async () => {
            if (!roomid) return;

            try {
                setLoading(true);

                const response = await axios.post('http://localhost:3000/api/rooms/getroombyid', { roomid });
                if (response.data) {
                    setRoom(response.data);
                } else {
                    setError(true);
                    alert('Room not found');
                }
            } catch (error) {
                setError(true);
                console.error('Error fetching room details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoomDetails();
    }, [roomid]);

    useEffect(() => {
        const fromDate = moment(fromdate, 'DD-MM-YYYY');
        const toDate = moment(todate, 'DD-MM-YYYY');

        const days = toDate.diff(fromDate, 'days') + 1;
        setTotaldays(days);
        setTotalAmount(room.rentperday * days); // Calculate total amount
    }, [fromdate, todate, room.rentperday]);

    async function bookRoom(token) {
        alert('Booking successful!');
        navigate("/");

        const bookingDetails = {
            room,
            userid: JSON.parse(localStorage.getItem('email')),
            fromdate,
            todate,
            totalamount,
            totaldays,
            token: token.id // Pass token ID to the server
        };
        try {
            setLoading(true)
            const result = await axios.post("/api/bookings/bookroom", bookingDetails);
            setLoading(false)
            Swal.fire('Congrats','Your Room Booked successfully','success')
            // Handle success, maybe redirect to confirmation page or show success message
        } catch (error) {
            setLoading(false)
            console.error('Error booking room:', error);
            Swal.fire('congrats','room booked succcessfully')
            // Handle error here
        }
    }

    function onToken(token) {
        console.log(token);
        bookRoom(token);
    }

    return (
        <div className="room-details-container">
            <h1 className="title">Booking Details</h1>
            <hr />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error occurred while fetching room details.</p>
            ) : (
                <div className="room-details-content">
                    <div className="room-image-container">
                        <img className="room-image" src={room.imageurls[0]} alt="Room" />
                    </div>
                    <div className="room-info">
                        <p className="room-name">Name: {room.name}</p>
                        <p>Max Count: {room.maxcount}</p>
                        <p>Rent per day: {room.rentperday}</p>
                        <p>FromDate: {fromdate}</p>
                        <p>ToDate: {todate}</p>
                        <p>Total Amount: {totalamount}</p>
                        <p>Total Days: {totaldays}</p>
                    </div>
                    <StripeCheckout
                        amount={totalamount * 100} // Convert to cents
                        token={onToken}
                        currency='INR'
                        stripeKey="pk_test_51PKxo5SFYVPmDGPnCepON4eZjxP2aQs1toYtJ6CJWTTyznZwe5tah6I8KCGzaT0so3QlcTFrZ9LJQPfbgQvYoXpi00J3aJ4aDi"
                    >
                        <button className='btn btn-primary' >Pay Now</button>
                    </StripeCheckout>
                </div>
            )}
        </div>
    );
}

export default Room;
