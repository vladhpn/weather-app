import axios from 'axios';
// const AUTH_TOKEN = 'd3e864bfd7b2d0ef94f3cbce33325e20';
// axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

// const fetchWeather = (searchQuery) => {
//   return axios
//     .get(`/weather?q=${searchQuery}&lang=en&appid=${AUTH_TOKEN}`)
//     .then(({ data }) => data)
//     .catch((err) => console.log(err));
// };

const AUTH_TOKEN = 'ba953cbd1f1046589e7151922212411';

const fetchWeather = (searchQuery) => {
  return axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=${AUTH_TOKEN}&q=${searchQuery}&aqi=no&lang=uk`
    )
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export default fetchWeather;
