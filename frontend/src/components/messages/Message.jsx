import { useAuthContext } from "../../context/AuthContext";

export const Message = ({ message }) => {
  const { authUser,authUserId } = useAuthContext(); // Logged-in user's data
  
  console.log(message.senderId); // Verify the prop
  console.log(authUserId);

  const isSentByUser = message.senderId === authUserId;

  return (
    <div className={`chat ${isSentByUser ? "chat-end" : "chat-start"}`}>
      <div className={`chat-bubble ${isSentByUser ? "bg-blue-500" : "bg-gray-300"}`}>
        {message.message}
      </div>
    </div>
  );
};
