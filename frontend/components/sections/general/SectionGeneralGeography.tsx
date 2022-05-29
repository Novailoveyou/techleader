import stls from '@/styles/components/sections/general/SectionGeneralGeography.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { routes, colors, selectors } from '@/config/index'
import { useAt, useTitles, useScrollNavigation } from '@/hooks/index'
import {
  Section,
  Wrapper,
  Content,
  H1,
  H2,
  Ul,
  Li,
  P,
  MenuContentContainer,
  Highlight
} from '@/components/layout'
import { ImgGeographyMap } from '@/components/imgs'

type TSectionGeneralGeographyProps = TPropClassNames & TPropH1

const SectionGeneralGeography: FC<TSectionGeneralGeographyProps> = ({
  classNames,
  h1
}) => {
  const at = useAt()
  const titles = useTitles()

  const title = h1 || titles.geography

  useScrollNavigation({
    fromRoute: routes.front.certification,
    toRoute: routes.front.clients
  })

  const list = [
    <>
      <Highlight weight>8 разведочных скважин</Highlight> в Пермском и
      Оренбургском регионах
    </>,
    <>
      <Highlight weight>2 параметрические скважины</Highlight> в Забайкальском
      крае и на п-ове Гыдан
    </>,
    <>
      В Восточной Сибири успешно пробурено{' '}
      <Highlight weight>8 000 метров</Highlight> с трапповой интрузией
      протяженностью 500 метров
    </>
  ]

  return (
    <Section
      id={selectors.ids.geography}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer
        menuBgc={colors.alpha}
        topGap='l'
        bottomGap='l'
        menuIconColor={colors.gamma}
        menuIconBorderColor={colors.kappa}
        menuArrowColor={colors.gamma}
        menuArrowLineColor={colors.kappa}
        menuPhoneColor={colors.gamma}>
        {h1 ? (
          <H1 styledAsH2 classNames={[stls.title]}>
            {title}
          </H1>
        ) : (
          <H2 classNames={[stls.title]}>{title}</H2>
        )}
        <div className={stls.content}>
          <ImgGeographyMap classNames={[stls.ImgGeographyMap]} />
          <Ul classNames={[stls.list]}>
            {list.map((item, idx) => (
              <Li
                key={`${item.toString()}-${idx}`}
                classNames={[stls.listItem]}>
                <P>{item}</P>
              </Li>
            ))}
          </Ul>
        </div>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralGeography
