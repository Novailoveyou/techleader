import stls from '@/styles/components/imgs/partners/ImgPartnerKingdream.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/partners/kingdream.png'

type TImgPartnerKingdreamProps = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight

const ImgPartnerKingdream: FC<TImgPartnerKingdreamProps> = ({
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
        alt={at.en ? 'Kingdream' : 'Kingdream'}
        title={at.en ? 'Kingdream' : 'Kingdream'}
      />
    </>
  )
}

export default ImgPartnerKingdream
