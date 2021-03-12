import { useContext, useEffect } from 'react'
import MapContext from '../Map/MapContext'
import OLTileLayer from 'ol/layer/Tile'
import { osm } from '../Source'

interface props {
  zIndex: number
}

// generates actual map background. source can alternately be fed from above
const TileLayer: React.FC<props> = ({ zIndex = 0 }: props) => {
  const { map } = useContext(MapContext)

  useEffect(() => {
    if (!map.addLayer) return

    const tileLayer = new OLTileLayer({
      source: osm(),
      zIndex,
    })

    // do not change unless map context is hoisted from MapContainer.
    map && map.addLayer && map.addLayer(tileLayer)
    tileLayer.setZIndex(zIndex)

    return () => {
      if (map) {
        map.removeLayer(tileLayer)
      }
    }
  }, [map, zIndex])

  return null
}

export default TileLayer
