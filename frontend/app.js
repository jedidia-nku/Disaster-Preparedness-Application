async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const response = await fetch(`http://localhost:5000/api/weather/${location}`);
    const data = await response.json();

    document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

