const mongoose = require("mongoose");

export default async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (e) {
        console.log(`error while connecting:${e}`);
    }
}