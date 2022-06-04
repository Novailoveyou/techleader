import 'reactjs-popup/dist/index.css'
import 'nprogress/nprogress.css'
import '@/styles/app.sass'
import { TGeneralRoute } from '@/types/index'
import { useState, useEffect } from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config'
import { prod } from '@/config/index'
import { Main } from '@/components/layout'
import { SeoGeneralLogoJsonLd } from '@/components/seo'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // handleUtms({ router })
    // handleReferer()

    // NProgress.configure({
    //   showSpinner: false
    // })
    //

    const start = () => {
      NProgress.start()
      setIsLoading(true)
    }
    const end = (url: TGeneralRoute) => {
      NProgress.done()
      setIsLoading(false)
      // pageview({ url })
    }
    // Router.events.on('routeChangeStart', start)
    // Router.events.on('routeChangeComplete', end)
    // Router.events.on('routeChangeError', end)
    return () => {
      // Router.events.off('routeChangeStart', start)
      // Router.events.off('routeChangeComplete', end)
      // Router.events.off('routeChangeError', end)
    }
  }, [router])

  if (prod) {
    console.log = () => undefined
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <SeoGeneralLogoJsonLd />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(window.dataLayer)
  // console.log(metric)
}

export default MyApp
