import axios from 'axios';
// import { AUTH_TOKEN } from '../ser/server';

// axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

// const fetchWeather = (searchQuery) => {
//   return axios
//     .get(`/weather?q=${searchQuery}&lang=en&appid=${AUTH_TOKEN}`)
//     .then(({ data }) => data)
//     .catch((err) => console.log(err));
// // };

const fetchWeather = (searchQuery) => {
  // return axios
  //   .get(
  //     `http://api.weatherapi.com/v1/current.json?key=${AUTH_TOKEN}&q=${searchQuery}&aqi=no&lang=uk`
  //   )
  //   .then(({ data }) => data)
  //   .catch((err) => console.log(err));
};

export default fetchWeather;
