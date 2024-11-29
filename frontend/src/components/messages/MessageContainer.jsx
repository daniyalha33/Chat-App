import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChat';

const MessageContainer = () => {
    const nochatSelected=true;
  return (
    <div className='md:min-w-[450px] flex flex-col border border-slate-500'>
        
        {nochatSelected?(
        <NoChatSelected/>):(
            <>
        <div className='bg-slate-300 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John Doe</span>
        </div>
        <Messages/>
        <MessageInput/>
        </>
        )}
    </div>
  )
}

export default MessageContainer
