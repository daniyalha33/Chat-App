import jwt from "jsonwebtoken";
import User from "../models/users.models.js";
export const protectRoute=(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(400).json({error:"Unauthorizd access"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(400).json({error:"Not authorized"})
        }
        const user=User.findById(decoded.userId)
        req.user=user
        next()
    } catch (error) {
        console.log(error)
    }
}
