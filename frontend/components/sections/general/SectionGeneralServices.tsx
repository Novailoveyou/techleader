import stls from '@/styles/components/sections/general/SectionGeneralServices.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC, useState } from 'react'
import cn from 'classnames'
import { routes, selectors, colors } from '@/config/index'
import {
  useAt,
  useTitles,
  useScrollNavigation,
  useNavScrollDir,
  useSetCurListItemIdx
} from '@/hooks/index'
import {
  Section,
  MenuContentContainer,
  Wrapper,
  Content,
  H1,
  H2,
  H3,
  P
} from '@/components/layout'
import { UlGeneralXScrollable } from '@/components/uls'
import { LiGeneralXScrollable } from '@/components/lis'
import {
  ImgService1,
  ImgService2,
  ImgService3,
  ImgService4,
  ImgServiceIllustration
} from '@/components/imgs'
import truncate from 'truncate'

type TSectionGeneralServicesProps = TPropClassNames & TPropH1

const SectionGeneralServices: FC<TSectionGeneralServicesProps> = ({
  classNames,
  h1
}) => {
  const [curListItemIdx, setCurListItemIdx] = useState(0)

  const at = useAt()
  const titles = useTitles()

  const title = h1 || titles.services

  const list = [
    {
      Img: ImgService1,
      desc: 'Разработка программы строительства скважин с подбором технологий'
    },
    {
      Img: ImgService2,
      desc: 'Инженерный сервис при строительстве эксплуатационных, разведочных и параметрических скважин'
    },
    {
      Img: ImgService3,
      desc: 'Подбор и поставка оборудования и химии отечественного и импортного производства для нефтегазовой отрасли'
    },
    {
      Img: ImgService4,
      desc: 'Сервис по отбору изолированного керна c возможностью подбора и поставок новых дизайнов КОС и бурголовок'
    }
  ]

  useSetCurListItemIdx({
    listLength: list.length - 1,
    setCurListItemIdx
  })

  useScrollNavigation({
    fromRoute: routes.front.about,
    toRoute: routes.front.products,
    curListItemIdx,
    setCurListItemIdx,
    listLength: list.length
  })

  return (
    <Section
      id={selectors.ids.services}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer
        menuBgc={colors.gamma}
        ReactNodeImage={
          <ImgServiceIllustration classNames={[stls.ImgServiceIllustration]} />
        }
        leftGap='xl'
        topGap='l'
        bottomGap='l'>
        {h1 ? (
          <H1 styledAsH2>{title}</H1>
        ) : (
          <H2 classNames={[stls.h2]}>{title}</H2>
        )}
        <UlGeneralXScrollable classNames={[stls.list]}>
          {list &&
            list.length > 0 &&
            list.map(({ Img, desc }, idx) => (
              <LiGeneralXScrollable
                key={`${desc}-${idx}`}
                classNames={[stls.listItem]}
                isShown={curListItemIdx === idx}>
                <P classNames={[stls.p]}>{desc}</P>
                <Img
                  classNames={[stls.img]}
                  alt={desc ? truncate(desc, 120) : undefined}
                />
              </LiGeneralXScrollable>
            ))}
        </UlGeneralXScrollable>
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralServices
