import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { themeColor, company, prod, gtm } from '@/config/index'
import { MetaIcons, MetaOg, MetaTwitter } from '@/components/meta'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta charSet='UTF-8' /> */}
          <link href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com' /* crossOrigin */
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <meta name='application-name' content={company.name} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content={company.name} />
          {/* <meta name='format-detection' content='telephone=no' /> */}
          <meta name='mobile-web-app-capable' content='yes' />
          {/* <meta
        name='msapplication-config'
        content='/assets/imgs/icons/browserconfig.xml'
      /> */}
          <meta name='msapplication-TileColor' content={themeColor} />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content={themeColor} />

          <MetaIcons />

          <link rel='manifest' href='/manifest.json' />

          <MetaTwitter />
          <MetaOg />
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
