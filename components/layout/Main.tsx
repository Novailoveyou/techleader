import stls from '@/styles/components/layout/Main.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TMainProps = TPropClassNames & TPropChildren

const Main: FC<TMainProps> = ({ classNames, children }) => {
  return (
    <main
      id={selectors.ids.main}
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </main>
  )
}

export default Main
