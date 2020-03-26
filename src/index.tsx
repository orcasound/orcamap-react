import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRoutes from './ts/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root'),
)
