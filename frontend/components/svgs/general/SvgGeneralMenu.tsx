import stls from '@/styles/components/svgs/general/SvgGeneralMenu.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { colors } from '@/config/index'
import { SvgContainer } from '@/components/layout'

type TSvgGeneralMenuProps = TPropClassNames & TPropColor

const SvgGeneralMenu = ({ classNames, color }: TSvgGeneralMenuProps) => {
  const at = useAt()
  return (
    <SvgContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 56 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{at.en ? 'Menu' : 'Меню'}</title>
        <path d='M0 1H56' stroke={color || colors.psi} strokeWidth='2' />
        <path d='M0 17H56' stroke={color || colors.psi} strokeWidth='2' />
        <path d='M0 17H56' stroke={color || colors.psi} strokeWidth='2' />
      </svg>
    </SvgContainer>
  )
}

export default SvgGeneralMenu
