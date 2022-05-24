import stls from '@/styles/components/imgs/partners/ImgPartnerVniibt.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/partners/vniibt.png'

type TypeImgPartnerVniibtProps = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight

const ImgPartnerVniibt: FC<TypeImgPartnerVniibtProps> = ({
  classNames,
  width,
  height
}: TypeImgPartnerVniibtProps) => {
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
