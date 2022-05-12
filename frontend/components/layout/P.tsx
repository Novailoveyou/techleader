import stls from '@/styles/components/layout/P.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TPProps = TPropClassNames & TPropChildren

const P: FC<TPProps> = ({ classNames, children }) => {
  return (
    <p
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </p>
  )
}

export default P
