import stls from '@/styles/components/sections/SectionGeneralServices.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { useAt } from '@/hooks/index'
import { Section, Wrapper, Menu, H2 } from '@/components/layout'

type TSectionGeneralServicesProps = TPropClassNames

const SectionGeneralServices: FC<TSectionGeneralServicesProps> = ({
  classNames
}) => {
  const at = useAt()
  return (
    <Section
      id={selectors.ids.services}
      classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <H2>{at.en ? 'Services' : 'Услуги'}</H2>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralServices
