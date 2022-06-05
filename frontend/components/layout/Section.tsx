import stls from '@/styles/components/layout/Section.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropElId, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TSectionProps = TPropClassNames & TPropElId & TPropChildren

const Section: FC<TSectionProps> = ({ classNames, id, children }) => {
  return (
    <section
      id={id}
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {children}
    </section>
  )
}

export default Section
