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
  TPropTitle,
  TPropImgPriority
} from '@/types/index'
import cn from 'classnames'
import { nextexport, base64pixel } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import TPropImgUnoptimized from '@/types/props/TPropImgUnoptimized'

type TImageContainerProps = TPropClassNames &
  TPropImgWidth &
  TPropImgHeight &
  TPropImgSrc &
  TPropImgAlt &
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
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }
      title={title}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={stls.img}
        placeholder='blur'
        blurDataURL={base64pixel}
        priority={priority}
        unoptimized={nextexport || unoptimized}
      />
    </span>
  )
}

export default ImageContainer
