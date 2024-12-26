import {Server} from 'socket.io';
import http from 'http'
import express from 'express'
import cors from 'cors'
const app=express();
const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:['http://localhost:5173'],
        methods:['GET','POST','PUT','DELETE']

    }
})
export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId]
}
const userSocketMap={};


io.on('connection',(socket)=>{
    console.log('a user connected',socket.id)
    const userId=socket.handshake.query.userId
    if(userId!=undefined) userSocketMap[userId]=socket.id
    io.emit("getOnlineUser",Object.keys(userSocketMap))
    socket.on('disconnect', () => {
        const disconnectedUserId = socket.data.userId; // Retrieve userId from socket.data
        if (disconnectedUserId) {
            delete userSocketMap[disconnectedUserId];
        }
    })
})

export {server,io,app}