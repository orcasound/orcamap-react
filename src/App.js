import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Source} from 'react-mapbox-gl'

import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

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
    <Map
    style="mapbox://styles/mapbox/streets-v8"
    zoom={zoom}
    containerStyle={{
      height: "500px",
      width: "500px"
    }}>
      <Source id="mySourceID" geoJsonSource={hydrophonesGeoJSONSource} />
      <Layer type="symbol" layout={{'icon-image' : 'harbor-15'}} sourceId="mySourceID" />
    </Map>
  );
}

export default App;
