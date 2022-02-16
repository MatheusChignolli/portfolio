import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactQueryProvider } from 'providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  )
}

export default MyApp
