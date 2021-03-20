import React from 'react'
import { Route } from 'react-router-dom'
import Main from './components/main'

const App: React.FC = () => {
  return <Route path="/" component={Main} />
}

export default App
