import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const DisplayComponent = () => {
  return <div> Loading ... </div>
}

const MapComponentWithNoSSR = dynamic(
  () => import('../components/MapContainer/MapContainer'),
  {
    loading: () => DisplayComponent(),
    ssr: false,
  },
)
const App: React.FC = () => {
  return (
    <Layout>
      <MapComponentWithNoSSR />
    </Layout>
  )
}

export default App
