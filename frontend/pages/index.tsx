import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionGeneralAbout,
  SectionGeneralServices,
  SectionGeneralContacts
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionGeneralAbout />
      <SectionGeneralServices />
      <SectionGeneralContacts />
    </>
  )
}

export default PageHome
