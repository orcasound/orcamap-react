import { useContext, useEffect } from 'react'
import OLTileLayer from 'ol/layer/Tile'
import MapContext from '../Map/MapContext'
import { osm } from '../Source'

interface Props {
  zIndex: number
}

// generates actual map background. source can alternately be fed from above
const TileLayer: React.FC<Props> = ({ zIndex = 0 }: Props) => {
  const { map } = useContext(MapContext)

  useEffect(() => {
    if (!map.addLayer) return

    const tileLayer = new OLTileLayer({
      source: osm(),
      zIndex,
    })

    // do not change unless map context is hoisted from MapContainer.
    // eslint-disable-next-line
    map && map.addLayer && map.addLayer(tileLayer)
    tileLayer.setZIndex(zIndex)

    // eslint-disable-next-line
    return () => {
      if (map) {
        map.removeLayer(tileLayer)
      }
    }
  }, [map, zIndex])

  return null
}

export default TileLayer
