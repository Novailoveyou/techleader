import stls from '@/styles/components/imgs/general/ImgGeneralAbout.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/general/about.jpg'

type TImgGeneralAboutProps = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgGeneralAbout: FC<TImgGeneralAboutProps> = ({
  classNames,
  width,
  height
}) => {
  const at = useAt()
  return (
    <>
      <ImageContainer
        classNames={[cn(stls.container, classNames)]}
        src={src}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        alt={at.en ? 'About' : 'О нас'}
      />
    </>
  )
}

export default ImgGeneralAbout
