import React, { useContext, useEffect } from 'react'
import MapContext from '../Map/MapContext'
import OLVectorLayer from 'ol/layer/Vector'
import { vector } from '../Source'
import GeoJSON from 'ol/format/GeoJSON'
import { get } from 'ol/proj'

// note: both the VectorLayer styleOptions object and the 'source' from line 33 will need to be hoisted to be able to make multiple different vector layers for different data sources.
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'

const styleOptions = {
  MultiPoint: new Style({
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({ color: 'white' }),
      stroke: new Stroke({ color: 'black', width: 2 }),
    }),
  }),
}

interface props {
  coordinates: number[][]
  zIndex: number
}

const VectorLayer: React.FC<props> = ({ coordinates, zIndex = 0 }: props) => {
  const { map } = useContext(MapContext)

  useEffect(() => {
    if (!map.addLayer) return

    const vectorLayer = new OLVectorLayer({
      source: vector({
        features: new GeoJSON().readFeatures(
          {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {
                  kind: 'Sighting',
                  name: 'SRKW',
                  state: 'WA',
                },
                geometry: {
                  type: 'MultiPoint',
                  coordinates: coordinates,
                },
              },
            ],
          },
          {
            featureProjection: get('EPSG:3857'),
          },
        ),
      }),
      style: styleOptions.MultiPoint,
    })

    map.addLayer(vectorLayer)
    vectorLayer.setZIndex(zIndex)

    return () => {
      if (map) {
        map.removeLayer(vectorLayer)
      }
    }
  }, [map, coordinates, zIndex])

  return null
}

export default VectorLayer