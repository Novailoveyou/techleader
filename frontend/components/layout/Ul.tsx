import stls from '@/styles/components/layout/Ul.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TUlProps = TPropClassNames & TPropChildren

const Ul: FC<TUlProps> = ({ classNames, children }) => {
  return (
    <ul
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {children}
    </ul>
  )
}

export default Ul
