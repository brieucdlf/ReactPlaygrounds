import axios from 'axios';

const API_KEY = '6462898c6b9886726b697968cc2203c0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.info('Request Info:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
