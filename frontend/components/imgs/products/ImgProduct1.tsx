import stls from '@/styles/components/imgs/products/ImgProduct1.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/products/product-1.png'

type TImgProduct1Props = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgProduct1: FC<TImgProduct1Props> = ({ classNames, width, height }) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={at.en ? 'Product 1' : 'Продукт 1'}
        title={at.en ? 'Product 1' : 'Продукт 1'}
      />
    </>
  )
}

export default ImgProduct1
