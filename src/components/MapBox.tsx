import React, {useState} from 'react';
import Map, {Marker, NavigationControl, GeolocateControl, FullscreenControl, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useAuth } from "../contexts/Contexts";
import {round} from 'lodash';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import { Remark } from '../types/Types';


interface Props {
  lat: number,
  long: number,
  setLat: any,
  setLong: any
}



const MapBox = ({lat, long, setLat, setLong}:Props) => {

  const [newNote, setNewNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const remarkRef = collection(db, "remarks");
  const {currentUser} = useAuth();


  const handleMapClick = (e:any ): void => {
    const latitude = round(e.lngLat.lat, 4);
    const longitude = round(e.lngLat.lng, 4);

    setLat(latitude);
    setLong(longitude);
  }

  const addRemark = async (currentUser:any) => {
    const newRemark: Remark = {
      id: currentUser.uid,
      email: currentUser.email,
      latitude: lat,
      longitude: long,
      remark: newNote
    }

      try {
          await addDoc(remarkRef, newRemark);
          setIsLoading(false);
          
      } catch (error) {
          console.log(error);
      }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {

    e.preventDefault();
    addRemark(currentUser)
    .then(() => setIsLoading(true));
    
}

  return (
    
    <div>
      <Map
        logoPosition='bottom-right'
        mapboxAccessToken='pk.eyJ1IjoiaGthaW50aDciLCJhIjoiY2xmb2R0bHl6MHV0bjQ0bGt4YXhqd3MydyJ9.4U_TObIu2ZNsPrPsJ6vgeQ'
        initialViewState={{
          longitude: long,
          latitude: lat
        }}
        style={{position:'absolute'}}
        mapStyle='mapbox://styles/mapbox/streets-v12'
        onRender={(e) => e.target.resize()}
        reuseMaps
        onClick={handleMapClick}
        attributionControl={false}
      >
        <Marker longitude={long} latitude={lat} />
        <FullscreenControl position='top-right'/>
        <NavigationControl position='top-right' />
        <GeolocateControl trackUserLocation showUserHeading position='top-left'/>
      </Map>
      <div >
        <form onSubmit={handleSubmit}>
          <input type='text' style={{marginRight:'10px'}} placeholder={`lat: ${lat} long: ${long}`} onChange={e => setNewNote(e.target.value)}/>
          <button>Add</button>
        </form>
      </div>
    </div>
    

  )
}

export default MapBox;