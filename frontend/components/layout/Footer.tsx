import stls from '@/styles/components/layout/Footer.module.sass'
import { FC } from 'react'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { selectors, colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import {
  MenuContentContainer,
  Wrapper,
  Content,
  H2,
  P,
  Highlight
} from '@/components/layout'
import { SvgGeneralLogo, SvgGeneralLogoAlt } from '@/components/svgs'

type TFooterProps = TPropClassNames

const Footer: FC<TFooterProps> = ({ classNames }) => {
  const at = useAt()
  const company = useCompanyInfo()

  const list = [
    {
      title: at.en ? 'Phone number' : 'Телефон',
      href: company.phoneNumbers.default.href,
      val: company.phoneNumbers.default.val
    },
    {
      title: at.en ? 'Email' : 'Электронный адрес',
      href: company.emails.default.href,
      val: company.emails.default.val
    }
  ]

  return (
    <footer
      id={selectors.ids.footer}
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <MenuContentContainer menuBgc={colors.alpha} withLeftGapXl>
        <Wrapper classNames={[stls.wrapper]}>
          <Content classNames={[stls.content]}>
            <H2>{at.en ? 'Contacts' : 'Контакты'}</H2>
            <ul className={stls.list}>
              {list.map(({ title, href, val }, idx) => (
                <li key={`${title}-${idx}`} className={stls.listItem}>
                  <P classNames={[stls.p]}>
                    <Highlight weight>{title}</Highlight>
                  </P>
                  <P classNames={[stls.p]}>
                    <a href={href} className={stls.link}>
                      {val}
                    </a>
                  </P>
                </li>
              ))}
            </ul>
            <div className={stls.SvgGeneralLogoAltContainer}>
              <SvgGeneralLogoAlt classNames={[stls.SvgGeneralLogoAlt]} />
            </div>
          </Content>
        </Wrapper>
      </MenuContentContainer>
    </footer>
  )
}

export default Footer
