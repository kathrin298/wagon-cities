import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCities } from '../actions';

import City from '../containers/city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities;
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.props.cities.map((city) => {
          return <City city={city} key={city.slug} />;
        })}
      </ul>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setCities },
//     dispatch
//   );
// }

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
