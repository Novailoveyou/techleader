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

type TMenuContentContainerProps = TPropClassNames &
  TPropChildren &
  TPropBgc & {
    withLeftGap?: boolean
  }

const MenuContentContainer: FC<TMenuContentContainerProps> = ({
  classNames,
  children,
  menuBgc,
  withLeftGap
}) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Menu menuBgc={menuBgc} />
      <div className={cn(stls.content, { [stls.withLeftGap]: withLeftGap })}>
        {children}
      </div>
    </div>
  )
}

export default MenuContentContainer
