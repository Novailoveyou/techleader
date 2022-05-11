import stls from '@/styles/components/layout/Header.module.sass'
import { FC } from 'react'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type THeaderProps = TPropClassNames

const Header: FC<THeaderProps> = ({ classNames }) => {
  return (
    <header
      id={selectors.ids.header}
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      Header
    </header>
  )
}

export default Header
