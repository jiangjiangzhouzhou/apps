import styles from './App.module.css';
import Current from './components/Current';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities/OtherCities';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.weather}>
        <div className={styles.top}>
          <Current />
        </div>
        <div className={styles.bottom}>
          <OtherCities />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
