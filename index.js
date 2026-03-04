import app from "./src/app.js";
import connectDb from "./src/config/db.js";

const PORT = 3000; // Hardcoded port

const startServer = async () => {
    try {
        // Attempt to connect
        await connectDb();
        
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
            console.log("✅ MongoDB connected successfully (Hardcoded URI)");
        });
    } catch (error) {
        console.error("❌ Failed to start server:");
        console.error(error.message);
        // We leave the process running so you can read the error
    }
};

startServer();