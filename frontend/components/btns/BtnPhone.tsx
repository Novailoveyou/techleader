import stls from '@/styles/components/btns/BtnPhone.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useCompanyInfo, useAt } from '@/hooks/index'
import { SvgGeneralPhone } from '@/components/svgs'

type TBtnPhoneProps = TPropClassNames

const BtnPhone: FC<TBtnPhoneProps> = ({ classNames }) => {
  const at = useAt()
  const company = useCompanyInfo()
  return (
    <a
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      href={company.phoneNumbers.default.href}
      title={at.en ? 'Call us' : 'Позвонить нам'}>
      <SvgGeneralPhone classNames={[stls.SvgGeneralPhone]} />
    </a>
  )
}

export default BtnPhone
