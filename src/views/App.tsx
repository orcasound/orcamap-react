import React from 'react'
import Nav from '../components/MapContainer/NavBar'
import MapContainer from '../components/MapContainer/MapContainer'

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <MapContainer />
    </div>
  )
}

export default App
