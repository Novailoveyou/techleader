import stls from '@/styles/components/general/GeneralAddress.module.sass'
import { FC } from 'react'
import { selectors } from '@/config/index'
import { useCompanyInfo } from '@/hooks/index'
import { GeneralNonBrakingSpace } from '@/components/general'

const GeneralAddress: FC = () => {
  const company = useCompanyInfo()

  const { zip, province, region, city, area, street } =
    company.addresses.default

  return (
    <>
      {zip}, {province.name.default}
      <GeneralNonBrakingSpace />
      {province.type.short}, {region.name}
      <GeneralNonBrakingSpace />
      {region.type.short},{' '}
      <span className={selectors.classNames.locality}>
        {city.type.short}
        <GeneralNonBrakingSpace />
        {city.name}
      </span>
      , {area.name}
      <GeneralNonBrakingSpace />
      {area.house},{' '}
      <span className={selectors.classNames.streetAddress}>
        {street.type.short}
        <GeneralNonBrakingSpace />
        {street.name}
        <GeneralNonBrakingSpace />
        {street.house}
      </span>
    </>
  )
}

export default GeneralAddress
