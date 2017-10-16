import React, { PropTypes } from 'react';
import RestaurantListEntry from './RestaurantListEntry';

const propTypes = {
  price: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  queryYelp: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired,
  saveDestination: PropTypes.func.isRequired,
};

const counter = { current: 0 };

const RestaurantList = props => (
  <div className="yelp-results-restaurants">
    <select
      className="yelp-select-price"
      value={props.price}
      onChange={(event) => {
        props.queryYelp({
          price: event.target.value,
          style: props.style,
        });
      }}
    >
      <option value="1">$</option>
      <option value="2">$$</option>
      <option value="3">$$$</option>
      <option value="4">$$$$</option>
    </select>
    <select
      className="yelp-select-style"
      value={props.style}
      onChange={(event) => {
        props.queryYelp({
          price: props.price,
          style: event.target.value,
        });
      }}
    >
      <option value="bars">Bars</option>
      <option value="cafe">Cafe</option>
      <option value="casual">Casual</option>
      <option value="clubs">Clubs</option>
      <option value="restaurant">Restaurant</option>
    </select>
    <ol>
      {props.restaurants.map(value =>
        <RestaurantListEntry
          key={counter.current++}
          restaurant={value}
          selectDestination={props.selectDestination}
          saveDestination={props.saveDestination}
        />,
      )}
    </ol>
  </div>
);

RestaurantList.propTypes = propTypes;
export default RestaurantList;
