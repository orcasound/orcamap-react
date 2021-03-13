import React from 'react'

interface children {
  children?: React.ReactNode
}
const Layers: React.FC<children> = ({ children }: children) => {
  return <div>{children}</div>
}

export default Layers
