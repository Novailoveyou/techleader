import stls from '@/styles/pages/PageCertification.module.sass'
import type { NextPage } from 'next'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { routes } from '@/config/index'
import { SectionGeneralGeography } from '@/components/sections'
import {
  SeoGeneralNextSeo,
  SeoGeneralOrganizationJsonLd
} from '@/components/seo'

const PageCertification: NextPage = () => {
  const at = useAt()
  const company = useCompanyInfo()

  const title = at.en ? 'Certification' : 'Сертификация'

  // TODO: figure out better SEO
  return (
    <>
      <SeoGeneralNextSeo
        title={`${title} | ${company.name.default} | ${
          company.tagline || company.desc
        }`}
        desc={company.about}
        canonical={`${routes.front.root}${routes.front.certification}`}
      />
      <SeoGeneralOrganizationJsonLd />
      <SectionGeneralGeography h1={title} />
    </>
  )
}

export default PageCertification
