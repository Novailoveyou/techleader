import stls from '@/styles/components/sections/general/SectionGeneralAbout.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import { routes, colors, selectors } from '@/config/index'
import { addSpacesToNumber, firstLetterToLowerCase } from '@/helpers/index'
import {
  useAt,
  useCompanyInfo,
  useTitles,
  useScrollNavigation,
  useSetCurListItemIdx
} from '@/hooks/index'
import {
  Section,
  Wrapper,
  Content,
  H1,
  H2,
  H3,
  P,
  Ul,
  Li,
  Highlight,
  MenuContentContainer
} from '@/components/layout'
import { UlGeneralXScrollable } from '@/components/uls'
import { LiGeneralXScrollable } from '@/components/lis'
import { ImgGeneralAbout } from '@/components/imgs'

type TSectionGeneralAboutProps = TPropClassNames & TPropH1

const SectionGeneralAbout: FC<TSectionGeneralAboutProps> = ({
  classNames,
  h1
}) => {
  const [curListItemIdx, setCurListItemIdx] = useState(0)

  const at = useAt()
  const company = useCompanyInfo()
  const titles = useTitles()

  const title = h1 || titles.about

  const list = [
    {
      title: `${addSpacesToNumber(189228)} ${at.en ? 'meters' : 'метра'}`,
      content: `${
        at.en ? 'drilled from 2018 to 2021' : 'пробурено за 2018 — 2021 гг.'
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

  useSetCurListItemIdx({
    listLength: list.length - 1,
    setCurListItemIdx
  })

  useScrollNavigation({
    fromRoute: routes.front.home,
    toRoute: routes.front.services,
    curListItemIdx,
    setCurListItemIdx,
    listLength: list.length
  })

  return (
    <Section
      id={selectors.ids.about}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer
        menuBgc={colors.beta}
        progressBarContainerBgc={colors.beta}
        leftGap='xl'
        childTopGap='l'
        childBottomGap='l'
        contentChildClassNames={[stls.contentMenuContentContainer]}
        ReactNodeImage={<ImgGeneralAbout classNames={[stls.ImgGeneralAbout]} />}
        curListItemIdx={1}>
        {h1 ? <H1 styledAsH2>{title}</H1> : <H2>{title}</H2>}
        <P classNames={[stls.p]}>
          <Highlight weight uppercase>
            {company.name.short}
          </Highlight>{' '}
          — {firstLetterToLowerCase(company.about)}
        </P>
        <UlGeneralXScrollable classNames={[stls.list]}>
          {list.map(({ title, content }, idx) => (
            <LiGeneralXScrollable
              key={`SectionGeneralAbout-item-${title}-${idx}`}
              classNames={[stls.listItem]}
              isShown={curListItemIdx === idx}>
              {h1 ? <H2 styledAsH3Alt>{title}</H2> : <H3 styledAlt>{title}</H3>}
              <P classNames={[stls.p]}>
                <Highlight color>{content}</Highlight>
              </P>
            </LiGeneralXScrollable>
          ))}
        </UlGeneralXScrollable>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralAbout
