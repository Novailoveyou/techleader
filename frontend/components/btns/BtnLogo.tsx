import stls from '@/styles/components/btns/BtnLogo.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { routes } from '@/config/index'
import { useCompanyInfo } from '@/hooks/index'
import { getClassNames } from '@/helpers/index'
import { SvgGeneralLogo } from '@/components/svgs'

type TBtnLogoProps = TPropClassNames

const BtnLogo: FC<TBtnLogoProps> = ({ classNames }) => {
  const company = useCompanyInfo()
  return (
    <Link href={routes.front.home}>
      <a
        className={
          cn(stls.container, getClassNames({ classNames })) || undefined
        }>
        <SvgGeneralLogo classNames={[stls.SvgGeneralLogo]} />
      </a>
    </Link>
  )
}

export default BtnLogo
