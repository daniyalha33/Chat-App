import React, { useState } from 'react'
import { LuSend } from "react-icons/lu";
import useSendMessage from '../../hooks/useSendMessage';


const MessageInput = () => {
  const {sendMessage}=useSendMessage();
  const [message,setMessage]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!message) return
    await sendMessage(message)
    setMessage("")

  }
  return (
    <form action="" className='px-4 my-3'>
        <div className='w-full flex gap-1'>
            <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white ' placeholder='Send a message'/>
            <button onClick={handleSubmit} className="w-10 h-10 flex items-center justify-center border border-black rounded-full">  <LuSend /></button>
           
        </div>

    </form>
  )
}

export default MessageInput
