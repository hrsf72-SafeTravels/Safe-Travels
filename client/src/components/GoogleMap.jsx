import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService;
    directionsDisplay.setMap(this.map);
    this.map = this.createMap();
    console.log(this.map)
  }

  createMap() {
    const sanfrancisco = new google.maps.LatLng(37.774546, -122.433523);
    const mapOptions = {
      zoom: 10,
      center: sanfrancisco,
    }
    return new google.maps.Map(this.refs.map, mapOptions);
  }

  render() {
    return (<div className="GMap">
      <h3> hi</h3>
      <div ref="mapCanvas" className="GMap-canvas">
      </div>
    </div>);
  }
}

export default GoogleMap;
