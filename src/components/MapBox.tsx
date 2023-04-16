import React, {useState} from 'react';
import Map, {Marker, NavigationControl, GeolocateControl, FullscreenControl, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useAuth } from "../contexts/AuthContext";

interface Props {
  lat: number,
  long: number,
  setLat: any,
  setLong: any
}

const MapBox = ({lat, long, setLat, setLong}:Props) => {

  const [newNote, setNewNote] = useState('');

  const {roundToFive} = useAuth();

  const handleMapClick = (e:any ): void => {
    const latitude = roundToFive(e.lngLat.lat);
    const longitude = roundToFive(e.lngLat.lng);

    setLat(latitude);
    setLong(longitude);
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
      <div style={{position:'absolute', bottom:'20px', left:'50%', transform:'translateX(-50%)'}}>
        <form>
          <input type='text' style={{marginRight:'10px'}} placeholder='Add note...' onChange={e => setNewNote(e.target.value)}/>
          <button>Add</button>
        </form>
      </div>
    </div>
    

  )
}

export default MapBox;