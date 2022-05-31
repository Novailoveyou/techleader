import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { colors, prod } from '@/config/index'
// import { MetaIcons, MetaOg, MetaTwitter } from '@/components/meta'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  // TODO: Add apple touch icon
  render() {
    return (
      <Html>
        <Head>
          {/* <meta charSet='UTF-8' /> */}

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          {/* @ts-expect-error */}
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:wght@400;600&display=swap'
            rel='stylesheet'></link>

          {/* <meta name='application-name' content={company.name} /> */}
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          {/* <meta name='apple-mobile-web-app-title' content={company.name} /> */}
          {/* <meta name='format-detection' content='telephone=no' /> */}
          <meta name='mobile-web-app-capable' content='yes' />
          {/* <meta
        name='msapplication-config'
        content='/assets/imgs/icons/browserconfig.xml'
      /> */}
          {/* <meta name='msapplication-TileColor' content={themeColor} /> */}
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content={colors.alpha} />

          {/* <MetaIcons /> */}
          <link rel='manifest' href='/manifest.json' />

          {/* <MetaTwitter /> */}
          {/* <MetaOg /> */}
        </Head>
        <body>
          {/* {prod && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}></iframe>
            </noscript>
          )} */}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
