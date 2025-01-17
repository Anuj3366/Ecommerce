const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000
        })
        console.log("Mongo DB Connected: ", conn.connection.host)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB