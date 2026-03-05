// src/config/db.js
import mongoose from "mongoose";

const connectDb = async () => {
    // Hardcode your confirmed string here temporarily
    const testUri = "mongodb+srv://anu26dec2006_db_user:MRhjwMABcEsanejV@74nnu.u0zvfa6.mongodb.net/?appName=74nnu";

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
