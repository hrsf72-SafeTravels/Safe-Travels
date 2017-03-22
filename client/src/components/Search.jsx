import React, { PropTypes } from 'react';
import { Redirect } from 'react-router';

const propTypes = {
  setLocationFromSearch: PropTypes.func.isRequired,
  setGeoLocationFromSearch: PropTypes.func.isRequired,
  queryYelp: PropTypes.func.isRequired,
  queryCrime: PropTypes.func.isRequired,
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = this.textInput;
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
    });
  }

  handleSubmit() {
    const destination = document.getElementById('pac-input').value;
    const geocoder = new google.maps.Geocoder();
    // can refactor these two calls to use lat/lng
    Promise.all([
      this.props.setLocationFromSearch(destination),
      this.props.queryYelp({destination: destination}),
      geocoder.geocode({ address: destination }, (results, status) => {
        if (status === 'OK') {
          this.props.queryCrime(results[0].geometry.location);
          this.props.setGeoLocationFromSearch(results[0].geometry.location);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      }),
    ]).then(() => {
      this.props.handleIsSent();
    }).catch((err) => {
      console.log("===== this is the error", err);
    });
  }

  render() {
    return (
      <div>
        { this.props.isSent ?
          <Redirect to="/main" /> :
          <form
            id="pac-container"
            onSubmit={event =>
              this.handleSubmit(event)
            }
          >
            <input
              className="search-location"
              id="pac-input"
              type="text"
              placeholder="Enter a destination"
              /* onChange={this.handleChange} */
            />
            <input
              id="search-input"
              className="btn btn-info"
              type="submit"
            />
          </form>
        }
      </div>
    );
  }
}

SearchBar.propTypes = propTypes;
export default SearchBar;
