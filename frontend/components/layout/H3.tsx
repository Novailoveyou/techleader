import stls from '@/styles/components/layout/H3.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TH3Props = TPropClassNames & TPropChildren

const H3: FC<TH3Props> = ({ classNames, children }) => {
  return (
    <h3
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </h3>
  )
}

export default H3
