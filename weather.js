/**
 * Fetches weather data for a city from OpenWeatherMap API
 * Get a free API key at: https://openweathermap.org/api
 *
 * IMPORTANT: The API key is now loaded from an environment variable
 * (OPENWEATHER_API_KEY in a .env file) instead of being hard-coded here.
 */

// Load environment variables from .env (requires `npm install dotenv`)
// If you run with `node -r dotenv/config weather.js` you can remove this require.
require('dotenv').config();

const API_KEY = process.env.OPENWEATHER_API_KEY;
if (!API_KEY) {
  throw new Error(
    'Missing OPENWEATHER_API_KEY. Create a .env file with OPENWEATHER_API_KEY=your_key_here'
  );
}
const CITY = 'Kolkata';

function buildApiUrl(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;
}

async function getWeather(city = CITY) {
  try {
    const url = buildApiUrl(city);
    console.log(`Running: ${__filename}`);
    console.log(`Requesting city: ${city}`);
    console.log(`URL: ${url}`);

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          '401 Unauthorized: Check your API key at openweathermap.org. New keys can take up to 2 hours to activate.'
        );
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const resolvedName = data?.name ?? city;
    const resolvedCountry = data?.sys?.country ? `, ${data.sys.country}` : '';

    console.log(`Weather in ${resolvedName}${resolvedCountry}:`);
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

const cliCity = process.argv.slice(2).join(' ').trim();
getWeather(cliCity || CITY);
