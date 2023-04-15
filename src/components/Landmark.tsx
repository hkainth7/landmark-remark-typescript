import React, {useEffect, useState} from 'react';
import Header from './Header';
import MapBox from './MapBox';
import { useAuth } from "../contexts/AuthContext";


export default function Landmark(){

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);

    const {currentUser, updateUserStatus} = useAuth();

    const success = (position:any): void => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    }
    
    const error = () => {
        console.log('failed to load location');
    }

    useEffect(() => {
        if(!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
          } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }, []);

    useEffect(() => {
        try {
            updateUserStatus(currentUser, true);
        } catch (error) {
            console.log(error)
        }
    }, []);

    return(
        <div className='landmark'>
            <Header />
            <MapBox long={long} lat={lat} setLat={setLat} setLong={setLong}/>
            <div>
                <p>long: {long}</p>
                <p>lat: {lat}</p>
            </div>
            {/* noteslist */}
        </div>
    )
}