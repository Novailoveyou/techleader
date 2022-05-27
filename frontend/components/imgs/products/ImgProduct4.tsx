import stls from '@/styles/components/imgs/products/ImgProduct4.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/products/product-4.jpg'

type TImgProduct4Props = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgProduct4: FC<TImgProduct4Props> = ({ classNames, width, height }) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={at.en ? 'Product 4' : 'Продукт 4'}
        title={at.en ? 'Product 4' : 'Продукт 4'}
      />
    </>
  )
}

export default ImgProduct4
