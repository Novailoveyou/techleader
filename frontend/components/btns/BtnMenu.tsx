import stls from '@/styles/components/btns/BtnMenu.module.sass'
import {
  TPropClassNames,
  TPropClose,
  TPropColor,
  TPropOpen
} from '@/types/index'
import { forwardRef, useEffect } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { SvgGeneralMenu } from '@/components/svgs'

type TBtnMenuProps = TPropClassNames & TPropOpen & TPropClose & TPropColor

const BtnMenu = forwardRef<HTMLButtonElement, TBtnMenuProps>(
  ({ classNames, open, close, color }, ref) => {
    const at = useAt()

    useEffect(() => {
      if (open === true) {
        sessionStorage.setItem('menuIsOpen', 'true')
      }
      if (open === false) {
        sessionStorage.setItem('menuIsOpen', 'false')
      }
    }, [open])
    return (
      <button
        className={
          cn(stls.container, getClassNames({ classNames })) || undefined
        }
        title={at.en ? 'Navigation button' : 'Меню'}
        ref={ref}
        {...(close ? { onClick: e => close(e) } : {})}>
        <SvgGeneralMenu classNames={[stls.SvgGeneralMenu]} color={color} />
      </button>
    )
  }
)

BtnMenu.displayName = 'BtnMenu'

export default BtnMenu
