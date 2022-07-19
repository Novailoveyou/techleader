import stls from '@/styles/components/general/GeneralDecorativeLines.module.sass'
import { TGeneralColorHex, TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { useCompanyInfo } from '@/hooks/index'
import { getClassNames } from '@/helpers/index'
import { GeneralNonBrakingSpace } from '@/components/general'

type TGeneralDecorativeLines = TPropClassNames & {
  decorativeLinesColor?: TGeneralColorHex
}

const GeneralDecorativeLines: FC<TGeneralDecorativeLines> = ({
  classNames,
  decorativeLinesColor
}) => {
  return (
    <span
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <span
        className={cn(stls.line, stls.line1)}
        style={{ backgroundColor: decorativeLinesColor }}></span>
      <span
        className={cn(stls.line, stls.line2)}
        style={{ backgroundColor: decorativeLinesColor }}></span>
      <span
        className={cn(stls.line, stls.line3)}
        style={{ backgroundColor: decorativeLinesColor }}></span>
    </span>
  )
}

export default GeneralDecorativeLines
