import mongoose from "mongoose";

let connection = {};

export const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Already connected to the database");
            return;
        }

        const db = await mongoose.connect("mongodb://127.0.0.1:27017/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to db");
        connection.isConnected = db.connection.readyState;
    } catch (err) {
        console.error("Error connecting to database:", err.message);
        throw new Error("Failed to connect to the database");
    }
};
