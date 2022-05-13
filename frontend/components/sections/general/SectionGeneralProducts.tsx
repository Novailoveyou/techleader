import stls from '@/styles/components/sections/general/SectionGeneralProducts.module.sass'
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

type TSectionGeneralProductsProps = TPropClassNames

const SectionGeneralProducts: FC<TSectionGeneralProductsProps> = ({
  classNames
}) => {
  const at = useAt()
  return (
    <Section
      id={selectors.ids.products}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer menuBgc={colors.gamma}>
        <Wrapper>
          <Content>
            <H2 classNames={[stls.h2]}>{at.en ? 'Products' : 'Продукция'}</H2>
          </Content>
        </Wrapper>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralProducts
