import stls from '@/styles/components/layout/Menu.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TMenuProps = TPropClassNames

const Menu: FC<TMenuProps> = ({ classNames }) => {
  return (
    <nav
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }></nav>
  )
}

export default Menu
