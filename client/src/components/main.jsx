import React from 'react';
import { Link } from 'react-router-dom';
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

export default Main;
