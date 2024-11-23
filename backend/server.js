import express from "express";
const app=express()
import dotenv from "dotenv"
dotenv.config()
const Port=process.env.PORT ||3000
app.listen(Port,()=>console.log("Server is running on port 8000"))
app.get("/",(req,res)=>[
    console.log("server is running")
])