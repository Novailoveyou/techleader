import stls from '@/styles/components/sections/general/SectionGeneralPartners.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { selectors, colors } from '@/config/index'
import { useAt } from '@/hooks/index'
import {
  Section,
  MenuContentContainer,
  Wrapper,
  Content,
  H2,
  H3,
  P
} from '@/components/layout'
import {
  ImgPartnerRosgeologia,
  ImgPartnerArgos,
  ImgPartnerIntegra,
  ImgPartnerBakerHughes,
  ImgPartnerGreat,
  ImgPartnerKingdream,
  ImgPartnerTitanPzto,
  ImgPartnerVniibt
} from '@/components/imgs'

type TSectionGeneralPartnersProps = TPropClassNames

const SectionGeneralPartners: FC<TSectionGeneralPartnersProps> = ({
  classNames
}) => {
  const at = useAt()

  const list = [
    ImgPartnerRosgeologia,
    ImgPartnerArgos,
    ImgPartnerIntegra,
    ImgPartnerBakerHughes,
    ImgPartnerGreat,
    ImgPartnerKingdream,
    ImgPartnerTitanPzto,
    ImgPartnerVniibt
  ]

  return (
    <Section
      id={selectors.ids.partners}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer menuBgc={colors.beta}>
        <Wrapper>
          <Content>
            <H2 classNames={[stls.h2]}>{at.en ? 'Partners' : 'Партнеры'}</H2>
            <div className={stls.listContainer}>
              <P classNames={[cn(stls.p, stls.pAbsolute)]}>
                {at.en ? 'Main customers' : 'Основные заказчики'}
              </P>
              <ul className={stls.list}>
                <li className={cn(stls.listItem, stls.listItemP)}>
                  <P classNames={[stls.p]}>
                    {at.en
                      ? 'Manufacturing partners'
                      : 'Партнеры производители оборудования'}
                  </P>
                </li>
                <li className={stls.listItem}></li>
                {list.map((Img, idx) => (
                  <li
                    key={`SectionGeneralPartners__partner-${idx}`}
                    className={stls.listItem}>
                    <Img classNames={[stls.img]} />
                  </li>
                ))}
                <li className={stls.listItem}>
                  <p className={stls.pPartner}>
                    {at.en
                      ? 'Chineese microspheres manufactures'
                      : 'Китайские заводы производители микросфер'}
                  </p>
                </li>
              </ul>
            </div>
          </Content>
        </Wrapper>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralPartners
