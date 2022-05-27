import stls from '@/styles/components/general/GeneralMultipleTransparentChildren.module.sass'
import { TPropClassNames, TPropChildren } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useCompanyInfo } from '@/hooks/index'
import { Ul, Li } from '@/components/layout'

type TGeneralMultipleTransparentChildren = TPropChildren & TPropClassNames

const GeneralMultipleTransparentChildren: FC<
  TGeneralMultipleTransparentChildren
> = ({ classNames, children }) => {
  const list = []

  for (let i = 0; i < 10; i++) {
    list.push(children)
  }

  return (
    <Ul classNames={[cn(stls.container, classNames)]}>
      {list.map((item, idx) => (
        <Li
          key={`GeneralMultipleTransparentChildren-${uuidv4()}-${idx}`}
          classNames={[
            cn(stls.Li, {
              [stls.opacity10]: idx === 1,
              [stls.opacity2]: idx === 2
            })
          ]}>
          {item}
        </Li>
      ))}
    </Ul>
  )
}

export default GeneralMultipleTransparentChildren
