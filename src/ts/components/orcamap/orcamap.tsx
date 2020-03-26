import React from 'react'
import Map from '../../constants/map'

export default function Orcamap() {
  return (
    <div className="App">
      <header className="App-header">
        <Map //eslint-disable-next-line
          style="mapbox://styles/mapbox/light-v9"
          containerStyle={{
            height: '90vh',
            width: '100vw',
          }}
          zoom={[6.5]}
          center={[-123.35, 48.41]}
        />
      </header>
    </div>
  )
}
