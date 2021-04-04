import React, { useRef, useState, useEffect } from 'react'
import './Map.css'
import * as ol from 'ol'
import MapContext from './MapContext'

interface Props {
  // eslint-disable-next-line
  children?: React.ReactNode
  zoom: number
  center: number[]
  minZoom: number
  maxZoom: number
  projection: string
}

// ol/control/(minresolution, maxresolution) can be added
// if considered necessary in future
const Map: React.FC<Props> = ({
  children,
  zoom,
  center,
  maxZoom,
  minZoom,
  projection,
}: Props) => {
  const mapRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [map, setMap] = useState({})

  // on component mount, create map object, set map state,
  // pass map state into mapcontext for access in layers.
  useEffect(() => {
    const options = {
      view: new ol.View({
        center,
        zoom,
        minZoom,
        maxZoom,
        projection,
      }),
      layers: [],
      controls: [],
      overlays: [],
    }

    const mapObject = new ol.Map(options)
    mapObject.setTarget(mapRef.current)
    setMap(mapObject)

    return () => mapObject.setTarget(undefined)
  }, [center, zoom, minZoom, maxZoom, projection])

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  )
}

export default Map
