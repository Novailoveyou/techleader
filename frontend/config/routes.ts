import { dev, selectors, domainNames } from '@/config/index'
import ports from './ports'
import protocols from './protocols'

const routes = {
  front: {
    root: dev
      ? `${protocols.dev}://${domainNames.dev}:${ports.dev}`
      : `${protocols.prod}://${domainNames.default}`,
    home: '/',
    assetsImgsIconsAppleIcon180: '/assets/imgs/icons/apple-icon-180.png',
    assetsImgsIconsManifestIcon192: '/assets/imgs/icons/manifest-icon-192.png',
    assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png'
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
  }
}

export default routes
