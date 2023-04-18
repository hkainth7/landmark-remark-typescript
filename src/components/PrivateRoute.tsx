import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../contexts/Contexts';

export default function PrivateRoute({children}:any){

    const {currentUser} = useAuth();

    if (!currentUser){
        return <Navigate to="/" />;
    }

    return children;

}