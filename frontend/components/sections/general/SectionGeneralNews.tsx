import stls from '@/styles/components/sections/SectionGeneralNews.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { Section, Wrapper, H2 } from '@/components/layout'

type TSectionGeneralNewsProps = TPropClassNames

const SectionGeneralNews: FC<TSectionGeneralNewsProps> = ({ classNames }) => {
  const at = useAt()
  return (
    <Section classNames={[cn(stls.container, classNames)]}>
      <Wrapper>
        <H2>{at.en ? 'News' : 'Новости'}</H2>
      </Wrapper>
    </Section>
  )
}

export default SectionGeneralNews
