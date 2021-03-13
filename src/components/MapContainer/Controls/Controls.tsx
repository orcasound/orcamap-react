import React from 'react'

interface props {
  children?: React.ReactNode
}

const Controls: React.FC<props> = ({ children }: props) => {
  return <div>{children}</div>
}

export default Controls
