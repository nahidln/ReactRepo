import '@/styles/globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function App({ Component, pageProps }) {
  return <div>
  <Header />
    <h2 className='main'>My First React Application</h2>
  <Component {...pageProps} />
  <Footer />
  </div>
}
