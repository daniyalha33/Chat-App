import axios from 'axios'

import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'


const useLogout = () => {
    const {setAuthUser}=useAuthContext()
    const logout=async()=>{
        console.log("klg")
        try {
            
                
                    localStorage.removeItem("token")
                    setAuthUser(null);
                
        } catch (error) {
            toast.error(error.message)
            
        }
    }
  return {logout}
}

export default useLogout
