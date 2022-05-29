import stls from '@/styles/components/svgs/general/SvgGeneralArrow.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { colors } from '@/config/index'
import { SvgContainer } from '@/components/layout'

type TSvgGeneralArrowProps = TPropClassNames & TPropColor

const SvgGeneralArrow: FC<TSvgGeneralArrowProps> = ({ classNames, color }) => {
  const at = useAt()
  return (
    <SvgContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{at.en ? 'Стрелка вниз' : 'Arrow down'}</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 21.883L5.765 14.356L5 15L12.521 24L20 15L19.236 14.355L13 21.884L13 0L12 0L12 21.883Z'
          fill={color || colors.alpha}
        />
      </svg>
    </SvgContainer>
  )
}

export default SvgGeneralArrow
