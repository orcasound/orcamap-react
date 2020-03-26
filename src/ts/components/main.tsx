import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import Orcamap from './orcamap/orcamap'

export default function Main() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Orcamap} />
      </Switch>
    </React.Fragment>
  )
}
