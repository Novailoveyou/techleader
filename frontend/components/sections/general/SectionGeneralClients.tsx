import stls from '@/styles/components/sections/general/SectionGeneralClients.module.sass'
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

type TSectionGeneralClientsProps = TPropClassNames & TPropH1

const SectionGeneralClients: FC<TSectionGeneralClientsProps> = ({
  classNames,
  h1
}) => {
  const at = useAt()

  const title = h1 || (at.en ? 'Main clients' : 'Основные заказчики')

  return (
    <Section
      id={selectors.ids.clients}
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

export default SectionGeneralClients
