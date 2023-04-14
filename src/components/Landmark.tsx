import React, {useEffect} from 'react';
import Header from './Header';
import MapBox from './MapBox';
import { useAuth } from "../contexts/AuthContext";


export default function Landmark(){

    const {currentUser, updateUserStatus} = useAuth();

    useEffect(() => {
        try {
            updateUserStatus(currentUser, true);
        } catch (error) {
            console.log(error)
        }
    }, []);

    return(
        <>
            <Header />
            <MapBox />
        </>
    )
}