import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
<<<<<<< HEAD
import Entrance from './components/Entrance';
import Main from './components/Main';
import Login from './components/Login';
=======
import $ from 'jquery';
import Entrance from './components/entrance.jsx';
import Main from './components/main.jsx';
import login from './components/login.jsx';
>>>>>>> Display current temperatue of desination
import createHistory from '../../node_modules/history/createBrowserHistory';
import './css/calendar.css';

// import dummyYelpAttractionData from '../dummyYelpAttractionData.js';
// import dummyYelpRestaurantData from '../dummyYelpRestaurantData.js';

const history = createHistory();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      location: '',
    };
  }

  setLocationFromSearch(locationFromSearch) {
    this.setState({
      location: locationFromSearch.value,
    });
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route
            path="/" component={() =>
            (<Entrance setLocationFromSearch={this.setLocationFromSearch.bind(this)} />)}
          />
          <Route path="/main" component={() => (<Main location={this.state.location} />)} />
          <Route path="/login" component={login} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
