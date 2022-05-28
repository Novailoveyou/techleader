import stls from '@/styles/components/layout/H2.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TH2Props = TPropClassNames &
  TPropChildren & {
    styledAsH3Alt?: boolean
  }

const H2: FC<TH2Props> = ({ classNames, children, styledAsH3Alt }) => {
  return (
    <h2
      className={
        cn(
          stls.container,
          {
            [stls.default]: !styledAsH3Alt,
            [stls.styledAsH3Alt]: styledAsH3Alt
          },
          getClassNames({ classNames })
        ) || undefined
      }>
      {children}
    </h2>
  )
}

export default H2
