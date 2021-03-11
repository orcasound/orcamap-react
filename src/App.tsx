import React from 'react'
import OpenLayerMap from './components/OpenLayerMap/OpenLayerMap'
import Map from './Map'
import Marker from './Marker'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* TODO: test grounds  */}
        <OpenLayerMap zoom={10} center={[50, 60]}>
          <div> hi i am a child </div>
        </OpenLayerMap>
        {/* TODO: test grounds  */}

        <Map //eslint-disable-next-line
          style="mapbox://styles/mapbox/light-v9"
          containerStyle={{
            height: '50vh',
            width: '50vw',
            margin: '10vh auto',
          }}
          zoom={[6.5]}
          center={[-123.35, 48.41]}
        >
          <Marker />
        </Map>
      </header>
    </div>
  )
}

export default App
