/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable jsx-props-no-spreading
import type { AppProps } from 'next/app'
import '../styles/olmin.css'
import '../styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
