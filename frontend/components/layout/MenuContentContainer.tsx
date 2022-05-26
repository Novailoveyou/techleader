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
    topGap?: 'l' | 'xl'
    bottomGap?: 'l' | 'xl'
    leftGap?: 'xl'
  }

const MenuContentContainer: FC<TMenuContentContainerProps> = ({
  classNames,
  children,
  menuBgc,
  topGap,
  bottomGap,
  leftGap
}) => {
  const topGapL = topGap === 'l'
  const topGapXl = topGap === 'xl'

  const bottomGapL = bottomGap === 'l'
  const bottomGapXl = bottomGap === 'xl'

  const leftGapXl = leftGap === 'xl'

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Menu classNames={[stls.menu]} menuBgc={menuBgc} />
      <div
        className={cn(stls.content, {
          [stls.contentTopGapL]: topGapL,
          [stls.contentTopGapXl]: topGapXl,
          [stls.contentBottomGapL]: bottomGapL,
          [stls.contentBottomGapXl]: bottomGapXl,
          [stls.contentLeftGapXl]: leftGapXl
        })}>
        <div
          className={cn(stls.contentChild, {
            [stls.contentChildleftGapXl]: leftGapXl
          })}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MenuContentContainer
