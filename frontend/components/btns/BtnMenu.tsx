import stls from '@/styles/components/btns/BtnMenu.module.sass'
import { TPropClassNames, TPropOpen } from '@/types/index'
import { forwardRef } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { SvgGeneralMenu } from '@/components/svgs'

type TBtnMenuProps = TPropClassNames & TPropOpen

const BtnMenu = forwardRef<HTMLButtonElement, TBtnMenuProps>(
  ({ classNames, open }, ref) => {
    const at = useAt()
    return (
      <button
        className={
          cn(stls.container, getClassNames({ classNames })) || undefined
        }
        title={at.en ? 'Navigation button' : 'Меню'}
        ref={ref}>
        <SvgGeneralMenu classNames={[stls.SvgGeneralMenu]} />
      </button>
    )
  }
)

BtnMenu.displayName = 'BtnMenu'

export default BtnMenu
