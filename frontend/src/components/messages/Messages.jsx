import React from 'react'
import useGetMessage from '../../hooks/useGetMessage'
import MessageSkeleton from '../skeleton/MessageSkeleton';
import { Message } from './Message';



const Messages = () => {
  const {messages,loading}=useGetMessage();
  console.log(messages)
  return (
    <div className='flex-1 px-4 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message)=>(
        <Message key={message._id} message={message}/>
      ))}
        
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length===0 && (
        <p className='text-center'>Send a message to start a conversation</p>
      )}
    </div>
  )
}

export default Messages
