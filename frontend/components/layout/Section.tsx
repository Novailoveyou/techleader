import stls from '@/styles/components/layout/Section.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TSectionProps = TPropClassNames & TPropChildren

const Section: FC<TSectionProps> = ({ classNames, children }) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </section>
  )
}

export default Section
