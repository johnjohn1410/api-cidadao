import mongoose from "mongoose";
import process from "process";
import dotenv from "dotenv";
dotenv.config()

async function connectDB() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default connectDB


