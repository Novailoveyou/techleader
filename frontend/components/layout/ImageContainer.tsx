import stls from '@/styles/components/layout/ImageContainer.module.sass'
import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import {
  TPropClassNames,
  TPropChildren,
  TPropImgWidth,
  TPropImgHeight,
  TPropImgSrc,
  TPropImgAlt,
  TPropImgAltRequired,
  TPropTitle,
  TPropImgPriority,
  TPropImgUnoptimized
} from '@/types/index'
import cn from 'classnames'
import { nextexport, ui } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TImageContainerProps = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight &
  TPropImgSrc &
  TPropImgAltRequired &
  TPropTitle &
  TPropImgPriority &
  TPropImgUnoptimized

const ImageContainer: FC<TImageContainerProps> = ({
  classNames,
  src,
  alt,
  title,
  width,
  height,
  priority = false,
  unoptimized = false
}) => {
  return (
    <span
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      title={title}>
      <Image
        src={src}
        alt={alt}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        className={stls.img}
        placeholder='blur'
        {...(typeof src === 'string' ? { blurDataURL: ui.base64pixel } : {})}
        priority={priority}
        unoptimized={nextexport || unoptimized}
      />
    </span>
  )
}

export default ImageContainer
