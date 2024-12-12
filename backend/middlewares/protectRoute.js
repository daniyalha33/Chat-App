import jwt from "jsonwebtoken";
import User from "../models/users.models.js";
export const protectRoute=async(req,res,next)=>{
    try {
        
        const token=req.headers.authorization?.split(" ")[1]
        
        if(!token){
            return res.status(400).json({error:"Unauthorizd access"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(400).json({error:"Not authorized"})
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user=user
        next()
    } catch (error) {
        console.log(error)
    }
}
