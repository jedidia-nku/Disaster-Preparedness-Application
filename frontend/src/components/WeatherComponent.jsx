import { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your API key
  const apiKey = 'eb3722bea7fd087191effcf2ba81810a';

  // Replace with the location you want to fetch weather for
  const city = 'Kigali';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error fetching weather data.</p>;

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      {weather ? (
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Weather in {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-lg">
            {weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}
          </p>
          <p className="text-lg">Temperature: {weather.main.temp}°C</p>
          <p className="text-lg">Humidity: {weather.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default WeatherComponent;