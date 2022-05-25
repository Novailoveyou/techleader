import stls from '@/styles/components/popups/general/PopupGeneralBody.module.sass'
import { TPropClassNames, TPropChildren, TPropClose } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

type TPopupGeneralBodyProps = TPropClassNames & TPropChildren & TPropClose

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
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>{children}</div>
      </Wrapper>
    </div>
  )
}

export default PopupGeneralBody
