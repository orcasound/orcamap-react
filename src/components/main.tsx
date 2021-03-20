import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import MapContainer from './MapContainer/MapContainer'

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={MapContainer} />
      </Switch>
    </React.Fragment>
  )
}
export default Main
