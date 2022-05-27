import stls from '@/styles/components/imgs/products/ImgProduct2.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/products/product-2.jpg'

type TImgProduct2Props = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgProduct2: FC<TImgProduct2Props> = ({ classNames, width, height }) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={at.en ? 'Product 2' : 'Продукт 2'}
        title={at.en ? 'Product 2' : 'Продукт 2'}
      />
    </>
  )
}

export default ImgProduct2
