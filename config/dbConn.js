require('dotenv').config()

const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB