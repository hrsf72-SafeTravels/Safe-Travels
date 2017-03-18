import React from 'react';
import { Link } from 'react-router-dom';
import AttractionList from './AttractionList.jsx';
import RestaurantList from './RestaurantList.jsx';

import dummyYelpAttractionData from './../../../dummyYelpAttractionData.js';
import dummyYelpRestaurantData from './../../../dummyYelpRestaurantData.js';
import Weather from './weather.jsx';

const Main = (props) => (
  <div>
    <header>
      The main page of Safe Travel
    </header>
    <div>
      <Link to="/">Go back to Entrance</Link>
    </div>
    <div>
      <Link to="/login">login</Link>
    </div>
    <Weather location={props.location} />
    <footer>
      Be Safe!!
    </footer>
  </div>
);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attractionResults: dummyYelpAttractionData,
      restaurantResults: dummyYelpRestaurantData,
    };
  }

  render() {
    return (<div>
      <header>
        The main page of Safe Travel
      </header>
      <div>
        <Link to="/">Go back to Entrance</Link>
        <AttractionList attractions={this.state.attractionResults.businesses} />
        <RestaurantList restaurants={this.state.restaurantResults.businesses} />
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <Weather location={this.props.location} />
      <footer>
        Be Safe!!
      </footer>
    </div>);
  }
}

export default Main;
