import '@/styles/app.sass'
import type { AppProps } from 'next/app'
import { Header, Main, Footer } from '@/components/layout'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
