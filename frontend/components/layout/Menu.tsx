import stls from '@/styles/components/layout/Menu.module.sass'
import { FC } from 'react'
import {
  TPropClassNames,
  TPropChildren,
  TGeneralColorHex,
  TPropBgc
} from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { BtnMenu, BtnPhone } from '@/components/btns'

type TMenuProps = TPropClassNames & TPropBgc

const Menu: FC<TMenuProps> = ({ classNames, menuBgc }) => {
  return (
    <nav
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      style={{ backgroundColor: menuBgc }}>
      <BtnMenu />
      <BtnPhone classNames={[stls.btnPhone]} />
    </nav>
  )
}

export default Menu
