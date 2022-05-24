import stls from '@/styles/pages/PageAbout.module.sass'
import type { NextPage } from 'next'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { routes } from '@/config/index'
import { SectionGeneralAbout } from '@/components/sections'
import {
  SeoGeneralNextSeo,
  SeoGeneralOrganizationJsonLd
} from '@/components/seo'

const PageAbout: NextPage = () => {
  const at = useAt()
  const company = useCompanyInfo()

  const title = at.en ? 'About' : 'О компании'

  // TODO: figure out better SEO
  return (
    <>
      <SeoGeneralNextSeo
        title={`${title} | ${company.name.default} | ${
          company.tagline || company.desc
        }`}
        desc={company.about}
        canonical={`${routes.front.root}${routes.front.about}`}
      />
      <SeoGeneralOrganizationJsonLd />
      <SectionGeneralAbout h1={title} />
    </>
  )
}

export default PageAbout
