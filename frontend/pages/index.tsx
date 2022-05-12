import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionGeneralHero,
  SectionGeneralAbout,
  SectionGeneralServices,
  SectionGeneralContacts
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionGeneralHero />
      <SectionGeneralAbout />
      <SectionGeneralServices />
      <SectionGeneralContacts />
    </>
  )
}

export default PageHome
