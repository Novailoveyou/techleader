import stls from '@/styles/components/sections/SectionGeneralContacts.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { Section, Wrapper, H2 } from '@/components/layout'
import { GeneralAddress } from '@/components/general'

type TSectionGeneralContactsProps = TPropClassNames

const SectionGeneralContacts: FC<TSectionGeneralContactsProps> = ({
  classNames
}) => {
  const at = useAt()
  const company = useCompanyInfo()

  const list = [
    {
      key: at.en ? 'Full title' : 'Полное название',
      value: company.name.full
    },
    {
      key: at.en ? 'Address' : 'Фактический адрес',
      value: <GeneralAddress />
    },
    {
      key: at.en ? 'In Yandex maps' : 'В Яндекс Навигатор',
      value: company.addresses.default.yandexMaps.name
    },
    {
      key: company.phoneNumbers.default.contactType,
      value: company.phoneNumbers.default.val,
      href: company.phoneNumbers.default.href
    },
    {
      key: company.emails.default.contactType,
      value: company.emails.default.val,
      href: company.emails.default.href
    }
  ]
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <H2>{at.en ? 'Contacts' : 'Контакты'}</H2>
        <ul className={stls.list}>
          {list.map(({ key, value, href }, idx) => (
            <li key={`${key}-${idx}`} className={stls.listItem}>
              <h3 className={stls.key}>{key}:</h3>
              {href ? (
                <a className={cn(stls.value, stls.href)} href={href}>
                  {value}
                </a>
              ) : (
                <span className={stls.value}>{value}</span>
              )}
            </li>
          ))}
        </ul>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralContacts
