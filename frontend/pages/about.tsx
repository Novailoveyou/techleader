import stls from '@/styles/pages/PageAbout.module.sass'
import type { NextPage } from 'next'
import { useAt, useCompanyInfo, useTitles } from '@/hooks/index'
import { routes } from '@/config/index'
import { SectionGeneralAbout } from '@/components/sections'
import {
  SeoGeneralNextSeo,
  SeoGeneralOrganizationJsonLd
} from '@/components/seo'

const PageAbout: NextPage = () => {
  const at = useAt()
  const company = useCompanyInfo()
  const titles = useTitles()

  const h1 = titles.about

  // TODO: figure out better SEO
  return (
    <>
      <SeoGeneralNextSeo
        title={`${h1} | ${company.name.default} | ${
          company.tagline || company.desc
        }`}
        desc={company.about}
        canonical={`${routes.front.root}${routes.front.about}`}
      />
      <SeoGeneralOrganizationJsonLd />
      <SectionGeneralAbout h1={h1} />
    </>
  )
}

export default PageAbout
