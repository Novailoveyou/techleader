import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionGeneralAbout,
  SectionGeneralGeography,
  SectionGeneralServices
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionGeneralAbout />
      <SectionGeneralGeography />
      <SectionGeneralServices />
    </>
  )
}

export default PageHome
