import SearchBar from '../SearchBar';
import styles from './styles.module.scss';

const RightBar = ({ onSubmit, wind, humidity, clouds }) => {
  return (
    <div className={styles.box}>
      <SearchBar onSubmit={onSubmit} />
      <div className={styles.weather_box}>
        <div className={styles.content_box}>
                  <h3 className={styles.title}> Weather Details</h3>
          <ul>
            <li className={styles.text}>Wind speed: {wind} km/h</li>
            <li className={styles.text}>Humidity: {humidity}%</li>
            <li className={styles.text}>Clouds: {clouds}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
