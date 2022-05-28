import stls from '@/styles/components/imgs/services/ImgServiceIllustration.module.sass'
import {
  TPropClassNames,
  TPropImgAlt,
  TPropImgHeight,
  TPropImgWidth
} from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/services/illustration.png'

type TImgProduct4Props = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgServiceIllustration: FC<TImgProduct4Props> = ({
  classNames,
  width,
  height
}) => {
  const at = useAt()

  const defaultAlt = at.en ? 'Illustration' : 'Иллюстрация'

  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={defaultAlt}
        title={defaultAlt}
        reactNodeDecoration={<div className={stls.circle}></div>}
      />
    </>
  )
}

export default ImgServiceIllustration
