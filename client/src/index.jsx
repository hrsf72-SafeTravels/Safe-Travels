import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import Entrance from './components/Entrance';
import Main from './components/Main';
import Login from './components/Login';
import CreateHistory from '../../node_modules/history/createBrowserHistory';
import './css/calendar.css';

// import dummyYelpAttractionData from '../dummyYelpAttractionData.js';
// import dummyYelpRestaurantData from '../dummyYelpRestaurantData.js';

const history = CreateHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   attractionsResults: dummyYelpAttractionData,
    //   restaurantsResults: dummyYelpRestaurantData,
    // };
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Entrance} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
