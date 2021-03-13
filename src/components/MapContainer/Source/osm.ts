import * as olSource from 'ol/source'

const osm = (): olSource.OSM => {
  return new olSource.OSM()
}

export default osm
