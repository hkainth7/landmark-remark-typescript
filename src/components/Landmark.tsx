import React, {useEffect, useState} from 'react';
import { useAuth } from "../contexts/Contexts";
import Header from './Header';
import NavTabs from './NavTabs';
import {db} from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';



export default function Landmark(){

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [notes, setNotes] = useState<any[]>([]);
    const {currentUser, updateUserStatus} = useAuth();

      const notesCollectionRef = collection(db, "remarks")


    const getNotes = async () => {
        const data = await getDocs(notesCollectionRef);
        setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    } 
    
    const success = (position:GeolocationPosition): void => {
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
        <div className='landmark' >
            <Header />
            <NavTabs long={long} lat={lat} setLat={setLat} setLong={setLong} getNotes={getNotes()} setNotes={setNotes} notes={notes}/>
        </div>
    )
}
