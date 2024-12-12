import { useContext, useState,createContext } from "react";

export const AuthContext=createContext();
export const useAuthContext=()=>{
    return useContext(AuthContext)
}
export const AuthProvider=({children})=>{
    const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem('token'))|| null)
    const [authUserId,setAuthUserId]=useState(localStorage.getItem('userId'))
    
    return <AuthContext.Provider value={{authUser,setAuthUser,authUserId}}>
        {children}
    </AuthContext.Provider>
}