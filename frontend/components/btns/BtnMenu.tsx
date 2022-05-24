import stls from '@/styles/components/btns/BtnMenu.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { SvgGeneralMenu } from '@/components/svgs'

type TypeBtnMenuProps = TPropClassNames

const BtnMenu = ({ classNames }: TypeBtnMenuProps) => {
  return (
    <button
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <SvgGeneralMenu classNames={[stls.SvgGeneralMenu]} />
    </button>
  )
}

export default BtnMenu
