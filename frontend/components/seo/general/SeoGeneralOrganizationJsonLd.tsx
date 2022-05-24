import { FC } from 'react'
import truncate from 'truncate'
import { useCompanyInfo } from '@/hooks/index'
import { OrganizationJsonLd } from 'next-seo'
import { routes } from '@/config/index'

const SeoGeneralOrganizationJsonLd: FC = () => {
  const company = useCompanyInfo()

  const { street, city, zip, country } = company.addresses.default

  return (
    <OrganizationJsonLd
      organizationType={'ResearchOrganization'}
      id={routes.front.root}
      logo={`${routes.front.root}${routes.public.assetsImgsIconsManifestIcon512}`}
      legalName={company.name.full}
      name={company.name.default}
      address={{
        streetAddress: `${street.type.short} ${street.name} ${street.house}`,
        addressLocality: city.name,
        postalCode: zip,
        addressCountry: country.code
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
  )
}

export default SeoGeneralOrganizationJsonLd
