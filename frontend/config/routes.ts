import { dev, selectors, domainNames } from '@/config/index'
import ports from './ports'
import protocols from './protocols'

const routes = {
  front: {
    root: dev
      ? `${protocols.dev}://${domainNames.dev}:${ports.dev}`
      : `${protocols.prod}://${domainNames.default}`,
    home: '/',
    about: '/about',
    services: '/services',
    products: '/products',
    certification: '/certification',
    geography: '/geography',
    clients: '/clients',
    contact: '/contact'
  },
  back: {
    home: '/'
  },
  external: {
    //
  },
  anchors: {
    header: `#${selectors.ids.header}`,
    main: `#${selectors.ids.main}`,
    footer: `#${selectors.ids.footer}`
  },
  public: {
    assetsImgsIconsAppleIcon180: '/assets/imgs/icons/apple-icon-180.png',
    assetsImgsIconsManifestIcon192: '/assets/imgs/icons/manifest-icon-192.png',
    assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png'
  }
}

export default routes
