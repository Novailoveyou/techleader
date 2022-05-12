import '@/styles/app.sass'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
