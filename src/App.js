import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const Map = ReactMapboxGl( {
  accessToken: "pk.eyJ1Ijoid2F0Y2hlcjAwMDkwIiwiYSI6ImNrZjFvanBqMzEyZXAycnBpZW4wcjZxZGEifQ.McDjwJKtdiwLb74QllMoeA"
})

const zoom = [8];

function App() {
  return (
    <Map
    style="mapbox://styles/mapbox/streets-v8"
    zoom={zoom}
    containerStyle={{
      height: "500px",
      width: "500px"
    }}>
      <Layer
        type="symbol"
        id="marker"
        layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        <Feature coordinates={[-0.481747846041145, 52.3233379650232]}/>
      </Layer>
    </Map>
  );
}

export default App;
