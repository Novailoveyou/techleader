import stls from '@/styles/components/layout/Footer.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropH1, TListContacts } from '@/types/index'
import cn from 'classnames'
import { routes, selectors, colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt, useCompanyInfo, useScrollNavigation } from '@/hooks/index'
import {
  MenuContentContainer,
  Wrapper,
  Content,
  H1,
  H2,
  P,
  Ul,
  Li,
  Highlight
} from '@/components/layout'
import { SvgGeneralLogo, SvgGeneralLogoAlt } from '@/components/svgs'

type TFooterProps = TPropClassNames & TPropH1

const Footer: FC<TFooterProps> = ({ classNames, h1 }) => {
  const at = useAt()
  const company = useCompanyInfo()

  const title = h1 || (at.en ? 'Contacts' : 'Контакты')

  useScrollNavigation({
    fromRoute: routes.front.clients
  })

  const list: TListContacts = [
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
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <MenuContentContainer
        menuBgc={colors.alpha}
        progressBarContainerBgc={colors.alpha}
        progressBarLineBgc={colors.omega}
        leftGap='xl'
        topGap='xl'
        menuIconColor={colors.gamma}
        menuIconBorderColor={colors.kappa}
        menuArrowColor={colors.gamma}
        menuArrowLineColor={colors.kappa}
        menuPhoneColor={colors.gamma}
        curListItemIdx={7}
        decorativeLinesColor={colors.theta}>
        {h1 ? <H1 styledAsH2>{title}</H1> : <H2>{title}</H2>}
        <Ul classNames={[stls.list]}>
          {list.map(({ title, href, val }, idx) => (
            <Li key={`${title}-${idx}`} classNames={[stls.listItem]}>
              <P classNames={[stls.p]}>
                <Highlight weight>{title}:</Highlight>
              </P>
              <P classNames={[stls.p]}>
                <a href={href} className={stls.link}>
                  {val}
                </a>
              </P>
            </Li>
          ))}
        </Ul>
        <div className={stls.SvgGeneralLogoAltContainer}>
          <SvgGeneralLogoAlt classNames={[stls.SvgGeneralLogoAlt]} />
        </div>
      </MenuContentContainer>
    </footer>
  )
}

export default Footer
