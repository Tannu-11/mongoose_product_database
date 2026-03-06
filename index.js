import app from "../src/app.js";
import connectDb from "../src/config/db.js";

let isConnected = false;

export default async function handler(req, res) {
    if (!isConnected) {
        await connectDb();
        isConnected = true;
        console.log("✅ MongoDB connected");
    }

    return app(req, res);
}
