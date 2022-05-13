import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionGeneralAbout,
  SectionGeneralGeography,
  SectionGeneralServices,
  SectionGeneralProducts,
  SectionGeneralPartners
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionGeneralAbout />
      <SectionGeneralGeography />
      <SectionGeneralServices />
      <SectionGeneralProducts />
      <SectionGeneralPartners />
    </>
  )
}

export default PageHome
