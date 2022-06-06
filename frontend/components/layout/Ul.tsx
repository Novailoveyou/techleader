import stls from '@/styles/components/layout/Ul.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { getClassNames } from '@/helpers/index'

type TUlProps = TPropClassNames &
  TPropChildren & {
    UlGeneralXScrollable?: boolean
  }

const Ul: FC<TUlProps> = ({ classNames, children, UlGeneralXScrollable }) => {
  const container =
    cn(stls.container, getClassNames({ classNames })) || undefined

  return (
    <>
      {UlGeneralXScrollable ? (
        <motion.ul
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
        </motion.ul>
      ) : (
        <ul className={container}>{children}</ul>
      )}
    </>
  )
}

export default Ul
