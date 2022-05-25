import stls from '@/styles/components/imgs/partners/ImgPartnerVniibt.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/partners/vniibt.png'

type TImgPartnerVniibtProps = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgPartnerVniibt: FC<TImgPartnerVniibtProps> = ({
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
        alt={at.en ? 'Vniibt' : 'ВНИИБТ'}
        title={at.en ? 'Vniibt' : 'ВНИИБТ'}
      />
    </>
  )
}

export default ImgPartnerVniibt
