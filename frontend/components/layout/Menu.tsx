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

type TMenuProps = TPropClassNames & TPropBgc & TPropClose

const Menu: FC<TMenuProps> = ({ classNames, menuBgc, close }) => {
  return (
    <nav
      id={selectors.ids.menu}
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      style={{ backgroundColor: menuBgc }}>
      {close ? (
        <BtnMenu close={close} color={colors.alpha} />
      ) : (
        <Popup
          trigger={open => (
            <span>
              <BtnMenu open={open} />
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
      {/* <Popup
        trigger={open => (
          <span>
            <BtnMenu open={open} />
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
        {(close: MouseEventHandler) => (
          <>
            <SectionMenu close={close} />
          </>
        )}
      </Popup> */}

      <BtnPhone classNames={[stls.btnPhone]} />
    </nav>
  )
}

export default Menu
