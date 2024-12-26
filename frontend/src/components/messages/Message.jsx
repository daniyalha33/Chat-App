import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

export const Message = ({ message }) => {
  const { authUser,authUserId } = useAuthContext(); // Logged-in user's data
  const formattedTime=extractTime(message.createdAt)
  
  console.log(message.senderId); // Verify the prop
  console.log(authUserId);

  const isSentByUser = message.senderId === authUserId;
  const shakeClass=message.shouldShake? "shake":""

  return (
    <div className={`chat ${isSentByUser ? "chat-end" : "chat-start"}`}>
      <div className={`chat-bubble ${isSentByUser ? "bg-blue-500 text-white" : "bg-gray-300 text-black"} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};
