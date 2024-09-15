// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather.jsx'; // Ensure the correct file extension

const Weather = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (location) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/weather/${location}`
          );
          setWeatherData(response.data);
        } catch (error) {
          console.error('Error fetching weather data', error);
        }
      };
      fetchWeather();
    }
  }, [location]);

  return (
    <div className="text-center mt-4">
      {weatherData ? (
        <div>
          <h3 className="text-2xl font-bold mb-2">{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Please enter a location.</p>
      )}
    </div>
  );
};

export default Weather;
