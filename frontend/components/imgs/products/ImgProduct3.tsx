import stls from '@/styles/components/imgs/products/ImgProduct3.module.sass'
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
import src from '@/public/assets/imgs/products/product-3.png'

type TImgProduct3Props = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight &
  TPropImgAlt

const ImgProduct3: FC<TImgProduct3Props> = ({
  classNames,
  width,
  height,
  alt
}) => {
  const at = useAt()

  const defaultAlt = at.en ? 'Product 3' : 'Продукт 3'
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

export default ImgProduct3
