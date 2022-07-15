import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'windi.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='rubik'>
      <ToastContainer
        autoClose={3000}
        newestOnTop
      />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
