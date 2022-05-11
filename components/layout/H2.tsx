import stls from '@/styles/components/layout/H2.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TH2Props = TPropClassNames & TPropChildren

const H2: FC<TH2Props> = ({ classNames, children }) => {
  return (
    <h2
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </h2>
  )
}

export default H2
