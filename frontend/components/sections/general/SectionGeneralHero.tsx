import stls from '@/styles/components/sections/SectionGeneralHero.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { Section, Wrapper, H1, P, Highlight } from '@/components/layout'
import { GeneralNonBrakingSpace } from '@/components/general'
import { ImgGeneralOilRig } from '@/components/imgs'

type TSectionGeneralHeroProps = TPropClassNames

const SectionGeneralHero: FC<TSectionGeneralHeroProps> = ({ classNames }) => {
  const at = useAt()
  const company = useCompanyInfo()

  const CompanyName = () => <Highlight color>{company.name.default}</Highlight>

  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <ImgGeneralOilRig classNames={[stls.ImgGeneralOilRig]} />
        <H1 classNames={[stls.h1]}>
          <span className={stls.titleTop}>
            {at.en ? (
              <>
                <CompanyName /> Company
              </>
            ) : (
              <>
                Компания <CompanyName />
              </>
            )}
          </span>{' '}
          <span className={stls.titleBottom}>
            {at.en ? <>creates solutions</> : <>создает решения</>}
          </span>
        </H1>
        <P classNames={[stls.p]}>{company.desc}</P>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralHero
