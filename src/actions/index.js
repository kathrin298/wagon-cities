export default function setActiveCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}
