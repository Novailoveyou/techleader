import { FC } from 'react'
import truncate from 'truncate'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { NextSeo } from 'next-seo'
import { routes } from '@/config/index'

type TSeoGeneralNextSeoProps = {
  title: string
  desc: string
  canonical: string
}

const SeoGeneralNextSeo: FC<TSeoGeneralNextSeoProps> = ({
  title,
  desc,
  canonical
}) => {
  const at = useAt()
  const company = useCompanyInfo()

  return (
    <NextSeo
      title={title}
      description={truncate(desc, 120)}
      canonical={canonical}
      openGraph={{
        type: 'website',
        url: canonical,
        title: title,
        description: truncate(desc, 120),
        locale: at.en ? 'en' : 'ru',
        site_name: company.name.default,
        images: [
          {
            url: `${routes.front.root}${routes.public.assetsImgsIconsManifestIcon512}`,
            width: 512,
            height: 512,
            alt: company.name.default,
            type: 'image/png'
          }
        ]
      }}
    />
  )
}

export default SeoGeneralNextSeo
