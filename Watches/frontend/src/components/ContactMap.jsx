import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import dotenv from 'dotenv';
// dotenv.config();

// Set up the map options
const mapContainerStyle = {
  width: '100%',
  height: '600px',
  marginTop: '100px',
};

// Latitude coordinate for the center of Stockholm
const center = {
  lat: 59.3293, 
  lng: 18.0686,
};


// Defines your API key
const apiKey = "AIzaSyA2CXz6RpZgSPmVZkdhJCB4HBJddPB2x44";
// const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// Creates the Map component
const ContactMap = () => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13} // Zoom level for the map
        center={center}
      ></GoogleMap>
    </LoadScript>
  );
};

export default ContactMap;
