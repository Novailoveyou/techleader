import stls from '@/styles/components/layout/MenuContentContainer.module.sass'
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
import { Menu } from '@/components/layout'

type TMenuContentContainerProps = TPropClassNames & TPropChildren & TPropBgc

const MenuContentContainer: FC<TMenuContentContainerProps> = ({
  classNames,
  children,
  menuBgc
}) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Menu menuBgc={menuBgc} />
      <div className={stls.content}>{children}</div>
    </div>
  )
}

export default MenuContentContainer
