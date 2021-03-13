import { Vector as VectorSource } from 'ol/source'
import { Options } from 'ol/source/Vector'

const vector = ({ features }: Options): VectorSource => {
  return new VectorSource({
    features,
  })
}

export default vector
