import stls from '@/styles/components/layout/SvgContainer.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TSvgContainerProps = TPropClassNames & TPropChildren

const SvgContainer: FC<TSvgContainerProps> = ({ classNames, children }) => {
  return (
    <span
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </span>
  )
}

export default SvgContainer
