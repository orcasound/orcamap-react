import React from 'react'
import ReactMapboxGL from 'react-mapbox-gl'
import { ZoomControl } from 'react-mapbox-gl'

const ReactMap = ReactMapboxGL({
  // accessToken:
  accessToken:
    'pk.eyJ1Ijoic3RvcmNrcGhvdG9zIiwiYSI6ImNrODNvYmc0czAxazMzbW1yZDdyeWZoNjAifQ.PiAIkQrVS4a5c7dBgcElhQ',
})

class Map extends React.Component {
  render() {
    return (
      <div>
        <ZoomControl />
        <ReactMap
          style="mapbox://styles/mapbox/light-v9"
          containerStyle={{
            height: '100vh',
            width: '100vw',
          }}
          zoom={[6.5]}
          center={[-123.35, 48.41]}
        />
      </div>
    )
  }
}

export default Map
