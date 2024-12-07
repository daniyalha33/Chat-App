import React from 'react'
import Conversation from './Conversation'
import useConversation from '../../hooks/useConversation'

const Conversations = () => {
  const {conversations}=useConversation();
  console.log(conversations)
  return (
    <div>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>

      
    </div>
  )
}

export default Conversations
