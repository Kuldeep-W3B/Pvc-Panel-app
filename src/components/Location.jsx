import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Coordinates for the company location (use your actual coordinates)
const companyLocation = {
  lat: 40.7128, // Example latitude (replace with your actual location)
  lng: -74.0060 // Example longitude (replace with your actual location)
};

const LocationPage = () => {
  return (
    <div className="w-full h-screen">
      {/* Google Map Section */}
      <LoadScript googleMapsApiKey="https://www.google.com/maps/place/Faridabad,+Haryana/@28.4084343,77.3169303,19.3z/data=!4m6!3m5!1s0x390cdc15f5a424b1:0xe4f50576c850e0f2!8m2!3d28.4089123!4d77.3177894!16zL20vMDRmMTB0?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={companyLocation}
          zoom={15}
        >
          <Marker position={companyLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocationPage;
