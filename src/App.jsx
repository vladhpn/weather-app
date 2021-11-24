import {useState, useEffect} from 'react'
import SearchBar from './components/SearchBar'
import fetchWeather from './server-api/server'
import WeatherData from './components/WeatherData'
import moment from 'moment'


function App() {
  const [cityWeather, setCityWeather] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [temp, setTemp] = useState('')
  const [clouds, setClouds] = useState('')
  const [humidity, setHumidity] = useState('')
  const [wind, setWind] =useState('')
  const [text, setText] = useState('')
  const [code, setCode] = useState('')
  const [icon, setIcon] = useState('')

  useEffect(() => {
    if(!searchQuery) return
    setLoading(true)
    fetchWeather(searchQuery).then(data => setCityWeather(prev => [data]))
    .finally(() => setLoading(false))
   
  }, [searchQuery])

  console.log(cityWeather)


  useEffect(() => {
    if(cityWeather.length > 0){
      setCity(cityWeather[0].location.name)
      setCountry(cityWeather[0].location.country)
      setTemp(cityWeather[0].current.temp_c)
      setHumidity(cityWeather[0].current.humidity)
      setClouds(cityWeather[0].current.cloud)
      setWind(cityWeather[0].current.wind_kph)
      setText(cityWeather[0].current.condition.text)
      setCode(cityWeather[0].current.condition.code)
      setIcon(cityWeather[0].current.condition.icon)
    }
  },[cityWeather])


const now = moment()
  console.log(now.format('LLLL'));

  const onChangeQuery = (searchQuery) => {
    setSearchQuery(searchQuery)
  }

  return (
    <>
  <SearchBar onSubmit={onChangeQuery}/>
    <WeatherData  weather={cityWeather}/>

    {city}{country}
    <p>температура: {temp}&deg;</p>

    <p>скорость ветрка {wind}км/ч</p>
    
    <p>владжность: {humidity}</p>
    <p>облачность: {clouds}</p>
    <p>text: {text} </p>
    <p>код погоды: {code}</p>

    
<img src={icon}  alt='logo'/>

    {/* https://cdn.weatherapi.com/weather/64x64/day/389.png */}
    </>
  );
}

export default App;
