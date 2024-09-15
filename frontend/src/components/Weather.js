import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('/api/weather?location=New York')
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {weatherData ? (
        <div>
          <h3 className="text-xl font-bold mb-2">{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
