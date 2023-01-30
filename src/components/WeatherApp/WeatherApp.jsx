import { useState, useEffect, useCallback } from 'react';
import { usePosition } from 'use-position';

import {
  fetchWeather,
  fetchUserPositionWeather,
} from '../../server-api/server';
import WeatherData from '../WeatherData';
import RightBar from '../RightBar';
import Spinner from '../Spinner';
import styles from './styles.module.scss';

function WeatherApp() {
  const [cityWeather, setCityWeather] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [clouds, setClouds] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');

  const watch = false;
  const { latitude, longitude } = usePosition(watch);

  const clearInput = useCallback(() => {
    setLoading(false);
    setSearchQuery('');
  }, []);

  useEffect(() => {
    if (!searchQuery) return;
    setLoading(true);
    fetchWeather(searchQuery)
      .then((data) => setCityWeather((prev) => [data]))
      .finally(clearInput);
  }, [cityWeather, searchQuery, clearInput]);

  useEffect(() => {
    if (!latitude || !longitude) return;
    setLoading(true);
    fetchUserPositionWeather(latitude, longitude)
      .then((data) => setCityWeather((prev) => [data]))
      .finally(setLoading(false));
  }, [latitude, longitude]);

  useEffect(() => {
    if (cityWeather.length > 0) {
      setHumidity(cityWeather[0].main.humidity);
      setClouds(cityWeather[0].clouds.all);
      setWind(cityWeather[0].wind.speed);
    }
  }, [cityWeather]);

  const onChangeQuery = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  return (
    <>
      {!loading ? (
        <div className={styles.app}>
          <WeatherData cityWeather={cityWeather} />
          <RightBar
            onSubmit={onChangeQuery}
            wind={wind}
            humidity={humidity}
            clouds={clouds}
            cityWeather={cityWeather}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default WeatherApp;
