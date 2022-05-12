import stls from '@/styles/components/btns/BtnLogo.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { routes } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { SvgGeneralLogo } from '@/components/svgs'

type TypeBtnLogoProps = TPropClassNames

const BtnLogo = ({ classNames }: TypeBtnLogoProps) => {
  return (
    <a
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }
      href={routes.front.home}>
      <SvgGeneralLogo classNames={[stls.SvgGeneralLogo]} />
    </a>
  )
}

export default BtnLogo
