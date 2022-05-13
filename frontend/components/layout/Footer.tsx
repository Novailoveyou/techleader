import stls from '@/styles/components/layout/Footer.module.sass'
import { FC } from 'react'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { selectors, colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { MenuContentContainer, Wrapper, Content, H2 } from '@/components/layout'

type TFooterProps = TPropClassNames

const Footer: FC<TFooterProps> = ({ classNames }) => {
  const at = useAt()
  const company = useCompanyInfo()
  return (
    <footer
      id={selectors.ids.footer}
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <MenuContentContainer menuBgc={colors.alpha}>
        <Wrapper>
          <Content>
            <H2 classNames={[stls.h2]}>{at.en ? 'Contacts' : 'Контакты'}</H2>
          </Content>
          {/* <p className={stls.copy}>
            {company.name.default} &copy; {new Date().getFullYear()}
          </p> */}
        </Wrapper>
      </MenuContentContainer>
    </footer>
  )
}

export default Footer
