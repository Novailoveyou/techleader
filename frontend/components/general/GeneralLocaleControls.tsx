import stls from '@/styles/components/general/GeneralLocaleControls.module.sass'
import { TPropClassNames, TGeneralLocale } from '@/types/index'
import cn from 'classnames'
import { FC } from 'react'
import { i18n } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { BtnLang } from '@/components/btns'

type TGeneralLocaleControls = TPropClassNames

const GeneralLocaleControls: FC<TGeneralLocaleControls> = ({ classNames }) => {
  const at = useAt()
  const list: TGeneralLocale[] = [
    {
      val: i18n.locales.ru,
      label: 'RU',
      title: 'Русский'
    },
    {
      val: i18n.locales.en,
      label: 'EN',
      title: 'English'
    }
  ]
  return (
    <nav
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-label={at.en ? 'Language settings' : 'Настройки языка'}>
      <ul className={stls.list}>
        {list.map((item, idx) => (
          <li key={`${item.label}-${idx}`} className={stls.listItem}>
            <BtnLang locale={item}>{item.label}</BtnLang>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GeneralLocaleControls
