import React from 'react'

interface Props {
  // eslint-disable-next-line
  children?: React.ReactNode
}

const Controls: React.FC<Props> = ({ children }: Props) => {
  return <div>{children}</div>
}

export default Controls
