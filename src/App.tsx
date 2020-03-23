import React from 'react'
import Map from './Map'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map //eslint-disable-next-line
          style="mapbox://styles/mapbox/streets-v11"
          containerStyle={{
            height: '100vh',
            width: '100vw',
          }}
        />
      </header>
    </div>
  )
}

export default App
