import '@/styles/app.sass'
import type { AppProps } from 'next/app'
import { Header, Main, Footer, Menu } from '@/components/layout'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Header />
      <Main>
        <Menu />
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  )
}

export default MyApp
