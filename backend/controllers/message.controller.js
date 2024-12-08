import Conversation from "../models/conversation.models.js";
import Message from "../models/message.models.js";


export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;
        console.log("Sender ID:", senderId);
console.log("Receiver ID:", receiverId);

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
                messages:[]
            })
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        // await newMessage.save();
        // await conversation.save();
        await Promise.all([conversation.save(),newMessage.save()])
        res.status(201).json({success:true,newMessage})
        console.log(conversation)
        console.log(newMessage)

    } catch (error) {
        console.log(error)
        
    }
}
export const getMessage=async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("message");
        if(!conversation){
            return res.status(200).json([]);
        }
        const messages=conversation.messages
        res.status(200).json(messages)
    } catch (error) {
        
    }
}