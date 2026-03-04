// src/config/db.js
import mongoose from "mongoose";

const connectDb = async () => {
    // Hardcode your confirmed string here temporarily
    const testUri = "mongodb+srv://tannusg06_db_user:NX8t3VBNjRVYq3Vu@cluster0.tbnvawk.mongodb.net/product_db?retryWrites=true&w=majority";

    try {
        await mongoose.connect(testUri);
        console.log("✅ SUCCESS: MongoDB is finally connected!");
    } catch (error) {
        console.error("❌ STILL FAILING:");
        console.error("Error Name:", error.name);
        console.error("Error Message:", error.message);
    }
};

export default connectDb;