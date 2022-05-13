import stls from '@/styles/components/layout/Content.module.sass'
import { FC } from 'react'
import { TPropChildren, TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TContentProps = TPropClassNames & TPropChildren

const Content: FC<TContentProps> = ({ classNames, children }) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </div>
  )
}

export default Content
