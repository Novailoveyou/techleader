import stls from '@/styles/components/sections/general/SectionGeneralProducts.module.sass'
import { TPropClassNames, TPropH1 } from '@/types/index'
import { FC, useState } from 'react'
import cn from 'classnames'
import { routes, colors, selectors } from '@/config/index'
import {
  useAt,
  useTitles,
  useScrollNavigation,
  useSetCurListItemIdx
} from '@/hooks/index'
import {
  Section,
  Wrapper,
  Content,
  H1,
  H2,
  H3,
  Ul,
  Li,
  P,
  MenuContentContainer,
  Highlight
} from '@/components/layout'
import { GeneralProgressLine } from '@/components/general'
import { UlGeneralXScrollable } from '@/components/uls'
import { LiGeneralXScrollable } from '@/components/lis'
import {
  ImgProduct1,
  ImgProduct2,
  ImgProduct3,
  ImgProduct4
} from '@/components/imgs'

type TSectionGeneralProductsProps = TPropClassNames & TPropH1

const SectionGeneralProducts: FC<TSectionGeneralProductsProps> = ({
  classNames,
  h1
}) => {
  const [curListItemIdx, setCurListItemIdx] = useState(0)

  const at = useAt()
  const titles = useTitles()

  const title = h1 || titles.products

  const list = [
    {
      Img: ImgProduct1,
      list: at.en
        ? [
            'Own PDC drill bits production',
            'Team of professional constructors',
            'Steel and matrix cases manufacturing',
            'Premium cutters in various shapes for drilling hard and tough rock'
          ]
        : [
            'Производим собственные буровые долота PDC',
            'Команда профессиональных конструкторов',
            'Производство стальных и матричных корпусов',
            'Резцы различной геометрии премиального класса для бурения твердых и крепких пород'
          ]
    },
    {
      Img: ImgProduct2,
      title: at.en ? 'PDC Cutters' : 'PDC Резцы',
      desc: at.en
        ? 'Complex geometry cutters manufacturing (3D and 4D), according to the developed drawings'
        : 'Возможность изготовления резцов сложной геометрии (3D и 4D), по разработанным чертежам'
    },
    {
      Img: ImgProduct3,
      title: at.en ? 'Double chamfered cutters' : 'Резцы с двойной фаской',
      desc: at.en
        ? 'Improved cutter edge provides better impact resistance, increasing penetration in hard and tough formations'
        : 'Усовершенствованная кромка резца обеспечивает лучшую ударную стойкость, увеличивая проходку долота в твердых и крепких породах'
    },
    {
      Img: ImgProduct4,
      title: at.en ? '3D-4D Cutters' : '3D-4D Резцы',
      list: at.en
        ? [
            'Improved point impact on the rock',
            'Significant reduction in bit momentum',
            'Increased durability',
            'Increase in SMEs'
          ]
        : [
            'Улучшенное точечное воздействие на породу',
            'Значительное снижение момента на долоте',
            'Увеличенная стойкость',
            'Увеличение МСП'
          ]
    }
  ]

  useSetCurListItemIdx({
    listLength: list.length - 1,
    setCurListItemIdx
  })

  useScrollNavigation({
    fromRoute: routes.front.services,
    toRoute: routes.front.certification,
    curListItemIdx,
    setCurListItemIdx,
    listLength: list.length
  })

  return (
    <Section
      id={selectors.ids.products}
      classNames={[cn(stls.container, classNames)]}>
      <MenuContentContainer
        menuBgc={colors.beta}
        progressBarContainerBgc={colors.beta}
        leftGap='xl'
        topGap='l'
        bottomGap='l'
        curListItemIdx={3}>
        {h1 ? <H1 styledAsH2>{title}</H1> : <H2>{title}</H2>}
        <UlGeneralXScrollable classNames={[stls.list]}>
          {list.map(({ Img, title, desc, list }, idx) => (
            <LiGeneralXScrollable
              key={`${title}-${idx}`}
              classNames={[stls.LiGeneralXScrollable]}
              isShown={curListItemIdx === idx}>
              <Img classNames={[stls.Img]} alt={title || undefined} />
              <div className={stls.right}>
                {title && (
                  <H3>
                    <Highlight color>{title}</Highlight>
                  </H3>
                )}
                {desc && <P>{desc}</P>}
                {list && list.length > 0 && (
                  <Ul classNames={[stls.Ul]}>
                    {list.map((str, idx, list) => (
                      <Li
                        key={`ProductItem-${str}-${idx}`}
                        classNames={[stls.Li]}>
                        <P>
                          {str}
                          {list[idx + 1] ? ';' : '.'}
                        </P>
                      </Li>
                    ))}
                  </Ul>
                )}
              </div>
            </LiGeneralXScrollable>
          ))}
        </UlGeneralXScrollable>
        <GeneralProgressLine
          classNames={[stls.GeneralProgressLine]}
          listLength={list.length}
          curListItemIdx={curListItemIdx}
        />
      </MenuContentContainer>
    </Section>
  )
}

export default SectionGeneralProducts
