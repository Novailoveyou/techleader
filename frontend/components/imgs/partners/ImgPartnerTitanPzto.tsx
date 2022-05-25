import stls from '@/styles/components/imgs/partners/ImgPartnerTitanPzto.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/partners/titan-pzto.png'

type TImgPartnerTitanPztoProps = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight

const ImgPartnerTitanPzto: FC<TImgPartnerTitanPztoProps> = ({
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
        alt={at.en ? 'Titan Pzto' : 'Титан ПЗТО'}
        title={at.en ? 'Titan Pzto' : 'Титан ПЗТО'}
      />
    </>
  )
}

export default ImgPartnerTitanPzto
