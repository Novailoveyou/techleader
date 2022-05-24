import stls from '@/styles/components/layout/H1.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren, TPropStyledAsH2 } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TH1Props = TPropClassNames & TPropChildren & TPropStyledAsH2

const H1: FC<TH1Props> = ({ classNames, children, styledAsH2 }) => {
  return (
    <h1
      className={
        cn(
          stls.container,
          { [stls.default]: !styledAsH2, [stls.h2]: styledAsH2 },
          getClassNames({ classNames })
        ) || undefined
      }>
      {children}
    </h1>
  )
}

export default H1
