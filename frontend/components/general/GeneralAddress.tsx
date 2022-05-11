import stls from '@/styles/components/general/GeneralAddress.module.sass'
import { FC } from 'react'
import { selectors } from '@/config/index'
import { useCompanyInfo } from '@/hooks/index'
import { GeneralNonBrakingSpace } from '@/components/general'

const GeneralAddress: FC = () => {
  const company = useCompanyInfo()
  return (
    <>
      {company.addresses.default.zip},{' '}
      {company.addresses.default.province.name.default}
      <GeneralNonBrakingSpace />
      {company.addresses.default.province.type.short},{' '}
      {company.addresses.default.region.name}
      <GeneralNonBrakingSpace />
      {company.addresses.default.region.type.short},{' '}
      <span className={selectors.classNames.locality}>
        {company.addresses.default.city.type.short}
        <GeneralNonBrakingSpace />
        {company.addresses.default.city.name}
      </span>
      , {company.addresses.default.area.name}
      <GeneralNonBrakingSpace />
      {company.addresses.default.area.house},{' '}
      <span className={selectors.classNames.streetAddress}>
        {company.addresses.default.street.type.short}
        <GeneralNonBrakingSpace />
        {company.addresses.default.street.name}
        <GeneralNonBrakingSpace />
        {company.addresses.default.street.house}
      </span>
    </>
  )
}

export default GeneralAddress
