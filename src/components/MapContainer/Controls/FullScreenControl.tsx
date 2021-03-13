import React, { useContext, useEffect } from 'react'
import { FullScreen } from 'ol/control'
import MapContext from '../Map/MapContext'

const FullScreenControl: React.FC = () => {
  const { map } = useContext(MapContext)

  useEffect(() => {
    if (!map.controls) return

    const fullScreenControl = new FullScreen({})

    map.controls.push(fullScreenControl)

    return () => map.controls.remove(fullScreenControl)
  }, [map])

  return null
}

export default FullScreenControl
