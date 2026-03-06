// src/config/db.js
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const uri = process.env.MONGODB_URI;

        if (!uri) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ SUCCESS: MongoDB is connected!");
    } catch (error) {
        console.error("❌ MongoDB connection failed:");
        console.error("Error Name:", error.name);
        console.error("Error Message:", error.message);
        process.exit(1);
    }
};

export default connectDb;
