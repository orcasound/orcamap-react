import * as olSource from 'ol/source'
import { Options } from 'ol/source/XYZ'

const xyz = ({ url, attributions, maxZoom }: Options): olSource.XYZ => {
  return new olSource.XYZ({ url, attributions, maxZoom })
}

export default xyz
