import stls from '@/styles/components/btns/BtnPhone.module.sass'
import { TGeneralColorHex, TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useCompanyInfo, useAt } from '@/hooks/index'
import { SvgGeneralPhone } from '@/components/svgs'

type TBtnPhoneProps = TPropClassNames & {
  menuPhoneColor?: TGeneralColorHex
  menuIconBorderColor?: TGeneralColorHex
}

const BtnPhone: FC<TBtnPhoneProps> = ({
  classNames,
  menuPhoneColor,
  menuIconBorderColor
}) => {
  const at = useAt()
  const company = useCompanyInfo()
  return (
    <a
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      style={{ borderColor: menuIconBorderColor }}
      href={company.phoneNumbers.default.href}
      title={at.en ? 'Call us' : 'Позвонить нам'}>
      <SvgGeneralPhone
        classNames={[stls.SvgGeneralPhone]}
        color={menuPhoneColor}
      />
    </a>
  )
}

export default BtnPhone
