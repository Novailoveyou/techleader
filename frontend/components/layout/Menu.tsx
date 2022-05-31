import stls from '@/styles/components/layout/Menu.module.sass'
import { FC, MouseEventHandler } from 'react'
import {
  TPropClassNames,
  TPropChildren,
  TGeneralColorHex,
  TPropBgc,
  TPropClose
} from '@/types/index'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { colors, selectors, routes } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useTitles } from '@/hooks/index'
import { SectionMenu } from '@/components/sections'
import { BtnMenu, BtnPhone } from '@/components/btns'
import { SvgGeneralArrow } from '@/components/svgs'

type TMenuProps = TPropClassNames &
  TPropBgc &
  TPropClose & {
    menuIconColor?: TGeneralColorHex
    menuArrowColor?: TGeneralColorHex
    menuPhoneColor?: TGeneralColorHex
    menuIconBorderColor?: TGeneralColorHex
    menuArrowLineColor?: TGeneralColorHex
  }

const Menu: FC<TMenuProps> = ({
  classNames,
  menuBgc,
  close,
  menuIconColor,
  menuArrowColor,
  menuPhoneColor,
  menuIconBorderColor,
  menuArrowLineColor
}) => {
  return (
    <nav
      id={selectors.ids.menu}
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      style={{ backgroundColor: menuBgc }}>
      {close ? (
        <BtnMenu
          close={close}
          color={colors.alpha}
          classNames={[stls.btnMenu]}
        />
      ) : (
        <Popup
          trigger={open => (
            <span>
              <BtnMenu
                open={open}
                color={menuIconColor}
                classNames={[stls.btnMenu]}
              />
            </span>
          )}
          position='center center'
          modal
          lockScroll
          nested
          closeOnDocumentClick
          closeOnEscape
          repositionOnResize
          className='LayoutMenu_Popup'>
          {(close: MouseEventHandler) => <SectionMenu close={close} />}
        </Popup>
      )}

      <div className={stls.decoration}>
        <span
          className={stls.line}
          style={{ backgroundColor: menuArrowLineColor }}></span>
        <SvgGeneralArrow
          classNames={[stls.SvgGeneralArrow]}
          color={menuArrowColor}
        />
      </div>

      <BtnPhone
        classNames={[stls.btnPhone]}
        menuPhoneColor={menuPhoneColor}
        menuIconBorderColor={menuIconBorderColor}
      />
    </nav>
  )
}

export default Menu
