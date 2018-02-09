import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import HeroHeader from './HeroHeader';

//The cocktail
let latitude = 40.454207;
let longitude = -3.699970;
const radius = 500;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopsBus: {},
    }
  }

  fetchInfoBuses() {
    const idClient = "WEB.SERV.redlim@gmail.com";
    const passKey = "FB5B0E17-88EB-407E-A222-97F0916E0C41";
    const urlGetStopsFromXY = "https://openbus.emtmadrid.es:9443/emt-proxy-server/last/geo/GetStopsFromXY.php";
    const that = this
    fetch(urlGetStopsFromXY, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:
      "idClient="+idClient+"&passKey="+passKey+"&latitude="+latitude+"&longitude="+longitude+"&Radius="+radius+"&statistics=&cultureInfo=",
    }).then((response) => {
      return response.json();
    }).then((data) => {
      that.setState({
        stopsBus: data,
      });
    })
  }

  render() {
    console.log(this.state.stopsBus);
    return (
    <div>
        <section className="hero">
          <h1 className="hero-title uppercase margin-title center">bus app</h1>
          <p className="hero-subtitle center padding-subtitle">El mundo, en la palma de tu mano</p>
        </section>
        <div style={{width:'200px', height: '200px'}}>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            bootstrapURLKeys={{key: 'AIzaSyC7n0BhHlxsVU_li9hGJMFIFbYQcFqaggw'}}
            >
          </GoogleMapReact>
      </div>
    </div>
    );
  }

  componentDidMount() {
    this.fetchInfoBuses();
  }
}

App.defaultProps={
  center: {lat:40.41, lng:-3.70},
  zoom: 12
};

export default App;
