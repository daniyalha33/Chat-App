import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation.js"
import axios from "axios";



const useSendMessage = () => {
    const { authUser } = useAuthContext();
  const {messages,setMessages,selectedConversation}=useConversation();
  const sendMessage=async(message)=>{
    try {
        const {data}=await axios.post(`http://localhost:8000/api/messages/send/${selectedConversation._id}`,{message} ,{headers: { Authorization: `Bearer ${authUser}` }},)
        if(data.success){
            setMessages([...messages,data.newMessage])
        }else{
            toast.error(data.message)
        }
        console.log(data.newMessage)
    } catch (error) {
        toast.error(error.message)
        
    }

  }
  return {sendMessage}
}

export default useSendMessage
