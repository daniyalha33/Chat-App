import User from "../models/users.models.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup=async(req,res)=>{
    try {
        const {fullName,email,password,confirmPassword,gender,username}=req.body;
    if(password!==confirmPassword){
        return res.status(400).json({error:"Password do not match"})
    }
    const user=User.findOne({username});
    if(user){
        return res.status(400).json({error:"User already exists"})
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=bcrypt.hash(password,salt);
    const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
    const newUser=new User({
        fullName,gender,email,password:hashedPassword,profilePic:gender==="male"?boyProfilePic:girlProfilePic
    })
    if(newUser){
        await User.save();
        res.status(201).json({message:"User registered successfully"})
    }
    else{
        return res.status(400).json({message:"Invalid User data"})
    }
        
    } catch (error) {
        console.log(error);
        
    }
    
}
export const login=async(req,res)=>{
    try {
        const{username,password}=req.body;
        const user=User.findOne({username})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const isPasswordCorrect=await bcrypt.compare(password,user?.password || "")
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid Password "})
        }
        generateTokenAndSetCookie(user._id,res)
    } catch (error) {
        console.log(error)
        
    }
}
export const logout=async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
    } catch (error) {
        console.log(error)
    }
}
export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id
        const filteredUser=await User.find({_id:{$ne:loggedInUserId}}).select("-password")
        res.status(200).json(filteredUser)
    } catch (error) {
        console.log(error)
        
    }
}