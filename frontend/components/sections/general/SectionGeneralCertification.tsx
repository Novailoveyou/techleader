import stls from '@/styles/components/sections/general/SectionGeneralCertification.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { routes, colors, selectors } from '@/config/index'
import { useAt, useTitles, useScrollNavigation } from '@/hooks/index'
import {
  Section,
  Wrapper,
  Content,
  H1,
  H2,
  MenuContentContainer
} from '@/components/layout'
import GeneralMultipleTransparentChildren from '@/components/general/GeneralMultipleTransparentChildren'
import { ImgCertification } from '@/components/imgs'

type TSectionGeneralCertificationProps = TPropClassNames & TPropH1

const SectionGeneralCertification: FC<TSectionGeneralCertificationProps> = ({
  classNames,
  h1
}) => {
  const at = useAt()
  const titles = useTitles()

  const title = h1 || titles.certification

  useScrollNavigation({
    fromRoute: routes.front.products,
    toRoute: routes.front.geography
  })

  return (
    <Section
      id={selectors.ids.certification}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer
        menuBgc={colors.gamma}
        leftGap='xl'
        topGap='l'
        bottomGap='l'>
        {h1 ? <H1 styledAsH2>{title}</H1> : <H2>{title}</H2>}
        <GeneralMultipleTransparentChildren
          classNames={[stls.GeneralMultipleTransparentChildren]}>
          <ImgCertification />
        </GeneralMultipleTransparentChildren>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralCertification
