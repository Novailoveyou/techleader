import stls from '@/styles/components/layout/Section.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropElId, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TSectionProps = TPropClassNames &
  TPropElId &
  TPropChildren & {
    onScroll?: (e: React.UIEvent<HTMLDivElement>) => void
  }

const Section: FC<TSectionProps> = ({ classNames, id, children, onScroll }) => {
  return (
    <section
      id={id}
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      onScroll={onScroll}>
      {children}
    </section>
  )
}

export default Section
