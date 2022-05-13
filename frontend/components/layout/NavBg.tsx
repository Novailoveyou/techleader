import stls from '@/styles/components/layout/NavBg.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren, TPropColor } from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TNavBgProps = TPropClassNames & TPropColor

const NavBg: FC<TNavBgProps> = ({ classNames, color }) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }
      style={{ backgroundColor: color }}></div>
  )
}

export default NavBg
