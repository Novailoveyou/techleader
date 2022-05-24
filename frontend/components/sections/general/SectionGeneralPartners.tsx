import stls from '@/styles/components/sections/general/SectionGeneralPartners.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { selectors, colors } from '@/config/index'
import { useAt, useTitles } from '@/hooks/index'
import {
  Section,
  MenuContentContainer,
  Wrapper,
  Content,
  H1,
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

type TSectionGeneralPartnersProps = TPropClassNames & TPropH1

// * This is unfinished in terms of UI and unused in terms of pages & sections section

const SectionGeneralPartners: FC<TSectionGeneralPartnersProps> = ({
  classNames,
  h1
}) => {
  const at = useAt()
  const titles = useTitles()

  const title = h1 || titles.partners

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
            {h1 ? (
              <H1 styledAsH2 classNames={[stls.h2]}>
                {title}
              </H1>
            ) : (
              <H2 classNames={[stls.h2]}>{title}</H2>
            )}
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
