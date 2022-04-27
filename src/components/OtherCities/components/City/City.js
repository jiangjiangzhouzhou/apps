import React from 'react';
import styles from './City.module.css';
import Temperature from '../../../Temperature';

const City = ({
  name,
  weather,
  temperature,
  onClick,
}) => (
  <button className={styles.city} onClick = {onClick}>
    <h3 className={styles.name}>{name}</h3>
    <div className={styles.temperature}>
      <Temperature>{temperature}</Temperature>
    </div>
    <img 
      data-testid="WEATHER_ICON"
      className={styles.weather}
      src={`http://openweathermap.org/img/wn/${weather.icon}.png`} 
      alt={weather.description} 
    />
  </button>
);

export default City;