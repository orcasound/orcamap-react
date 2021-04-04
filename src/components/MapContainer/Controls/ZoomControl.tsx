import React, { useContext, useEffect } from 'react'
import Zoom from 'ol/control/Zoom'
import MapContext from '../Map/MapContext'

const ZoomControl: React.FC = () => {
  const { map } = useContext(MapContext)

  useEffect(() => {
    if (!map.controls) return

    const zoomControl = new Zoom({})

    // map.controls.push(zoomSliderControl)
    map.controls.push(zoomControl)
    // eslint-disable-next-line consistent-return
    return () => map.controls.remove(zoomControl)
  }, [map])

  return null
}

export default ZoomControl
