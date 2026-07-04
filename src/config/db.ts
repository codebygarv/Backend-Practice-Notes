// This File is used to connect to Mongodb Database

import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/notesData";

console.log(MONGO_URI);

const connectToDb = () => {
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("Mongodb connected");
        })
        .catch((error) => {
            console.log("Error during connected to Mongodb", error)
        })
}

export default connectToDb;