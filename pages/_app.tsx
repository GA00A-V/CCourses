import type { AppProps } from 'next/app'
import '../styles/globalCSS.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
