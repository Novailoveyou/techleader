import stls from '@/styles/components/imgs/certification/ImgCertification.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/certification/certification.jpg'

type TImgCertificationProps = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgCertification: FC<TImgCertificationProps> = ({
  classNames,
  width,
  height
}) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={at.en ? 'Alliance Certification' : 'Сертификация'}
        title={at.en ? 'Alliance Certification' : 'Сертификация'}
      />
    </>
  )
}

export default ImgCertification
