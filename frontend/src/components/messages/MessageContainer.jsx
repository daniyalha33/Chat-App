import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChat';
import useConversation from '../../zustand/useConversation.js'
const MessageContainer = () => {
    const nochatSelected=true;
    const {selectedConversation,setSelectedConversation}=useConversation();
    useEffect(()=>{
      return ()=>setSelectedConversation(null)
    },[])
  return (
    <div className='md:min-w-[450px] flex flex-col border border-slate-500'>
        
        {!selectedConversation?(
        <NoChatSelected/>):(
            <>
        <div className='bg-slate-300 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        <Messages/>
        <MessageInput/>
        </>
        )}
    </div>
  )
}

export default MessageContainer
