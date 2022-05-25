import stls from '@/styles/components/layout/Menu.module.sass'
import { FC, MouseEventHandler } from 'react'
import {
  TPropClassNames,
  TPropChildren,
  TGeneralColorHex,
  TPropBgc
} from '@/types/index'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { PopupGeneralBody } from '@/components/popups'
import { BtnMenu, BtnPhone } from '@/components/btns'

type TMenuProps = TPropClassNames & TPropBgc

const Menu: FC<TMenuProps> = ({ classNames, menuBgc }) => {
  return (
    <nav
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      style={{ backgroundColor: menuBgc }}>
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
        repositionOnResize>
        {(close: MouseEventHandler) => (
          <PopupGeneralBody close={close}>menu</PopupGeneralBody>
        )}
      </Popup>
      <BtnPhone classNames={[stls.btnPhone]} />
    </nav>
  )
}

export default Menu
