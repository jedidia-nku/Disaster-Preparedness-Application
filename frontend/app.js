async function getWeather() {
    const location = document.getElementById('locationInput').value;
    try {
        const response = await fetch(`http://localhost:5000/api/weather/${location}`);
        
        // Handle non-success status codes
        if (!response.ok) {
            throw new Error('Weather data not found');
        }

        const data = await response.json();

        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        console.error(error);
        alert('Failed to fetch weather data. Please try again.');
    }
}
