import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

// Initialize dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Apply CORS middleware globally
app.use(
    cors({
        origin: 'http://localhost:5173', // Your React app's URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true, // Allow cookies and credentials
    })
);


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.get("/test-cookie", (req, res) => {
    res.cookie("testCookie", "testValue", {
        httpOnly: true,
        sameSite: "None",
        secure: false, // Set to true in production
    });
    res.status(200).json({ message: "Cookie set" });
});

// Test route
app.get("/", (req, res) => {
    res.status(200).send("Server is running");
});

// Start server and connect to the database
app.listen(PORT, async () => {
    try {
        await connectDb();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error("Failed to connect to the database:", error.message);
    }
});
