import OpenWeatherMap from '../../utils/OpenWeatherMap';

const getWeather = (id) => OpenWeatherMap.get('/weather', {
  params: {
    id,
  },
});

export default getWeather;