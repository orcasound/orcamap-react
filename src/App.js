import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Source, Image, MapContext, Marker} from 'react-mapbox-gl'

import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

import hydrophoneIconImage from "./Asset 10.png"
import iconButtonImage from "./icons8-play-button-64.png"

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
            }}
        </MapContext.Consumer>

        <Layer layout={{'icon-image' : 'cat'}} sourceId='mySourceID' />

        <Marker
          coordinates={[ -90, 30.4711]}
          anchor="bottom">
          <img src={iconButtonImage} />
        </Marker>


      </Map>
      <img src={hydrophoneIconImage} alt="hydrophone icon image" />
    </>
  );
}

export default App;
