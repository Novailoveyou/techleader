import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionGeneralAbout,
  SectionGeneralServices
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionGeneralAbout />
      <SectionGeneralServices />
    </>
  )
}

export default PageHome
