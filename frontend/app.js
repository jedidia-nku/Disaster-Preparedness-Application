async function getWeather() {
    const location = document.getElementById('locationInput').value;

    if (!location) {
        alert("Please enter a location.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/api/weather/${location}`);
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Weather data not found');
        }

        const data = await response.json();

        // Display the data in the UI
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        console.error('Failed to fetch weather data:', error.message);
        alert(`Failed to fetch weather data: ${error.message}`);
    }
}

