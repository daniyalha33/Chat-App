import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        try {
            // Make the API request
            const { data } = await axios.post('http://localhost:8000/api/auth/login', 
                { username, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            // Check if login was successful
            if (data.success) {
                localStorage.setItem('token', JSON.stringify(data.token));
                setAuthUser(data);
                localStorage.setItem("userId", data.id);
            } else {
                // Show backend error message in toast
                toast.error(data.message || "An error occurred");
            }
        } catch (error) {
            // Handle error if the request fails (like server errors)
            toast.error(error.response?.data?.message || "An unexpected error occurred");
        }
    };

    return { login };
}

export default useLogin;
