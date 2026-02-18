/**
 * Fetches weather data for Delhi from OpenWeatherMap API
 * Get a free API key at: https://openweathermap.org/api
 */

const API_KEY = 'd933322c7a296802e53776a0f9a44674'; // Replace with your OpenWeatherMap API key
const CITY = 'Delhi';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

async function getWeather() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          '401 Unauthorized: Check your API key at openweathermap.org. New keys can take up to 2 hours to activate.'
        );
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Weather in Delhi:');
    console.log('----------------');
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Feels like: ${data.main.feels_like}°C`);
    console.log(`Humidity: ${data.main.humidity}%`);
    console.log(`Description: ${data.weather[0].description}`);
    console.log(`Wind speed: ${data.wind.speed} m/s`);

    return data;
  } catch (error) {
    console.error('Failed to fetch weather:', error.message);
    throw error;
  }
}

getWeather();
