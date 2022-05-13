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
  H3
} from '@/components/layout'

type TSectionGeneralPartnersProps = TPropClassNames

const SectionGeneralPartners: FC<TSectionGeneralPartnersProps> = ({
  classNames
}) => {
  const at = useAt()
  return (
    <Section
      id={selectors.ids.partners}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer menuBgc={colors.beta}>
        <Wrapper>
          <Content>
            <H2 classNames={[stls.h2]}>{at.en ? 'Partners' : 'Партнеры'}</H2>
          </Content>
        </Wrapper>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralPartners
