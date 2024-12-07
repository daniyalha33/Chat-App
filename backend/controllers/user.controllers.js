import User from "../models/users.models.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        console.log(req.body);
        const { fullName, email, password, confirmPassword, gender, username } = req.body;

        // Validate required fields
        if (!fullName || !email || !password || !confirmPassword || !gender || !username) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        // Validate username length
        if (username.length < 4 || username.length > 20) {
            return res.status(400).json({ error: "Username must be between 4 and 20 characters" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({ error: "Password must be at least 8 characters long" });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Set profile picture based on gender
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const profilePic = gender === "male" ? boyProfilePic : girlProfilePic;

        // Create the new user
        const newUser = new User({
            fullName,
            email,
            username,
            gender,
            password: hashedPassword,
            profilePic,
        });
        

        // Save the user to the database
        await newUser.save();
        if(!newUser){
            return res.status(400).json({message:"database issue"})
        }

        // Optionally generate a token and set a cookie
        const token=generateTokenAndSetCookie(newUser._id);

        // Send success response
        res.status(201).json({success:true,token,id:newUser._id,fullName:newUser.fullName,username:newUser.username,profilePic:newUser.profilePic});
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate required fields
        if (!username || !password) {
            return res.status(400).json({ success: false, message: "Username and password are required" });
        }

        // Check if the user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        // Compare passwords
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");
        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: "Invalid password" });
        }

        // Generate token and set cookie
        const token=generateTokenAndSetCookie(user._id);

        // Return user data in the response
        res.status(200).json({
            success: true,
            token,
            message: "Login successful",
            id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};






export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        console.log(loggedInUserId)

        // Validate logged-in user
        if (!loggedInUserId) {
            return res.status(400).json({ error: "Invalid user" });
        }

        // Find other users
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        if (!filteredUsers.length) {
            return res.status(404).json({ error: "No other users found" });
        }

        res.status(200).json({success:true,filteredUsers});
    } catch (error) {
        console.error("Error fetching users for sidebar:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
