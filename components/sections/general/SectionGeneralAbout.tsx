import stls from '@/styles/components/sections/SectionGeneralAbout.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { Section, Wrapper, H2 } from '@/components/layout'

type TSectionGeneralAboutProps = TPropClassNames

const SectionGeneralAbout: FC<TSectionGeneralAboutProps> = ({ classNames }) => {
  const at = useAt()
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <H2>{at.en ? 'About' : 'О компании'}</H2>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralAbout
