import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('userId');
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate]);
};

export default useAuth;
