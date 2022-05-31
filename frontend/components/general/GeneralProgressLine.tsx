import stls from '@/styles/components/general/GeneralProgressLine.module.sass'
import { TGeneralColorHex, TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useCompanyInfo } from '@/hooks/index'
import { GeneralNonBrakingSpace } from '@/components/general'

type TGeneralProgressLineProps = TPropClassNames & {
  listLength: number
  curListItemIdx: number
  isProgressivelyFilling?: boolean
  containerBgc?: TGeneralColorHex
  progressLineBgc?: TGeneralColorHex
}

const GeneralProgressLine: FC<TGeneralProgressLineProps> = ({
  classNames,
  listLength,
  curListItemIdx,
  isProgressivelyFilling,
  containerBgc,
  progressLineBgc
}) => {
  return (
    <span
      className={cn(stls.container, getClassNames({ classNames }), {
        [stls.fadeOutAfterDelay]: isProgressivelyFilling
      })}
      style={{ backgroundColor: containerBgc }}>
      <span
        className={cn(stls.progressLine, {
          [stls.fadeOutAfterDelay]: isProgressivelyFilling
        })}
        style={{
          width: isProgressivelyFilling
            ? `${(100 / (listLength - 1)) * curListItemIdx}%`
            : `${100 / listLength}%`,
          marginLeft: !isProgressivelyFilling
            ? `${(100 / listLength) * curListItemIdx}%`
            : undefined,
          backgroundColor: progressLineBgc
        }}></span>
    </span>
  )
}

export default GeneralProgressLine
