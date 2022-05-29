import stls from '@/styles/components/popups/general/PopupGeneralBody.module.sass'
import {
  TPropClassNames,
  TPropChildren,
  TPropCloseRequired
} from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

type TPopupGeneralBodyProps = TPropClassNames &
  TPropChildren &
  TPropCloseRequired

const PopupGeneralBody: FC<TPopupGeneralBodyProps> = ({
  classNames,
  children,
  close
}) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <div className={stls.content}>{children}</div>
    </div>
  )
}

export default PopupGeneralBody
