import React, { useContext, useEffect } from 'react'
import MapContext from '../Map/MapContext'
import OLVectorLayer from 'ol/layer/Vector'
import { vector } from '../Source'
import GeoJSON from 'ol/format/GeoJSON'
import { get } from 'ol/proj'
import hydropin from './hydropin.png'

// note: both the VectorLayer styleOptions object
// and the 'source' from line 33 will need to be hoisted
//  to be able to make multiple different vector layers
// for different data sources.

import { Icon, Style } from 'ol/style'
const styleOptions = {
  MultiPointIcon: new Style({
    image: new Icon({
      src: hydropin,
      scale: [0.25, 0.25],
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
      style: styleOptions.MultiPointIcon,
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
