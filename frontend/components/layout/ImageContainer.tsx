import stls from '@/styles/components/layout/ImageContainer.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TImageContainerProps = TPropClassNames & TPropChildren

const ImageContainer: FC<TImageContainerProps> = ({ classNames, children }) => {
  return (
    <span
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </span>
  )
}

export default ImageContainer
