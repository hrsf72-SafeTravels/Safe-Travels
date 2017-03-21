import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery';
import 'react-dates/lib/css/_datepicker.css';
import './style.css';
import Entrance from './components/Entrance';
import Main from './components/Main';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      location: '',
      attractionResults: [],
      restaurantResults: [],
      mapDestinations: [],
    };
    this.selectDestination = this.selectDestination.bind(this);
    this.setLocationFromSearch = this.setLocationFromSearch.bind(this);
    this.queryYelp = this.queryYelp.bind(this);
  }

  selectDestination(yelpLocation) {
    this.setState({
      mapDestinations: this.state.mapDestinations.concat(yelpLocation),
    });
  }

  setLocationFromSearch(locationFromSearch) {
    console.log(locationFromSearch);
    this.setState({
      location: locationFromSearch,
    });
  }

  queryYelp(searchLocation) {
    const yelpQuery = {
      // change when correct
      location: searchLocation || 'san francisco',
      // default query -- add on based on user input after initial list
      query: 'casual',
    };
    $.ajax({
      url: '/yelp',
      type: 'POST',
      data: yelpQuery,
      success: function(restaurants) {
        // this is by default and will not change
        console.log('success fetching restaurants from server');
        yelpQuery.query = 'tourist attractions';
        $.ajax({
          url: '/yelp',
          type: 'POST',
          data: yelpQuery,
          success: function(attractions) {
            console.log('sucess fetching attractions from server', attractions);
            this.setState({
              // returns stringified
              attractionResults: JSON.parse(restaurants),
              restaurantResults: JSON.parse(attractions),
            });
          }.bind(this),
          error: function(error) {
            console.log('there was an error in fetching attractions from server');
          }
        });
      }.bind(this),
      error: function(error) {
        console.log('there was an error in fetching restaurants from server');
      },
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact path="/" component={() =>
            (<Entrance
              setLocationFromSearch={this.setLocationFromSearch}
              queryYelp={this.queryYelp}
              location={this.state.location}
            />)}
          />
          <Route
            path="/main"
            component={() => (
              <Main
                props={this.state}
                selectDestination={this.selectDestination}
                location={this.state.location}
              />)}
          />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
