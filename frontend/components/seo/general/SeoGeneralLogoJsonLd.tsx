import { FC } from 'react'
import { LogoJsonLd } from 'next-seo'
import { routes } from '@/config/index'

const SeoGeneralLogoJsonLd: FC = () => {
  return (
    <LogoJsonLd
      logo={`${routes.front.root}${routes.public.assetsImgsIconsManifestIcon512}`}
      url={routes.front.root}
    />
  )
}

export default SeoGeneralLogoJsonLd
