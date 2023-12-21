/* eslint-disable react/prop-types */
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();
    const location = useLocation();
    console.log(location, "in private route component");

    if (loading) {
        return <div className='flex justify-center items-center h-screen'><Spinner aria-label="Extra large spinner example" size="xl" /></div>
    }

    if (currentUser) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;