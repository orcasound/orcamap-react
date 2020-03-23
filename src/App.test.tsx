import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

//TODO: window is not defined, Mapbox Needs it

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Orca Mapt/i)
  expect(linkElement).toBeInTheDocument()
})
