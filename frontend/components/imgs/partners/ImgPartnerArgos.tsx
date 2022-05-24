import stls from '@/styles/components/imgs/partners/ImgPartnerArgos.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/partners/argos.png'

type TypeImgPartnerArgosProps = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgPartnerArgos: FC<TypeImgPartnerArgosProps> = ({
  classNames,
  width,
  height
}: TypeImgPartnerArgosProps) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={at.en ? 'Argos' : 'Аргос'}
        title={at.en ? 'Argos' : 'Аргос'}
      />
    </>
  )
}

export default ImgPartnerArgos
