import stls from '@/styles/components/layout/Wrapper.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TWrapperProps = TPropClassNames & TPropChildren

const Wrapper: FC<TWrapperProps> = ({ classNames, children }) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </div>
  )
}

export default Wrapper
