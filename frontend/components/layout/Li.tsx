import stls from '@/styles/components/layout/Li.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { getClassNames } from '@/helpers/index'

type TLiProps = TPropClassNames &
  TPropChildren & {
    LiGeneralXScrollable?: boolean
  }

const Li: FC<TLiProps> = ({ classNames, children, LiGeneralXScrollable }) => {
  const container =
    cn(stls.container, getClassNames({ classNames })) || undefined

  return (
    <>
      {LiGeneralXScrollable ? (
        <motion.li
          initial='initial'
          animate='animate'
          exit={'exit'}
          variants={{
            initial: {
              opacity: 0
              // scale: 0.8
            },
            animate: {
              opacity: 1
              // scale: 1
            },
            exit: {
              opacity: 0
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
