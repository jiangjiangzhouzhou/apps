import React from 'react';
import styles from './Weather.module.css';
import Temperature from '../../../Temperature';

const Weather = ({
    day,
    temperature,
    weather
}) => (
    <div className={styles.weather}>
      <h3 className={styles.day}> {day}</h3>
      <img 
        className={styles.icon}
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
      />
      <div className={styles.temperature}>
        <Temperature>{temperature}</Temperature>
      </div>
    </div>
)
export default Weather;