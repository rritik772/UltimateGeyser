import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'windi.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
