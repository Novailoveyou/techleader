import stls from '@/styles/components/layout/H1.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TH1Props = TPropClassNames & TPropChildren

const H1: FC<TH1Props> = ({ classNames, children }) => {
  return (
    <h1
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </h1>
  )
}

export default H1
