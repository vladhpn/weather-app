import axios from 'axios';
import { AUTH_TOKEN } from '../ser/server';

const fetchWeather = (searchQuery) => {
  return axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=${AUTH_TOKEN}&q=${searchQuery}&aqi=no&lang=en`
    )
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export default fetchWeather;
