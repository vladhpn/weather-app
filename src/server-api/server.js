import axios from 'axios';
import { AUTH_TOKEN } from '../ser/server';

export const fetchWeather = (searchQuery) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${AUTH_TOKEN}`
    )
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const fetchUserPositionWeather = (lat, lon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${AUTH_TOKEN}`
    )
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};
