// src/App.jsx
import React, { useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-6">Disaster Preparedness App</h1>
      <div className="mb-6">
        <input
          className="p-2 rounded border-2 border-white"
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Weather location={location} />
      </div>
    </div>
  );
}

export default App;
