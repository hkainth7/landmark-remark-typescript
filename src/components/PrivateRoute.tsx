import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../contexts/Contexts';

interface Props {
    children?: React.ReactNode
    // any props that come into the component
}

export default function PrivateRoute({children}:Props){

    const {currentUser} = useAuth();

    if (!currentUser){
        return (<Navigate to="/" />);
    }

    return (<>{children}</>);

}