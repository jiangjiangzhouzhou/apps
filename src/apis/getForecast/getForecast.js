import OpenWeatherMap from '../../utils/OpenWeatherMap';

const getForecast= (id) => OpenWeatherMap.get('/forecast', {
  params: {
    id,
  },
});

export default getForecast;