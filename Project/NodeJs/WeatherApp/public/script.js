async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    try {
      const response = await fetch(`/weather?city=${city}`);
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  }
  
  function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    if (data.error) {
      weatherInfoDiv.innerText = data.error;
      return;
    }
    const { name, main: { temp, humidity }, weather } = data;
    weatherInfoDiv.innerHTML = `
      <h2>${name}</h2>
      <p>Temperature: ${temp}°C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Weather: ${weather[0].description}</p>
    `;
  }
  