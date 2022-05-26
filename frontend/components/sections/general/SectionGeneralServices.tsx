import stls from '@/styles/components/sections/general/SectionGeneralServices.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { selectors, colors } from '@/config/index'
import { useAt, useTitles } from '@/hooks/index'
import {
  Section,
  MenuContentContainer,
  Wrapper,
  Content,
  H1,
  H2,
  H3
} from '@/components/layout'

type TSectionGeneralServicesProps = TPropClassNames & TPropH1

const SectionGeneralServices: FC<TSectionGeneralServicesProps> = ({
  classNames,
  h1
}) => {
  const at = useAt()
  const titles = useTitles()

  const title = h1 || titles.services

  return (
    <Section
      id={selectors.ids.services}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer
        menuBgc={colors.beta}
        leftGap='xl'
        topGap='l'
        bottomGap='l'>
        {h1 ? (
          <H1 styledAsH2>{title}</H1>
        ) : (
          <H2 classNames={[stls.h2]}>{title}</H2>
        )}
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralServices
