import stls from '@/styles/components/general/GeneralProgressLine.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useCompanyInfo } from '@/hooks/index'
import { GeneralNonBrakingSpace } from '@/components/general'

type TGeneralProgressLineProps = TPropClassNames & {
  listLength: number
  curListItemIdx: number
}

const GeneralProgressLine: FC<TGeneralProgressLineProps> = ({
  classNames,
  listLength,
  curListItemIdx
}) => {
  return (
    <span className={cn(stls.container, getClassNames({ classNames }))}>
      <span
        className={stls.progressLine}
        style={{
          // width: `${(100 / listLength) * (curListItemIdx + 1)}%`
          width: `${100 / listLength}%`,
          marginLeft: `${(100 / listLength) * curListItemIdx}%`
        }}></span>
    </span>
  )
}

export default GeneralProgressLine
