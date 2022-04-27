import OpenWeatherMap from '../../utils/OpenWeatherMap';

const getWeathers = (ids) => OpenWeatherMap.get('/group', {
  params: {
    id: ids.join(','),
  },
});

export default getWeathers;