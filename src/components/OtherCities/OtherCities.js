import React from 'react';
import styles from './OtherCities.module.css';
import classNames from 'classnames/bind';
import City from './components/City';

const cx = classNames.bind(styles);

export const CITIES = [{
  name: 'Melbourne',
  id: '2158177',
  temp: "9",
  weather: {icon: '11d', description: 'Thunderstorm' }
}, {
  name: 'Sydney',
  id: '2147714',
  temp: "15",
  weather: { icon: '01d', description: 'Clear' } 
}, {
  name: 'Brisbane',
  id: '2174003',
  temp: "11",
  weather: { icon: '03d', description: 'Clouds' }
}, {
  name: 'Perth',
  id: '2063523',
  temp: "7",
  weather: { icon: '50d', description: 'Mist' }
}];

const OtherCities = () => {
    return (
      <div className={styles.otherCities}>
        <div className={cx('container')}>
          <h2 className={styles.header}>Other Cities</h2>
          <div className={styles.cities}>
            {CITIES.map(city => {
              return (
                <City 
                  key={city.id}
                  name={city.name} 
                  temperature={parseInt(city.temp)}
                  weather={{ 
                    icon: city.weather.icon, 
                    description: city.weather.main,
                  }} 
                />
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default OtherCities;