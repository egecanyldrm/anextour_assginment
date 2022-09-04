import { Fragment } from "react"
import Navbar from "../components/navbar"
import '../styles/globals.scss'
import { SSRProvider } from 'react-bootstrap';
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <SSRProvider>
        <Navbar />
        <Component {...pageProps} />
      </SSRProvider>
    </Fragment>
  )
}

export default MyApp
