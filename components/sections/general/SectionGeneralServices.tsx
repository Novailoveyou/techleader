import stls from '@/styles/components/sections/SectionGeneralServices.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { Section, Wrapper, H2 } from '@/components/layout'

type TSectionGeneralServicesProps = TPropClassNames

const SectionGeneralServices: FC<TSectionGeneralServicesProps> = ({
  classNames
}) => {
  const at = useAt()
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <H2>{at.en ? 'Main activities' : 'Основные виды деятельности'}</H2>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralServices
