
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation.js"
import axios from "axios";
import { useEffect ,useState} from "react";
const useGetMessage = () => {
    const { authUser } = useAuthContext();
    const {messages,setMessages,selectedConversation}=useConversation();
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        const getMessages=async()=>{
            try {
               
             const {data}=await axios.get(`http://localhost:8000/api/messages/get/${selectedConversation._id}`,{headers: { Authorization: `Bearer ${authUser}` }})
             if(data.success){
                setMessages(data.messages)
                console.log(data.messages)
             }
             else{
                toast.error("jjj")
             }
            } catch (error) {
                toast.error(error.message)
                
            }
            finally {
				setLoading(false);
			}
    
        }
        if(selectedConversation?._id) getMessages()

    },[selectedConversation._id,setMessages])
    return {loading,messages}
   
}

export default useGetMessage
