import stls from '@/styles/components/uls/general/UlGeneralXScrollable.module.sass'
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
  MenuContentContainer
} from '@/components/layout'

type TUlGeneralXScrollableProps = TPropClassNames & TPropH1

const UlGeneralXScrollable: FC<TUlGeneralXScrollableProps> = ({
  classNames,
  children
}) => {
  return (
    <Ul classNames={[cn(stls.container, classNames)]} UlGeneralXScrollable>
      {children}
    </Ul>
  )
}

export default UlGeneralXScrollable
