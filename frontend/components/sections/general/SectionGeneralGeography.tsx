import stls from '@/styles/components/sections/general/SectionGeneralGeography.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { colors, selectors } from '@/config/index'
import { useAt } from '@/hooks/index'
import {
  Section,
  Wrapper,
  Content,
  H1,
  H2,
  MenuContentContainer
} from '@/components/layout'

type TSectionGeneralGeographyProps = TPropClassNames & TPropH1

const SectionGeneralGeography: FC<TSectionGeneralGeographyProps> = ({
  classNames,
  h1
}) => {
  const at = useAt()

  const title = h1 || (at.en ? 'Geography' : 'География')

  return (
    <Section
      id={selectors.ids.geography}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer menuBgc={colors.beta} withLeftGap>
        <Wrapper classNames={[stls.wrapper]}>
          <Content classNames={[stls.content]}>
            {h1 ? <H1 styledAsH2>{title}</H1> : <H2>{title}</H2>}
          </Content>
        </Wrapper>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralGeography
