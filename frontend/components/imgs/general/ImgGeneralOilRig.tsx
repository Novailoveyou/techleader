import stls from '@/styles/components/imgs/general/ImgGeneralOilRig.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/general/oil-rig.png'

type TypeImgGeneralOilRigProps = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight

const ImgGeneralOilRig: FC<TypeImgGeneralOilRigProps> = ({
  classNames,
  width,
  height
}: TypeImgGeneralOilRigProps) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={at.en ? 'Oil rig' : 'Нефтяная платформа'}
      />
    </>
  )
}

export default ImgGeneralOilRig
