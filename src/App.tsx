import React from 'react'
import MapContainer from './components/MapContainer/MapContainer'
// import Map from './Map'
// import Marker from './Marker'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h1 style={{ textAlign: 'center' }}> (test OL) Orca Map</h1>
      <MapContainer />
    </div>
  )
}

export default App
