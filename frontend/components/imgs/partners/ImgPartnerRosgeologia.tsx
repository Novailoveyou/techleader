import stls from '@/styles/components/imgs/partners/ImgPartnerRosgeologia.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/partners/rosgeologia.png'

type TImgPartnerRosgeologiaProps = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight

const ImgPartnerRosgeologia: FC<TImgPartnerRosgeologiaProps> = ({
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
        alt={at.en ? 'Rosgeologia' : 'Росгеология'}
        title={at.en ? 'Rosgeologia' : 'Росгеология'}
      />
    </>
  )
}

export default ImgPartnerRosgeologia
