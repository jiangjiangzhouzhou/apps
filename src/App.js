import styles from './App.module.css';
import React, {useState, useEffect} from 'react';
import Current from './components/Current';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities/OtherCities';
import getWeathers from './apis/getWeathers';

const defaultCity = {name: 'Sydney', id: '2147714'};
const CITIES = [{
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

function App() {
  const [city, setCity] = useState(defaultCity);
  const [weathers, setWeathers] = useState([]);
  const weather = weathers && weathers.find(w => w.name === city.name);

  useEffect(() => {
    const fetchWeather = async () => {
      const ids = CITIES.map((c) => c.id);
      const {data} = await getWeathers(ids);
      setWeathers(data.list);
    }
    fetchWeather();
  }, []);
  return (
    <div className={styles.app}>
      <div className={styles.weather}>
        <div className={styles.top}>
          <Current weather={weather}/>
        </div>
        <div className={styles.bottom}>
          <OtherCities setCity={setCity} currentCity={city} weathers={weathers}/>
          <Forecast city={city}/>
        </div>
      </div>
    </div>
  );
}

export default App;
