import stls from '@/styles/components/sections/general/SectionGeneralAbout.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { colors, selectors } from '@/config/index'
import { addSpacesToNumber, firstLetterToLowerCase } from '@/helpers/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import {
  Section,
  Wrapper,
  Content,
  H1,
  H2,
  P,
  Highlight,
  MenuContentContainer
} from '@/components/layout'
import { ImgGeneralAbout } from '@/components/imgs'

type TSectionGeneralAboutProps = TPropClassNames & TPropH1

const SectionGeneralAbout: FC<TSectionGeneralAboutProps> = ({
  classNames,
  h1
}) => {
  const at = useAt()
  const company = useCompanyInfo()

  const title = h1 || (at.en ? 'About' : 'О компании')

  const list = [
    {
      title: `${addSpacesToNumber(189228)} ${at.en ? 'meters' : 'метра'}`,
      content: `${
        at.en ? 'пробурено за 2018 — 2021 гг.' : 'drilled from 2018 to 2021'
      }`
    },
    {
      title: '8',
      content: at.en
        ? 'exploration wells in the Perm and Orenburg regions'
        : 'разведочных скважин в Пермском и Оренбургском регионах'
    },
    {
      title: '2',
      content: at.en
        ? 'parametric wells in Trans-Balkan Territory and Gydan Peninsula'
        : 'параметрические скважины в Забайкальском крае и на п-ове Гыдан'
    },
    {
      title: at.en ? '300 meters' : '300 метров',
      content: at.en
        ? 'of isolated core are collected'
        : 'отобрано изолированного керна'
    }
  ]
  return (
    <Section
      id={selectors.ids.about}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer menuBgc={colors.beta} withLeftGap>
        <Wrapper classNames={[stls.wrapper]}>
          <ImgGeneralAbout classNames={[stls.ImgGeneralAbout]} />
          <Content classNames={[stls.content]}>
            {h1 ? <H1 styledAsH2>{title}</H1> : <H2>{title}</H2>}
            <P classNames={[stls.p]}>
              <Highlight weight uppercase>
                {company.name.short}
              </Highlight>{' '}
              — {firstLetterToLowerCase(company.about)}
            </P>
          </Content>
        </Wrapper>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralAbout
