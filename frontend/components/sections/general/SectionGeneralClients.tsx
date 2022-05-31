import stls from '@/styles/components/sections/general/SectionGeneralClients.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC, useState } from 'react'
import cn from 'classnames'
import { routes, colors, selectors } from '@/config/index'
import {
  useScrollNavigation,
  useAt,
  useTitles,
  useSetCurListItemIdx
} from '@/hooks/index'
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
import { GeneralProgressLine } from '@/components/general'
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
  const [curListItemIdx, setCurListItemIdx] = useState(0)

  const at = useAt()
  const titles = useTitles()

  const title = h1 || titles.clients

  const list = [
    {
      Img: ImgPartnerRosgeologia,
      title: at.en ? 'JSC "Rosgeologia"' : 'АО «Росгеология»',
      desc: at.en
        ? '– bits, PDM, jars development service'
        : '— сервис по отработке долот, ВЗД, ясов'
    },
    {
      Img: ImgPartnerArgos,
      title: at.en ? 'LLC "Argos" -CHURS' : 'ООО «Аргос»-ЧУРС',
      desc: at.en
        ? '— bits and coring drilling service'
        : '— сервис по отработке долот и отбору керна'
    },
    {
      Img: ImgPartnerBakerHughes,
      title: at.en ? 'JSC Baker Hughes' : 'АО «Бейкер Хьюз»',
      desc: at.en ? '- bits rental' : '— аренда долот'
    },
    {
      Img: ImgPartnerRosgeologia,
      title: at.en
        ? 'LLC Smith Siberian Services'
        : 'ООО «Смит Сайбириан Сервисез»',
      desc: at.en
        ? '- supply and repair of bits'
        : '— поставка и ремонт долотенда долот'
    }
  ]

  useSetCurListItemIdx({
    listLength: list.length - 1,
    setCurListItemIdx
  })

  useScrollNavigation({
    fromRoute: routes.front.geography,
    toRoute: routes.front.contact,
    curListItemIdx,
    setCurListItemIdx,
    listLength: list.length
  })

  return (
    <Section
      id={selectors.ids.clients}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer
        classNames={[stls.MenuContentContainer]}
        menuBgc={colors.beta}
        progressBarContainerBgc={colors.beta}
        leftGap='xl'
        topGap='l'
        bottomGap='l'
        curListItemIdx={6}>
        {h1 ? <H1 styledAsH2>{title}</H1> : <H2>{title}</H2>}
        <UlGeneralXScrollable classNames={[stls.list]}>
          {list.map(({ Img, title, desc }, idx) => (
            <LiGeneralXScrollable
              key={`${title}-${idx}`}
              classNames={[stls.item]}
              isShown={curListItemIdx === idx}>
              <div className={stls.top}>
                <Img classNames={[stls.Img]} />{' '}
                <P classNames={[stls.p]}>
                  <Highlight color>{title}</Highlight> {desc}
                </P>
              </div>
            </LiGeneralXScrollable>
          ))}
        </UlGeneralXScrollable>
        <GeneralProgressLine
          classNames={[stls.GeneralProgressLine]}
          listLength={list.length}
          curListItemIdx={curListItemIdx}
        />
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralClients
