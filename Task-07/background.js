
chrome.runtime.onInstalled.addListener(() => {
  console.log('Kalashnikov Weather Assistant extension installed or updated.');
});


chrome.action.onClicked.addListener((tab) => {
  console.log('Extension icon clicked!');

  fetchWeatherData('New York');
});

function fetchWeatherData(location) {
  console.log(`Fetching weather data for ${location}...`);
  
  const apiKey = '7920c3c8af00cf0e24966c5e880db0dc'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Weather Data:', data);
      
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

