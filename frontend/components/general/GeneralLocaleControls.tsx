import stls from '@/styles/components/general/GeneralLocaleControls.module.sass'
import { FC } from 'react'
import { i18n } from '@/config/index'
import { BtnLang } from '@/components/btns'

const GeneralLocaleControls: FC = () => {
  const list = [
    {
      locale: i18n.locales.ru,
      label: 'RU'
    },
    {
      locale: i18n.locales.en,
      label: 'EN'
    }
  ]
  return (
    <ul className={stls.list}>
      {list.map((item, idx) => (
        <li key={`${item.label}-${idx}`} className={stls.listItem}>
          <BtnLang locale={item.locale}>{item.label}</BtnLang>
        </li>
      ))}
    </ul>
  )
}

export default GeneralLocaleControls
