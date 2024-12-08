import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';

const useConversation = () => {
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state
    const { authUser } = useAuthContext();

    useEffect(() => {
        const getConversation = async () => {
            try {
                const { data } = await axios.get("http://localhost:8000/api/users/getUser", {
                    headers: { Authorization: `Bearer ${authUser}` },
                });
                setConversations(data.filteredUsers || []);  // Update state with conversations
            } catch (error) {
                console.error('Error fetching conversations:', error.response?.data || error.message);
            } finally {
                setLoading(false);  // Set loading to false when the data is fetched
            }
        };

        if (authUser) {
            getConversation();
        }
    }, [authUser]);  // Dependency array to re-fetch if authUser changes

    return { conversations, loading };  // Return both conversations and loading state
};

export default useConversation;
