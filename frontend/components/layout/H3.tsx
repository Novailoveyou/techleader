import stls from '@/styles/components/layout/H3.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TH3Props = TPropClassNames &
  TPropChildren & {
    styledAlt?: boolean
  }

const H3: FC<TH3Props> = ({ classNames, children, styledAlt }) => {
  return (
    <h3
      className={
        cn(
          stls.container,
          { [stls.default]: !styledAlt, [stls.styledAlt]: styledAlt },
          getClassNames({ classNames })
        ) || undefined
      }>
      {children}
    </h3>
  )
}

export default H3
