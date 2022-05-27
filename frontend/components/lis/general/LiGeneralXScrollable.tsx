import stls from '@/styles/components/lis/general/LiGeneralXScrollable.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
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

type TUlGeneralXScrollableProps = TPropClassNames & TPropH1

const LiGeneralXScrollable: FC<TUlGeneralXScrollableProps> = ({
  classNames,
  children
}) => {
  return <Li classNames={[cn(stls.container, classNames)]}>{children}</Li>
}

export default LiGeneralXScrollable
