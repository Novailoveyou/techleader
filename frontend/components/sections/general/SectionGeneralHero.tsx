import stls from '@/styles/components/sections/SectionGeneralHero.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { Section, Wrapper, H1 } from '@/components/layout'
import { GeneralNonBrakingSpace } from '@/components/general'

type TSectionGeneralHeroProps = TPropClassNames

const SectionGeneralHero: FC<TSectionGeneralHeroProps> = ({ classNames }) => {
  const at = useAt()
  const company = useCompanyInfo()
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <H1>
          <span className={stls.titleTop}>
            {at.en ? (
              <>{company.name.default} Company</>
            ) : (
              <>Компания {company.name.default}</>
            )}
          </span>{' '}
          <span className={stls.titleBottom}>
            {at.en ? <>creates solutions</> : <>создает решения</>}
          </span>
        </H1>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralHero
