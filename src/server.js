import mongoose from "mongoose";
import { app } from "./app.js"

async function start() {
    const { PORT, MONGODB_URI } = process.env;

    if (!MONGODB_URI) {
        console.error("Missing MONGODB_URI in env");
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.log("MongoDB connection error:", err);
        process.exit(1);
    }

    app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));

}

start();