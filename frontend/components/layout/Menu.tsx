import stls from '@/styles/components/layout/Menu.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { BtnMenu, BtnPhone } from '@/components/btns'

type TMenuProps = TPropClassNames

const Menu: FC<TMenuProps> = ({ classNames }) => {
  return (
    <nav
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <BtnMenu />
      <BtnPhone classNames={[stls.btnPhone]} />
    </nav>
  )
}

export default Menu
