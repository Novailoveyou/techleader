import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { useCompanyInfo } from '@/hooks/index'
import { routes } from '@/config/index'
import {
  SectionGeneralAbout,
  SectionGeneralServices,
  SectionGeneralProducts,
  SectionGeneralCertification,
  SectionGeneralGeography,
  SectionGeneralClients
} from '@/components/sections'
import {
  SeoGeneralNextSeo,
  SeoGeneralOrganizationJsonLd
} from '@/components/seo'
import { Header, Footer } from '@/components/layout'

const PageHome: NextPage = () => {
  const company = useCompanyInfo()

  // TODO: figure out better SEO
  return (
    <>
      <SeoGeneralNextSeo
        title={`${company.name.default} | ${company.tagline || company.desc}`}
        desc={company.about}
        canonical={routes.front.root}
      />
      <SeoGeneralOrganizationJsonLd />
      <Header />
      <SectionGeneralAbout />
      <SectionGeneralServices />
      <SectionGeneralProducts />
      <SectionGeneralCertification />
      <SectionGeneralGeography />
      <SectionGeneralClients />
      <Footer />
    </>
  )
}

export default PageHome
