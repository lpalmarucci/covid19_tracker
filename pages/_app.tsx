import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import Header from '../components/Header'
import { ThemeProvider } from '../context/theme.context'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )

}

export default MyApp
