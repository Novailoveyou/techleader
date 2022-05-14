import stls from '@/styles/components/imgs/partners/ImgPartnerGreat.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/partners/great.png'

type TypeImgPartnerGreatProps = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgPartnerGreat: FC<TypeImgPartnerGreatProps> = ({
  classNames,
  width,
  height
}: TypeImgPartnerGreatProps) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        width={width}
        height={height}
        alt={at.en ? 'Great' : 'Great'}
        title={at.en ? 'Great' : 'Great'}
      />
    </>
  )
}

export default ImgPartnerGreat
