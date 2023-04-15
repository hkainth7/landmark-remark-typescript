import React from 'react';
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
        style={{height: '100vh', width: '100%'}}
        reuseMaps
        mapStyle='mapbox://styles/mapbox/streets-v12'
        onClick={handleMapClick}
        scrollZoom={false}
        attributionControl={false}
      >
        <Marker longitude={0} latitude={0} />
        <NavigationControl position='top-right' />
        <GeolocateControl trackUserLocation showUserHeading position='top-left'/>
        <FullscreenControl position='bottom-left'/>
        {/* <
        {notes &&
          notes.map(({id, long, lat, remark, createdBy}) => (
            <Popup key={id} longitude={long} latitude={lat} closeButton={false} closeOnClick={false} >
              <p>{remark}</p>
              <p>Created by: {createdBy.split("@")[0]}</p>
            </Popup>
          ))
        } */}
        
      </Map>
    </div>
  )
}

export default MapBox;