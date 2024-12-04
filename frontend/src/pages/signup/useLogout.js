import axios from 'axios'

import { useAuthContext } from '../../context/AuthContext'
import toast from 'react-hot-toast'


const useLogout = () => {
    const {setAuthUser}=useAuthContext()
    const logout=async()=>{
        console.log("klg")
        try {
            const {data}=await axios.post("http://localhost:8000/api/auth/logout",{},{
                headers: {
                    "Content-Type": "application/json",
                },})
                if(data.success){
                    localStorage.removeItem("chat-user")
                    setAuthUser(null);
                }
        } catch (error) {
            toast.error(error.message)
            
        }
    }
  return {logout}
}

export default useLogout
