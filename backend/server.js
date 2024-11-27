import express from "express";
const app=express()
import dotenv from "dotenv"
import connectDb from "./db/dbConnect.js";
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import cookieParser from "cookie-parser";
dotenv.config();
app.use(express.json());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
app.use(cookieParser())
const Port=process.env.PORT ||3000
app.listen(Port,()=>{
    connectDb();
    console.log("Server is running on port 8000")})
app.get("/",(req,res)=>{
   
    console.log("server is running")
})