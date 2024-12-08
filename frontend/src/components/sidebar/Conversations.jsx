import React from 'react';
import Conversation from './Conversation';
import useConversation from '../../hooks/useConversation';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const { conversations, loading } = useConversation();  // Destructure loading state

  if (loading) {
    return <div>Loading conversations...</div>;  // Show loading message when data is being fetched
  }

  if (!Array.isArray(conversations) || conversations.length === 0) {
    return <div>No conversations found.</div>;  // If no conversations, show a different message
  }

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji}
            lastIndex={idx === conversations.length - 1}
          />
        );
      })}
    </div>
  );
};

export default Conversations;
