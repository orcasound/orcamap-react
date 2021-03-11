/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState, useEffect } from 'react'
import './Map.module.css'
import MapContext from './MapContext'
import * as ol from 'ol'

type Coordinate = [number, number]

interface Props {
  children?: React.ReactNode
  zoom: number
  center: Coordinate
}

const OpenLayerMap: React.FC<Props> = ({ children, zoom, center }: Props) => {
  const mapRef = useRef()
  const [map, setMap] = useState({})

  // on component mount
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
  }, [])

  // zoom change handler TODO: issue with geView() not instantiated yet
  // useEffect(() => {
  //   if (!map) return
  //   map.getView().setZoom(zoom)
  // }, [zoom])

  // center change handler TODO: issue with geView() not instantiated yet
  // useEffect(() => {
  //   if (!map) return
  //   map.getView().setCenter(center)
  // }, [center])

  return (
    <MapContext.Provider value={{ map }}>
      {/* TODO: needs ref, ref typed incorrectly at present */}
      {/* <div ref={mapRef} className="ol-map"> */}
      <div className="ol-map">
        {children}
        hi
      </div>
    </MapContext.Provider>
  )
}
export default OpenLayerMap

// TODO: add Layer(s) (standard Geo layer and Marker Layer), Controls, put everything in a MapContainer component rather than directly in App (see 'ol' docs and articles below)
// TODO: after map stands up: add map markers (from test data)
// TODO: after map stands up: add map markers (from real data)
// https://github.com/mbrown3321/openlayers-react-map
// https://medium.com/swlh/how-to-incorporate-openlayers-maps-into-react-65b411985744
