import React from 'react';

import {Navigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps{
    childern: JSX.Element;
}

const PortectedRoute: React.FC<ProtectedRouteProps> = ({childern}) =>{
        const {user} = useAuth();


        if(!user){
            return <Navigate to="/"/>;//add /login later once you made the page
        }
        return childern
}

export default PortectedRoute;