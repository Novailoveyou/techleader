import stls from '@/styles/components/layout/Li.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TLiProps = TPropClassNames & TPropChildren

const Li: FC<TLiProps> = ({ classNames, children }) => {
  return (
    <li
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {children}
    </li>
  )
}

export default Li
