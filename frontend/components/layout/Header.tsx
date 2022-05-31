import stls from '@/styles/components/layout/Header.module.sass'
import { FC, useEffect } from 'react'
import { TPropClassNames } from '@/types/index'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { routes, colors, selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt, useCompanyInfo, useScrollNavigation } from '@/hooks/index'
import {
  MenuContentContainer,
  Menu,
  H1,
  P,
  Highlight
} from '@/components/layout'
import {
  GeneralNonBrakingSpace,
  GeneralLocaleControls
} from '@/components/general'
import { BtnLogo } from '@/components/btns'
import { ImgGeneralOilRig } from '@/components/imgs'

type THeaderProps = TPropClassNames

const Header: FC<THeaderProps> = ({ classNames }) => {
  const at = useAt()
  const company = useCompanyInfo()

  useScrollNavigation({ toRoute: routes.front.about })

  const CompanyName = () => <Highlight color>{company.name.default}</Highlight>

  return (
    <header
      id={selectors.ids.header}
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <GeneralLocaleControls classNames={[stls.GeneralLocaleControls]} />
      <MenuContentContainer
        leftGap='m'
        menuBgc={colors.gamma}
        contentChildClassNames={[stls.MenuContentContainerContentChild]}
        progressBarContainerBgc={colors.gamma}
        progressBarLineBgc={colors.gamma}
        curListItemIdx={0}>
        <div className={stls.top}>
          <BtnLogo classNames={[stls.BtnLogo]} />
        </div>
        <div className={stls.bottom}>
          <H1 classNames={[stls.h1]}>
            <span className={stls.titleTop}>
              {at.en ? (
                <>
                  <CompanyName /> Company
                </>
              ) : (
                <>
                  Компания <CompanyName />
                </>
              )}
            </span>{' '}
            <span className={stls.titleBottom}>
              {at.en ? <>creates solutions</> : <>создает решения</>}
            </span>
          </H1>
          <P classNames={[stls.p]}>{company.desc}</P>
          <ImgGeneralOilRig classNames={[stls.ImgGeneralOilRig]} />
        </div>
      </MenuContentContainer>
    </header>
  )
}

export default Header
