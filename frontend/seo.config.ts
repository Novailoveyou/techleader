import truncate from 'truncate'
import { routes, companyInfo } from '@/config/index'

const seoParams = {
  title: companyInfo.name.default.ru,
  companyName: companyInfo.name.default.ru,
  desc: truncate(companyInfo.about.ru, 120)
}

const seo = {
  openGraph: {
    type: 'website',
    url: routes.front.root,
    title: seoParams.title,
    description: seoParams.desc,
    locale: 'ru',
    site_name: seoParams.companyName,
    images: [
      {
        url: `${routes.front.root}${routes.public.assetsImgsIconsManifestIcon512}`,
        width: 512,
        height: 512,
        alt: seoParams.companyName,
        type: 'image/png'
      }
    ]
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: seoParams.title,
  description: seoParams.desc,
  canonical: routes.front.root,
  dangerouslySetAllPagesToNoIndex: true,
  dangerouslySetAllPagesToNoFollow: true,
  noindex: true,
  nofollow: true
}

export default seo
