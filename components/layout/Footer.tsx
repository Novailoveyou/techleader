import stls from '@/styles/components/layout/Footer.module.sass'
import { FC } from 'react'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useCompanyInfo } from '@/hooks/index'
import { Wrapper } from '@/components/layout'

type TFooterProps = TPropClassNames

const Footer: FC<TFooterProps> = ({ classNames }) => {
  const company = useCompanyInfo()
  return (
    <footer
      id={selectors.ids.footer}
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <p className={stls.copy}>
          {company.name.default} &copy; {new Date().getFullYear()}
        </p>
      </Wrapper>
    </footer>
  )
}

export default Footer
