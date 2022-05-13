import stls from '@/styles/components/sections/SectionGeneralAbout.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { addSpacesToNumber } from '@/helpers/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { Section, Wrapper, H2, P, Highlight, NavBg } from '@/components/layout'

type TSectionGeneralAboutProps = TPropClassNames

const SectionGeneralAbout: FC<TSectionGeneralAboutProps> = ({ classNames }) => {
  const at = useAt()
  const company = useCompanyInfo()

  const list = [
    { title: `${addSpacesToNumber(189228)} ${at.en ? 'meters' : 'метра'}` }
  ]
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <NavBg color={colors.beta} />
      <Wrapper>
        <H2>{at.en ? 'About' : 'О компании'}</H2>
        <P>
          <Highlight weight uppercase>
            {company.name.short}
          </Highlight>{' '}
          —{' '}
          {at.en ? (
            <>
              oilfield services company focused on creating technical and
              engineering solutions for the oil and gas industry
            </>
          ) : (
            <>
              нефтесервисная компания, основной задачей которой является
              создание инженерных и технологических решений отвечающих вызовам
              нефтегазовой индустрии
            </>
          )}
        </P>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralAbout
