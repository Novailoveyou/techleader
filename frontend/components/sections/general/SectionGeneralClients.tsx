import stls from '@/styles/components/sections/general/SectionGeneralClients.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { colors, selectors } from '@/config/index'
import { useAt, useTitles } from '@/hooks/index'
import {
  Section,
  Wrapper,
  Content,
  H1,
  H2,
  Ul,
  P,
  MenuContentContainer,
  Highlight
} from '@/components/layout'
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

  const list = [
    {
      img: <ImgPartnerRosgeologia />,
      title: 'АО «Росгеология»',
      desc: '— сервис по отработке долот, ВЗД, ясов'
    },
    {
      img: <ImgPartnerArgos />,
      title: 'ООО «Аргос»-ЧУРС',
      desc: '— сервис по отработке долот и отбору керна'
    },
    {
      img: <ImgPartnerBakerHughes />,
      title: 'АО «Бейкер Хьюз»',
      desc: '— аренда долот'
    },
    {
      img: <ImgPartnerRosgeologia />,
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
        <Ul classNames={[stls.list]}>
          {list.map((item, idx) => (
            <li key={`${item.title}-${idx}`} className={stls.item}>
              <div className={stls.top}>
                {item.img}{' '}
                <P classNames={[stls.p]}>
                  <Highlight color>{item.title}</Highlight> {item.desc}
                </P>
              </div>
            </li>
          ))}
        </Ul>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralClients
