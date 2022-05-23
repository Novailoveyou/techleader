import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import truncate from 'truncate'
import { useCompanyInfo } from '@/hooks/index'
import { NextSeo, OrganizationJsonLd } from 'next-seo'
import { routes } from '@/config/index'
import {
  SectionGeneralAbout,
  SectionGeneralGeography,
  SectionGeneralServices,
  SectionGeneralProducts,
  SectionGeneralPartners
} from '@/components/sections'

const PageHome: NextPage = () => {
  const company = useCompanyInfo()

  const seoParams = {
    title: `${company.name.default || 'TechnoLeader'}${
      company.tagline ? ` | ${company.tagline}` : ''
    }`,
    desc: truncate(company.desc, 120),
    canonical: routes.front.root
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name.default,
              type: 'image/png'
            }
          ],
          site_name: company.name.default
        }}
      />
      <OrganizationJsonLd
        organizationType={'ResearchOrganization'}
        id={routes.front.root}
        logo={`${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`}
        legalName={company.name.full}
        name={company.name.default}
        address={{
          streetAddress: `${company.addresses.default.street.type.short} ${company.addresses.default.street.name} ${company.addresses.default.street.house}`,
          addressLocality: company.addresses.default.city.name,
          postalCode: company.addresses.default.zip,
          addressCountry: company.addresses.default.country.code
        }}
        contactPoints={[
          {
            telephone: company.phoneNumbers.default.val,
            contactType: company.phoneNumbers.default.contactType,
            areaServed: company.phoneNumbers.default.areaServed,
            availableLanguage: company.phoneNumbers.default.languages
          }
        ]}
        sameAs={[routes.front.root]}
        url={routes.front.root}
      />
      <SectionGeneralAbout />
      <SectionGeneralGeography />
      <SectionGeneralServices />
      <SectionGeneralProducts />
      <SectionGeneralPartners />
    </>
  )
}

export default PageHome
