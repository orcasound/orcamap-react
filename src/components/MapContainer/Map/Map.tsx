import React, { useRef, useState, useEffect } from 'react'
import './Map.css'
import * as ol from 'ol'
import MapContext from './MapContext'

interface Props {
  // eslint-disable-next-line
  children?: React.ReactNode
  zoom: number
  center: number[]
}

const Map: React.FC<Props> = ({ children, zoom, center }: Props) => {
  const mapRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [map, setMap] = useState({})

  // on component mount, create map object, set map state,
  // pass map state into mapcontext for access in layers.
  useEffect(() => {
    const options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
    }

    const mapObject = new ol.Map(options)
    mapObject.setTarget(mapRef.current)
    setMap(mapObject)

    return () => mapObject.setTarget(undefined)
  }, [zoom, center])

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  )
}

export default Map
