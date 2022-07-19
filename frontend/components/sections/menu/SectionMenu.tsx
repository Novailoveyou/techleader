import stls from '@/styles/components/sections/menu/SectionMenu.module.sass'
import { TPropClassNames, TPropClose, TListContacts } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { routes, colors, selectors } from '@/config/index'
import { addSpacesToNumber, firstLetterToLowerCase } from '@/helpers/index'
import { useAt, useCompanyInfo, useTitles } from '@/hooks/index'
import {
  Section,
  Wrapper,
  Content,
  H1,
  H2,
  H3,
  P,
  Ul,
  Li,
  Highlight,
  MenuContentContainer
} from '@/components/layout'
import { GeneralLocaleControls } from '@/components/general'
import Link from 'next/link'

type TSectionMenuProps = TPropClassNames & TPropClose

const SectionMenu: FC<TSectionMenuProps> = ({ classNames, close }) => {
  const at = useAt()
  const company = useCompanyInfo()

  const titles = useTitles()

  // TODO: prevent sections nav on scroll when menu is open
  const links = [
    {
      href: routes.front.home,
      label: titles.home
    },
    {
      href: routes.front.about,
      label: titles.about
    },
    {
      href: routes.front.geography,
      label: titles.geography
    },
    {
      href: routes.front.services,
      label: titles.services
    },
    {
      href: routes.front.products,
      label: titles.products
    },
    {
      href: routes.front.clients,
      label: titles.clients
    },
    {
      href: routes.front.contact,
      label: titles.contact
    }
  ]

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

  // TODO: fix vertical scroll when in the menu
  return (
    <Section
      id={selectors.ids.about}
      classNames={[cn(stls.container, classNames)]}>
      <GeneralLocaleControls classNames={[stls.GeneralLocaleControls]} />
      <MenuContentContainer
        contentClassNames={[
          cn(stls.contentClassNames1, stls.contentClassNames2)
        ]}
        contentChildClassNames={[
          cn(stls.contentChildClassNames1, stls.contentChildClassNames2)
        ]}
        menuBgc={colors.beta}
        progressBarContainerBgc={colors.beta}
        progressBarLineBgc={colors.beta}
        // leftGap='xl'
        topGap='l'
        bottomGap='l'
        close={close}
        noMenuLineDecoration
        decorativeLinesAreHidden>
        <div className={stls.content}>
          <div className={stls.left}>
            <Ul classNames={[stls.ul]}>
              {links.map(({ href, label }, idx) => (
                <Li
                  key={`SectionMenuLink-${label}-${idx}`}
                  classNames={[stls.li]}>
                  <Link href={href}>
                    <a className={stls.link} onClick={close}>
                      {label}
                    </a>
                  </Link>
                </Li>
              ))}
            </Ul>
          </div>
          <div className={stls.right}>
            <Ul classNames={[stls.ulContacts]}>
              {list.map(({ title, href, val }, idx) => (
                <Li
                  key={`SectionMenuContact-${title}-${idx}`}
                  classNames={[stls.liContact]}>
                  <P classNames={[stls.p]}>
                    <Highlight weight>{title}:</Highlight>
                  </P>
                  <P classNames={[stls.p]}>
                    <a href={href} className={stls.linkContact}>
                      {val}
                    </a>
                  </P>
                </Li>
              ))}
            </Ul>
          </div>
        </div>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionMenu
