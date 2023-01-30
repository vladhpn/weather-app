import moment from 'moment';
import styles from './styles.module.scss';

const WeatherData = ({ cityWeather }) => {
  const now = moment();
  const time = now.format('hh:mm a - ddd, D MMM YY');

  const toCel = (data) => {
  return Math.ceil(data - 273.15)
  } 
  
  return (
    <div>
      <h1 className={styles.title}> Weather App </h1>
      <div className={styles.box}>
        {cityWeather.map((w) => (
          <ul key={w.id} className={styles.list}>
            <li className={styles.temp}>{toCel(w.main.temp)}&deg;</li>
            <li className={styles.box_item}>
              <p className={styles.name}>{w.name} </p>
              <p className={styles.time}>{time}</p>
            </li>
            <li>
              <p className={styles.text}>{w.weather[0].main}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default WeatherData;
