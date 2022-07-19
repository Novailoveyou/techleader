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
      {at.en ? (
        <>
          <Highlight weight>8 exploration wells</Highlight> in Perm and Orenburg
          regions
        </>
      ) : (
        <>
          <Highlight weight>8 разведочных скважин</Highlight> в Пермском и
          Оренбургском регионах
        </>
      )}
    </>,
    <>
      {at.en ? (
        <>
          <Highlight weight>2 parametric wells</Highlight> in Trans-Baikal
          Territory and on the Gydan Peninsula
        </>
      ) : (
        <>
          <Highlight weight>2 параметрические скважины</Highlight> в
          Забайкальском крае и на п-ове Гыдан
        </>
      )}
    </>,
    <>
      {at.en ? (
        <>
          <Highlight weight>8,000 meters</Highlight> of trap intrusion
          successfully drilled in Eastern Siberia 500 meters long
        </>
      ) : (
        <>
          В Восточной Сибири успешно пробурено{' '}
          <Highlight weight>8 000 метров</Highlight> с трапповой интрузией
          протяженностью 500 метров
        </>
      )}
    </>
  ]

  const cities = {
    samara: {
      name: at.en ? 'Samara' : 'Самара'
    },
    ufa: { name: at.en ? 'Ufa' : 'Уфа' },
    perm: { name: at.en ? 'Perm' : 'Пермь' },
    nefteyugansk: { name: at.en ? 'Nefteyugansk' : 'Нефтеюганск' },
    nizhnevartovsk: { name: at.en ? 'Nizhnevartovsk' : 'Нижневартовск' },
    novyUrengoy: { name: at.en ? 'Novy Urengoy' : 'Новый Уренгой' },
    usinsk: { name: at.en ? 'Usinsk' : 'Усинск' },
    gydan: { name: at.en ? 'Gydan' : 'Гыдан' },
    krasnoyarsk: { name: at.en ? 'Krasnoyarsk' : 'Красноярск' },
    irkutsk: { name: at.en ? 'Irkutsk' : 'Иркутск' },
    zabaikalsk: { name: at.en ? 'Zabaikalsk' : 'Забайкальск' }
  } as const

  return (
    <Section
      id={selectors.ids.geography}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer
        menuBgc={colors.iota}
        contentChildClassNames={[cn(stls.contentChild)]}
        progressBarContainerBgc={colors.iota}
        progressBarLineBgc={colors.omega}
        topGap='l'
        bottomGap='l'
        menuIconColor={colors.gamma}
        menuIconBorderColor={colors.kappa}
        menuArrowColor={colors.gamma}
        menuArrowLineColor={colors.kappa}
        menuPhoneColor={colors.gamma}
        curListItemIdx={5}
        decorativeLinesColor={colors.theta}>
        {h1 ? (
          <H1 styledAsH2 classNames={[stls.title]}>
            {title}
          </H1>
        ) : (
          <H2 classNames={[stls.title]}>{title}</H2>
        )}
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.map}>
              <ImgGeographyMap classNames={[stls.ImgGeographyMap]} />
              {Object.keys(cities).map((city, idx) => (
                <>
                  <span
                    key={`SectionGeneralGeography-${city}-${idx}`}
                    className={cn(stls.city, stls[`city--${city}`])}>
                    {cities[city as keyof typeof cities].name}
                  </span>
                </>
              ))}
            </div>
          </div>
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
