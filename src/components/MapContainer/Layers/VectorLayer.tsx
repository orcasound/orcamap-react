import React, { useContext, useEffect } from 'react'
import OLVectorLayer from 'ol/layer/Vector'
import GeoJSON from 'ol/format/GeoJSON'
import { get } from 'ol/proj'

// note: both the VectorLayer styleOptions object
// and the 'source' from line 33 will need to be hoisted
//  to be able to make multiple different vector layers
// for different data sources.
import { Style, Icon } from 'ol/style'

import MapContext from '../Map/MapContext'
import { vector } from '../Source'

const styleOptions = {
  MultiPointIcon: new Style({
    image: new Icon({
      src: '/assets/hydropin.png',
      scale: [0.25, 0.25],
    }),
  }),
}

interface Props {
  coordinates: number[][]
  zIndex: number
}

const VectorLayer: React.FC<Props> = ({ coordinates, zIndex = 0 }: Props) => {
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
                  coordinates,
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

    // eslint-disable-next-line
    return () => {
      if (map) {
        map.removeLayer(vectorLayer)
      }
    }
  }, [map, coordinates, zIndex])

  return null
}

export default VectorLayer
