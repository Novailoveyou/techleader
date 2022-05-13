import stls from '@/styles/components/sections/SectionGeneralGeography.module.sass'
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
  H3
} from '@/components/layout'

type TSectionGeneralGeographyProps = TPropClassNames

const SectionGeneralGeography: FC<TSectionGeneralGeographyProps> = ({
  classNames
}) => {
  const at = useAt()
  return (
    <Section
      id={selectors.ids.geography}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer menuBgc={colors.alpha}>
        <Wrapper>
          <Content>
            <H2 classNames={[stls.h2]}>{at.en ? 'Geography' : 'География'}</H2>
          </Content>
        </Wrapper>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralGeography
