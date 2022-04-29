import React, {useEffect, useState, useMemo} from 'react';
import styles from './Forecast.module.css';
import Weather from './components/Weather';
import getForecast from '../../apis/getForecast';

const DATA = ['SUN','MON','TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Forecast = ({city}) => {
  const [forecast, setForecast] = useState(null);
  const today = useMemo(() => new Date(), []);
  const [day, setDay] = useState();
  console.log(day);
  useEffect(() => {
    const fetchForecast = async () => {
      const {data} = await getForecast(city.id);
      setForecast(data.list);
      setDay(today.getDay());
    }
    fetchForecast();
  }, [city,today]);
  return (
    <div className={styles.forecast}>
      <h2 className={styles.header}>Forecast</h2> 
      {forecast && (
        <div className={styles.weathers}>
          {forecast.map((w, index) => {
            if (index > 4) {
              return null;
            }
            let today = day+index+1;
            if (day+index+1 >6) {
              today = today - 7;
            }
            return (
            <Weather day={DATA[today]} 
            temperature={w.main.temp}
            weather={{ icon: w.weather[0].icon, description: w.weather[0].description}} 
            />)
          })}
        </div>
      )}
    </div>
)
}

export default Forecast;