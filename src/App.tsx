import React from 'react'
import { Route } from 'react-router-dom'
import Main from './components/main'

const Approutes: React.FC = () => {
  return <Route path="/" component={Main} />
}

export default Approutes
