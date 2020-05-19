import cities from '../cities';

function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export default setCities;
