import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionGeneralHero,
  SectionGeneralNews,
  SectionGeneralAbout,
  SectionGeneralServices,
  SectionGeneralContacts
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionGeneralHero />
      <SectionGeneralNews />
      <SectionGeneralAbout />
      <SectionGeneralServices />
      <SectionGeneralContacts />
    </>
  )
}

export default PageHome
