import stls from '@/styles/components/sections/general/SectionGeneralCertification.module.sass'
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

type TSectionGeneralCertificationProps = TPropClassNames & TPropH1

const SectionGeneralCertification: FC<TSectionGeneralCertificationProps> = ({
  classNames,
  h1
}) => {
  const at = useAt()

  const title = h1 || (at.en ? 'Certification' : 'Сертификация')

  return (
    <Section
      id={selectors.ids.certification}
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

export default SectionGeneralCertification
