import { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const loadMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };
    loadMap();
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;