import stls from '@/styles/components/layout/Li.module.sass'
import { FC, useEffect, useState } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { getClassNames } from '@/helpers/index'

type TLiProps = TPropClassNames &
  TPropChildren & {
    LiGeneralXScrollable?: boolean
    isShown?: boolean
  }

const Li: FC<TLiProps> = ({
  classNames,
  children,
  LiGeneralXScrollable,
  isShown
}) => {
  const container =
    cn(stls.container, getClassNames({ classNames })) || undefined

  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const scrollTop = isBrowser && localStorage.getItem('scrollDir') === 'top'

  return (
    <>
      {LiGeneralXScrollable ? (
        <motion.li
          animate={isShown ? 'isShown' : 'isHidden'}
          transition={{ duration: 0.5 }}
          variants={{
            isShown: {
              opacity: 1,
              y: 0
            },
            isHidden: {
              opacity: 0,
              y: scrollTop ? 100 : -100
            }
          }}
          className={container}>
          {children}
        </motion.li>
      ) : (
        <li className={container}>{children}</li>
      )}
    </>
  )
}

export default Li
