import stls from '@/styles/components/layout/Highlight.module.sass'
import { FC } from 'react'
import { TPropChildren, TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type THighlightProps = TPropClassNames &
  TPropChildren & {
    color?: boolean
    weight?: boolean
    uppercase?: boolean
  }

const Highlight: FC<THighlightProps> = ({
  classNames,
  children,
  color,
  weight,
  uppercase
}) => {
  return (
    <span
      className={
        cn(
          stls.container,
          getClassNames({ classNames }),
          {
            [stls.color]: color
          },
          {
            [stls.weight]: weight
          },
          {
            [stls.uppercase]: uppercase
          }
        ) || undefined
      }>
      {children}
    </span>
  )
}

export default Highlight
