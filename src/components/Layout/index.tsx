/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-types */
import Header from '../Header'

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <Header />
      <>{children}</>
    </div>
  )
}

export default Layout
