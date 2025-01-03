import { createContext, useEffect, useState,useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from  "socket.io-client";
export const SocketContext=createContext();
export const useSocketContext=()=>{
    return useContext(SocketContext)
}

export const SocketContextProvider=({children})=>{
    const [socket,setSocket]=useState(null)
    const[onlineUsers,setOnlineUsers]=useState([])
    const {authUser}=useAuthContext();
    const {authUserId}=useAuthContext();
    useEffect(()=>{
        if(authUser){
            const socket=io('http://localhost:8000',{
                query:{
                    userId:authUserId
                }
            })
            setSocket(socket)
            socket.on("getOnlineUser",(users)=>{
                setOnlineUsers(users)
            })
            return ()=> socket.close()
        }else{
            if(socket){
                socket.close()
            }
            
            setSocket(null)
        }
    },[authUser])
    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
}