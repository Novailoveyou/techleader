import stls from '@/styles/components/imgs/products/ImgProduct3.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/products/product-3.jpg'

type TImgProduct3Props = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgProduct3: FC<TImgProduct3Props> = ({ classNames, width, height }) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={at.en ? 'Product 3' : 'Продукт 3'}
        title={at.en ? 'Product 3' : 'Продукт 3'}
      />
    </>
  )
}

export default ImgProduct3
