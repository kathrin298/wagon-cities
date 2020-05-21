import React from 'react';
import { connect } from 'react-redux';

import City from '../containers/city';

const CityList = (props) => {
  return (
    <ul className="list-group cities">
      {props.cities.map((city) => {
        return <City city={city} key={city.slug} />;
      })}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
