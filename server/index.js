// const express = require('express');
// const dotenv = require('dotenv');
// const HotelsRoute=require("./routes/Hotels")
// const userRoute=require("./routes/user")
// const authRoute=require("./routes/auth")
// const cors = require('cors');
// const connectDb = require('./config/db');
// const bodyParser=require("body-parser");
// const cookieParser = require('cookie-parser');
// dotenv.config();
// const app = express();

// // Middleware
// app.use(cookieParser)
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
// app.use(express.json());
// app.use(cors()); // Enable CORS for all routes

// // Connect to database
// connectDb();

// // Routes
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // User authentication routes under /auth


// app.use("/api/auth",authRoute)
// app.use("/api/hotels",HotelsRoute)
// app.use("/api/users",userRoute)
// app.use((err,req,res,next)=>{
//   const errorStatus=err.status || 500
//   const errorMessage=err.message || "Somewthing went wrong"
//   return res.status(errorStatus).json({
//     success:false,
//     status:errorStatus,
//     message:errorMessage,
//     stack:err.stack,
//   })
// })
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/db');
 const authRoute=require("./routes/auth")
 const roomsRoute=require('./routes/roomsRoute')
const bookingRoute=require("./routes/bookingRoute")
dotenv.config();
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
 app.use("/",authRoute)
 app.use('/api/rooms',roomsRoute)
app.use("/api/bookings",bookingRoute)

// Connect to database
connectDb();

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
