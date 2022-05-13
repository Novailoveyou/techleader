import stls from '@/styles/components/btns/BtnLogo.module.sass'
import { TPropClassNames } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routes } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { SvgGeneralLogo } from '@/components/svgs'

type TypeBtnLogoProps = TPropClassNames

const BtnLogo = ({ classNames }: TypeBtnLogoProps) => {
  return (
    <Link href={routes.front.home}>
      <a
        className={
          cn([stls.container], getClassNames({ classNames })) || undefined
        }>
        <SvgGeneralLogo classNames={[stls.SvgGeneralLogo]} />
      </a>
    </Link>
  )
}

export default BtnLogo
