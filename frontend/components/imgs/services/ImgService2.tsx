import stls from '@/styles/components/imgs/services/ImgService2.module.sass'
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
import src from '@/public/assets/imgs/services/service-2.jpg'

type TImgProduct2Props = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight &
  TPropImgAlt

const ImgService2: FC<TImgProduct2Props> = ({
  classNames,
  width,
  height,
  alt
}) => {
  const at = useAt()

  const defaultAlt = at.en ? 'Service 2' : 'Сервис 2'
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={alt || defaultAlt}
        title={alt || defaultAlt}
      />
    </>
  )
}

export default ImgService2
