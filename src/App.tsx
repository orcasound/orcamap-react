import React from 'react'
import MapContainer from './components/MapContainer/MapContainer'
import NavBar from './components/MapContainer/NavBar'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="App">
        <MapContainer />
      </div>
    </React.Fragment>
  )
}

export default App
