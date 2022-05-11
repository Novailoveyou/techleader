import { selectors } from '@/config/index'

const routes = {
  front: {
    home: '/'
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
