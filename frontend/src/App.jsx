import React from 'react';
import Weather from './components/Weather';
import DisasterAlerts from './components/DisasterAlerts';
import SatelliteImagery from './components/SatelliteImagery';
import EvacuationRoutes from './components/EvacuationRoutes';
import ShelterLocations from './components/ShelterLocations';

function App() {
  return (
    <div>
      <h1>Disaster Preparedness Application</h1>
      <ShelterLocations />
    </div>
  );
}

export default App;
