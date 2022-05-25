import stls from '@/styles/components/btns/BtnLang.module.sass'
import { TPropChildren, TPropClassNames, TPropLinkLocale } from '@/types/index'
import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { routes } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useRouter } from 'next/router'

type TBtnLangProps = TPropClassNames & TPropChildren & TPropLinkLocale

const BtnLang: FC<TBtnLangProps> = ({ classNames, children, locale }) => {
  const router = useRouter()

  const isActive = router.locale === locale
  return (
    <Link href={router.asPath} locale={locale}>
      <a
        className={
          cn(stls.container, getClassNames({ classNames }), {
            [stls.isActive]: isActive
          }) || undefined
        }>
        {children}
      </a>
    </Link>
  )
}

export default BtnLang
