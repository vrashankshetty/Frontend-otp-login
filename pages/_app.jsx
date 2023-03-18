import '../styles/globals.css'
import CreateContext from '../components/context/CreateContext'



function MyApp({ Component, pageProps }) {

  return(
   <CreateContext>
   <Component {...pageProps} />
   </CreateContext>
  )
}

export default MyApp
