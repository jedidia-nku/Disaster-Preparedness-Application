import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const defaultCenter = {
  lat: 2.0800,
  lng: 29.7500,
};

const shelters = [
  { id: 1, name: "Shelter 1", location: { lat: -1.94995, lng: 30.05885 } },
  { id: 2, name: "Shelter 2", location: { lat: -1.94855, lng: 30.06135 } },
];

const GoogleMapComponent = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [selectedShelter, setSelectedShelter] = useState(null);
  const directionsServiceRef = useRef(null);
  
  // Function to calculate route to the selected shelter
  const calculateRoute = async (destination) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const origin = { lat: position.coords.latitude, lng: position.coords.longitude };

        const directionsService = new window.google.maps.DirectionsService();
        const results = await directionsService.route({
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING, // Or 'WALKING', 'BICYCLING'
        });
        setDirectionsResponse(results);
      });
    }
  };

  useEffect(() => {
    if (selectedShelter) {
      calculateRoute(selectedShelter.location);
    }
  }, [selectedShelter]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDIWofoPyDd6u871VRjRK7HrswHjyFCGiE">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={14}
      >
        {/* Shelter Markers */}
        {shelters.map((shelter) => (
          <Marker
            key={shelter.id}
            position={shelter.location}
            label={shelter.name}
            onClick={() => setSelectedShelter(shelter)}
          />
        ))}

        {/* Render Directions */}
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
