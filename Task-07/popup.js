document.getElementById('getWeather').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location!');
    }
});

function getWeather(location) {
    const apiKey = '7920c3c8af00cf0e24966c5e880db0dc'; // Replace with your API key from OpenWeather
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const iconCode = data.weather[0].icon;

    document.getElementById('temp').innerText = `Temperature: ${temp}°C`;
    document.getElementById('description').innerText = `Condition: ${description}`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${windSpeed} m/s`;

    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
}
