import stls from '@/styles/components/sections/general/SectionGeneralClients.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { routes, colors, selectors } from '@/config/index'
import { useScrollNavigation, useAt, useTitles } from '@/hooks/index'
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
import { UlGeneralXScrollable } from '@/components/uls'
import { LiGeneralXScrollable } from '@/components/lis'
import {
  ImgPartnerArgos,
  ImgPartnerBakerHughes,
  ImgPartnerRosgeologia
} from '@/components/imgs'

type TSectionGeneralClientsProps = TPropClassNames & TPropH1

const SectionGeneralClients: FC<TSectionGeneralClientsProps> = ({
  classNames,
  h1
}) => {
  const at = useAt()
  const titles = useTitles()

  const title = h1 || titles.clients

  useScrollNavigation({
    fromRoute: routes.front.geography,
    toRoute: routes.front.contact
  })

  const list = [
    {
      Img: ImgPartnerRosgeologia,
      title: 'АО «Росгеология»',
      desc: '— сервис по отработке долот, ВЗД, ясов'
    },
    {
      Img: ImgPartnerArgos,
      title: 'ООО «Аргос»-ЧУРС',
      desc: '— сервис по отработке долот и отбору керна'
    },
    {
      Img: ImgPartnerBakerHughes,
      title: 'АО «Бейкер Хьюз»',
      desc: '— аренда долот'
    },
    {
      Img: ImgPartnerRosgeologia,
      title: 'ООО «Смит Сайбириан Сервисез»',
      desc: '— поставка и ремонт долотенда долот'
    }
  ]

  return (
    <Section
      id={selectors.ids.clients}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer
        classNames={[stls.MenuContentContainer]}
        menuBgc={colors.beta}
        leftGap='xl'
        topGap='l'
        bottomGap='l'>
        {h1 ? <H1 styledAsH2>{title}</H1> : <H2>{title}</H2>}
        <UlGeneralXScrollable classNames={[stls.list]}>
          {list.map(({ Img, title, desc }, idx) => (
            <LiGeneralXScrollable
              key={`${title}-${idx}`}
              classNames={[stls.item]}>
              <div className={stls.top}>
                <Img classNames={[stls.Img]} />{' '}
                <P classNames={[stls.p]}>
                  <Highlight color>{title}</Highlight> {desc}
                </P>
              </div>
            </LiGeneralXScrollable>
          ))}
        </UlGeneralXScrollable>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralClients
