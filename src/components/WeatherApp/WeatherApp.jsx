import {useState, useEffect} from 'react'
import fetchWeather from '../../server-api/server'
import WeatherData from '../WeatherData'
import RightBar from '../RightBar'
import Spinner from '../Spinner'
import styles from './styles.module.scss'

function WeatherApp() {
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

  const onChangeQuery = (searchQuery) => {
    setSearchQuery(searchQuery)
  }

  return (
    <>

    {!loading ? <div className={styles.app}>
    <WeatherData city={city} country={country} temp={temp}
    text={text}
    code={code} icon={icon}/>
    <RightBar onSubmit={onChangeQuery}  wind={wind} humidity={humidity} clouds={clouds}/>
      </div> :   <Spinner />  }
    </>
  );
}

export default WeatherApp;