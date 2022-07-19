import stls from '@/styles/components/imgs/geography/ImgGeographyMap.module.sass'
import { TPropClassNames, TPropImgHeight, TPropImgWidth } from '@/types/index'
import { FC } from 'react'
import cn from 'classnames'
import { ImageContainer } from '@/components/layout'
import { useAt } from '@/hooks/index'
import src from '@/public/assets/imgs/geography/map.png'

type TImgGeographyMapProps = TPropClassNames & TPropImgWidth & TPropImgHeight

const ImgGeographyMap: FC<TImgGeographyMapProps> = ({
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
        alt={at.en ? 'Map' : 'Карта'}
        // title={at.en ? 'Map' : 'Карта'}
      />
    </>
  )
}

export default ImgGeographyMap
