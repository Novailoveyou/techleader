import stls from '@/styles/components/lis/general/LiGeneralXScrollable.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { colors, selectors } from '@/config/index'
import { useAt, useTitles } from '@/hooks/index'
import {
  Section,
  Wrapper,
  Content,
  H1,
  H2,
  Ul,
  Li,
  MenuContentContainer
} from '@/components/layout'

type TUlGeneralXScrollableProps = TPropClassNames &
  TPropH1 & {
    isShown?: boolean
  }

const LiGeneralXScrollable: FC<TUlGeneralXScrollableProps> = ({
  classNames,
  children,
  isShown
}) => {
  return (
    <>
      <Li
        classNames={[
          cn(stls.container, classNames, { [stls.isShown]: isShown })
        ]}
        LiGeneralXScrollable
        isShown={isShown}>
        {children}
      </Li>
    </>
  )
}

export default LiGeneralXScrollable
