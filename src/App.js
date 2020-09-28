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
          "name": "Fred",
        "gender": "Male"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ -92.7298, 30.7373 ]
        },
        "properties": {
          "name": "Martha",
        "gender": "Female"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ -91.1473, 30.4711 ]
        },
        "properties": {
          "name": "Zelda",
        "gender": "Female"
        }
      }
    ]
  }
}

function App() {
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
                if (!map.hasImage('cat')) map.addImage('cat', image);
              });
              map.loadImage(iconButtonImage , function(error, image) {
                if (error) throw error;
                if (!map.hasImage('buttonImage')) map.addImage('buttonImage', image);
              });
            }}
        </MapContext.Consumer>

        <Layer layout={{'icon-image' : 'cat'}} sourceId='mySourceID' />

        <Marker
          coordinates={ [ -91.1473, 30.4711 ]}
          anchor="left">
            <Box ml={3}>
              <MapButton buttonText="Bush Point" />
            </Box>
        </Marker>

      </Map>
      <img src={hydrophoneIconImage} alt="hydrophone icon image" />
    </>
  );
}

export default App;
