import stls from '@/styles/components/layout/MenuContentContainer.module.sass'
import { FC, ReactNode } from 'react'
import {
  TPropClassNames,
  TPropChildren,
  TGeneralColorHex,
  TPropBgc,
  TPropClose,
  TGeneralClassNames
} from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { GeneralProgressLine } from '@/components/general'
import { Menu } from '@/components/layout'

type TMenuContentContainerProps = TPropClassNames &
  TPropChildren &
  TPropBgc &
  TPropClose & {
    contentClassNames?: TGeneralClassNames
    contentChildClassNames?: TGeneralClassNames
    ReactNodeImageClassNames?: TGeneralClassNames
    ReactNodeImage?: ReactNode
    menuIconColor?: TGeneralColorHex
    menuArrowColor?: TGeneralColorHex
    menuPhoneColor?: TGeneralColorHex
    menuIconBorderColor?: TGeneralColorHex
    menuArrowLineColor?: TGeneralColorHex
    topGap?: 'l' | 'xl'
    bottomGap?: 'l' | 'xl'
    leftGap?: 'xl' | 'm'
    childTopGap?: 'l' | 'xl'
    childBottomGap?: 'l' | 'xl'
    curListItemIdx?: number
    progressBarContainerBgc?: TGeneralColorHex
    progressBarLineBgc?: TGeneralColorHex
    noMenuLineDecoration?: boolean
  }

const MenuContentContainer: FC<TMenuContentContainerProps> = ({
  classNames,
  contentClassNames,
  contentChildClassNames,
  ReactNodeImageClassNames,
  children,
  close,
  ReactNodeImage,
  menuBgc,
  topGap,
  bottomGap,
  leftGap,
  menuIconColor,
  menuArrowColor,
  menuPhoneColor,
  menuIconBorderColor,
  menuArrowLineColor,
  childTopGap,
  childBottomGap,
  curListItemIdx,
  progressBarContainerBgc,
  progressBarLineBgc,
  noMenuLineDecoration
}) => {
  const sectionsListLength = 8

  const topGapL = topGap === 'l'
  const topGapXl = topGap === 'xl'

  const bottomGapL = bottomGap === 'l'
  const bottomGapXl = bottomGap === 'xl'

  const leftGapXl = leftGap === 'xl'
  const leftGapM = leftGap === 'm'

  const childTopGapL = childTopGap === 'l'
  const childTopGapXl = childTopGap === 'xl'

  const childBottomGapL = childBottomGap === 'l'
  const childBottomGapXl = childBottomGap === 'xl'

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Menu
        classNames={[stls.menu]}
        menuBgc={menuBgc}
        close={close}
        menuIconColor={menuIconColor}
        menuArrowColor={menuArrowColor}
        menuPhoneColor={menuPhoneColor}
        menuIconBorderColor={menuIconBorderColor}
        menuArrowLineColor={menuArrowLineColor}
        noMenuLineDecoration={noMenuLineDecoration}
      />
      <div
        className={cn(
          stls.content,
          {
            [stls.contentTopGapL]: topGapL,
            [stls.contentTopGapXl]: topGapXl,
            [stls.contentBottomGapL]: bottomGapL,
            [stls.contentBottomGapXl]: bottomGapXl,
            [stls.contentLeftGapXl]: leftGapXl,
            [stls.leftGapM]: leftGapM
          },
          getClassNames({ classNames: contentClassNames })
        )}>
        <GeneralProgressLine
          classNames={[stls.GeneralProgressLine]}
          listLength={sectionsListLength}
          curListItemIdx={curListItemIdx || 0}
          isProgressivelyFilling
          containerBgc={progressBarContainerBgc}
          progressLineBgc={progressBarLineBgc}
        />
        {ReactNodeImage && (
          <div
            className={cn(
              stls.ReactNodeImage,
              getClassNames({ classNames: ReactNodeImageClassNames })
            )}>
            {ReactNodeImage}
          </div>
        )}
        <div
          className={cn(
            stls.contentChild,
            {
              [stls.contentChildleftGapXl]: leftGapXl,
              [stls.contentChildTopGapL]: childTopGapL,
              [stls.contentChildTopGapXl]: childTopGapXl,
              [stls.contentChildBottomGapL]: childBottomGapL,
              [stls.contentChildBottomGapXl]: childBottomGapXl
            },
            getClassNames({ classNames: contentChildClassNames })
          )}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MenuContentContainer
