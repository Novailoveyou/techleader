import stls from '@/styles/components/imgs/partners/ImgPartnerIntegra.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/partners/integra.png'

type TypeImgPartnerIntegraProps = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight

const ImgPartnerIntegra: FC<TypeImgPartnerIntegraProps> = ({
  classNames,
  width,
  height
}: TypeImgPartnerIntegraProps) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={at.en ? 'Integra' : 'Integra'}
        title={at.en ? 'Integra' : 'Integra'}
      />
    </>
  )
}

export default ImgPartnerIntegra
