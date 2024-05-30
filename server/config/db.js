const mongoose = require('mongoose')
const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");
        console.log("database connected" )

    } catch (error) {
        console.log(`${error}`.bgRed)
        
    }
}
module.exports = connectDb