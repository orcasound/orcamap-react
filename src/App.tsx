import React from 'react'
import Map from './Map'
import Marker from './Marker'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Map //eslint-disable-next-line
          style="mapbox://styles/mapbox/light-v9"
          containerStyle={{
            height: '100vh',
            width: '100vw',
          }}
          zoom={[6.5]}
          center={[-123.35, 48.41]}
        >
          <Marker/>
        </Map>
      </header>
    </div>
  )
}

export default App
