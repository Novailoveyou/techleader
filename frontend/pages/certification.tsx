import stls from '@/styles/pages/PageCertification.module.sass'
import type { NextPage } from 'next'
import { useAt, useCompanyInfo, useTitles } from '@/hooks/index'
import { routes } from '@/config/index'
import { SectionGeneralCertification } from '@/components/sections'
import {
  SeoGeneralNextSeo,
  SeoGeneralOrganizationJsonLd
} from '@/components/seo'

const PageCertification: NextPage = () => {
  const at = useAt()
  const company = useCompanyInfo()
  const titles = useTitles()

  const h1 = titles.certification

  // TODO: figure out better SEO
  return (
    <>
      <SeoGeneralNextSeo
        title={`${h1} | ${company.name.default} | ${
          company.tagline || company.desc
        }`}
        desc={company.about}
        canonical={`${routes.front.root}${routes.front.certification}`}
      />
      <SeoGeneralOrganizationJsonLd />
      <SectionGeneralCertification h1={h1} />
    </>
  )
}

export default PageCertification
