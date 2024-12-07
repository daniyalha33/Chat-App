import axios from 'axios';
import { useState,useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
const useConversation = () => {
    const [conversations, setConversations] = useState([]);
    const {authUser } = useAuthContext();

    useEffect(() => {
        const getConversation = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/users/getUser", 
                   
                    {headers:{Authorization:`Bearer ${authUser}`},});
                console.log("Response data:", response.data);
                setConversations(response.data);
            } catch (error) {
                console.error('Error fetching conversations:', error.response?.data || error.message);
            }
        };

        getConversation();
    }, []);

    return conversations;
};

export default useConversation;
