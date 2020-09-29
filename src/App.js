import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Source, Image, MapContext, Marker, Popup} from 'react-mapbox-gl'

import mapboxgl from 'mapbox-gl';

import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

import hydrophoneIconImage from "./Asset 10 small.png"
import iconButtonImage from "./icons8-play-button-64.png"

import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';

import {Box} from '@material-ui/core';

import MapButton from "./MapButton"

const Map = ReactMapboxGl( {
  accessToken: "pk.eyJ1Ijoid2F0Y2hlcjAwMDkwIiwiYSI6ImNrZjFvanBqMzEyZXAycnBpZW4wcjZxZGEifQ.McDjwJKtdiwLb74QllMoeA"
})

const zoom = [8];

// TODO: update these with data about the hydrophones
const hydrophonesGeoJSONSource = {
  "type" : "geojson", 
  "data" : {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ -90.0715, 29.9510 ]
        },
        "properties": {
          "name": "Bush Point",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ -92.7298, 30.7373 ]
        },
        "properties": {
          "name": "Port Townsend",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ -91.1473, 30.4711 ]
        },
        "properties": {
          "name": "Haro Strait",
        }
      }
    ]
  }
}

class App extends React.Component {

  constructor() {
    super(); 
    this.state = {popupActive: false, activeHydrophoneCoordinates: null, activeHydrophoneName: null} // active hydrophone = hydrophone that user has opened a popup for
    this.state.current = this.state;
  }

  getCoordinatesFromFeedSlug = (feedSlug) => {
    var features = hydrophonesGeoJSONSource.data.features
    for (let i=0; i<features.length; ++i) {
      let feature = features[i]
      if (feature.properties.name.split(" ").join("-").toLowerCase() == feedSlug) {
        return feature.geometry.coordinates;
      }
    }
    console.log("internal error in getCoordinatesFromFeedSlug...")
    return null;
  }

  getHydrophoneNameFromFeedSlug = (feedSlug) => {
    var features = hydrophonesGeoJSONSource.data.features
    for (let i=0; i<features.length; ++i) {
      let feature = features[i]
      if (feature.properties.name.split(" ").join("-").toLowerCase() == feedSlug) {
        return feature.properties.name;
      }
    }
    console.log("internal error in getHydrophoneNameFromFeedSlug...")
    return null;
  }

  handleMarkerClick = (feedSlug) => {
    var coordinates = this.getCoordinatesFromFeedSlug(feedSlug);
    var activeHydrophoneName = this.getHydrophoneNameFromFeedSlug(feedSlug)
    console.log("coordinates = " + coordinates)
    console.log("active hydrophone name = " + activeHydrophoneName)
    this.setState({popupActive: true, activeHydrophoneCoordinates: coordinates, activeHydrophoneName: activeHydrophoneName})
  }

  render() {
    return (
      <>
        <Map
        style="mapbox://styles/mapbox/streets-v8"
        zoom={zoom}
        center={[-93.1473, 30.4711]}
        containerStyle={{             
          height: "500px",
          width: "500px"
        }}>
            
          <Source id="mySourceID" geoJsonSource={hydrophonesGeoJSONSource} />

          <MapContext.Consumer>
            {(map) => { // 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png'
                map.loadImage(hydrophoneIconImage , function(error, image) {
                  if (error) throw error;
                  if (!map.hasImage('hydrophoneIcon')) map.addImage('hydrophoneIcon', image);
                });
              }}
          </MapContext.Consumer>

          <Layer layout={{'icon-image' : 'hydrophoneIcon'}} sourceId='mySourceID' />

          <Marker
            coordinates={  [ -90.0715, 29.9510 ]}
            anchor="left"
            onClick={() => this.handleMarkerClick('bush-point')}>
              <Box ml={3}>
                <MapButton buttonText="Bush Point" />
              </Box>
          </Marker>

          <Marker
            coordinates={ [ -92.7298, 30.7373 ]}
            anchor="left"
            onClick={() => this.handleMarkerClick('port-townsend')}>
              <Box ml={3}>
                <MapButton buttonText="Port Townsend" />
              </Box>
          </Marker>

          <Marker
            coordinates={ [ -91.1473, 30.4711 ]}
            anchor="left"
            onClick={() => this.handleMarkerClick('haro-strait')}>
              <Box ml={3}>
                <MapButton buttonText="Haro Strait" />
              </Box>
          </Marker>

          {this.state.popupActive && 
            <Popup coordinates={this.state.activeHydrophoneCoordinates}>
              <h1>Hello!</h1> 
            </Popup>
          }

        </Map>
        <img src={hydrophoneIconImage} alt="hydrophone icon image" />
      </>
    );
  }
}

export default App;
