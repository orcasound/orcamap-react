import React from 'react'

interface Children {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode
}
const Layers: React.FC<Children> = ({ children }: Children) => {
  return <div>{children}</div>
}

export default Layers
