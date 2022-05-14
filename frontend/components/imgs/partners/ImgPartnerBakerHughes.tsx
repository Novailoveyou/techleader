import stls from '@/styles/components/imgs/partners/ImgPartnerBakerHughes.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/partners/baker-hughes.png'

type TypeImgPartnerBakerHughesProps = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight

const ImgPartnerBakerHughes: FC<TypeImgPartnerBakerHughesProps> = ({
  classNames,
  width,
  height
}: TypeImgPartnerBakerHughesProps) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={at.en ? 'Baker Hughes' : 'Baker Hughes'}
        title={at.en ? 'Baker Hughes' : 'Baker Hughes'}
      />
    </>
  )
}

export default ImgPartnerBakerHughes
