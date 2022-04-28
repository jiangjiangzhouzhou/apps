import React, {useEffect, useState} from 'react';
import styles from './Forecast.module.css';
import Weather from './components/Weather';
import getForecast from '../../apis/getForecast';

const Forecast = ({city}) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const {data} = await getForecast(city.id);
      setForecast(data.list);
      console.log(data.list);
    }
    fetchForecast();
  }, [city]);
  return (
    <div className={styles.forecast}>
      <h2 className={styles.header}>Forecast</h2>
      <div className={styles.weathers}>
        <Weather day="MON" 
        temperature={forecast[0].main.temp}
        weather={{ icon: forecast[0].weather[0].icon, description: forecast[0].weather[0].description}} 
        />
        <Weather 
          day="TUE" 
          temperature={forecast[1].main.temp}
          weather={{ icon: forecast[1].weather[0].icon, description: forecast[1].weather[0].description}} 
        />
        <Weather 
          day="WED" 
          temperature={forecast[2].main.temp}
          weather={{ icon: forecast[2].weather[0].icon, description: forecast[2].weather[0].description}} 
        />
        <Weather 
          day="THU" 
          temperature={forecast[3].main.temp}
          weather={{ icon: forecast[3].weather[0].icon, description: forecast[3].weather[0].description }} 
        />
        <Weather 
          day="FRI" 
          temperature={forecast[4].main.temp}
          weather={{ icon: forecast[4].weather[0].icon, description: forecast[4].weather[0].description }} 
        />
      </div>
    </div>
)
}

export default Forecast;