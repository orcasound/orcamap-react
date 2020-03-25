import React from 'react'
import Map from './Map'
import Taskbar from './Taskbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Taskbar />
        <Map //eslint-disable-next-line
          style="mapbox://styles/mapbox/light-v9"
          containerStyle={{
            height: '100vh',
            width: '100vw',
          }}
          zoom={[6.5]}
          center={[-123.35, 48.41]}
        />
      </header>
    </div>
  )
}

export default App
