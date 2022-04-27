import React, {useState,useEffect} from 'react';
import styles from './OtherCities.module.css';
import classNames from 'classnames/bind';
import City from './components/City';

const cx = classNames.bind(styles);

const OtherCities = ({currentCity, setCity, weathers}) => {
    return (
      <div className={styles.otherCities}>
        <div className={cx('container')}>
          <h2 className={styles.header}>Other Cities</h2>
          <div className={styles.cities}>
            {weathers && weathers.map(city => {
              if (city.name === currentCity.name) {
                return null;
              }
              return (
                <City 
                  key={city.id}
                  name={city.name} 
                  temperature={parseInt(city.main.temp)}
                  weather={{ 
                    icon: city.weather[0].icon, 
                    description: city.weather[0].main,
                  }}
                  onClick = {() => setCity(city)}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default OtherCities;