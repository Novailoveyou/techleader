import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Url } from 'url'
import { routes, colors, selectors } from '@/config/index'

type TUseScrollNavigation = {
  fromRoute?: string | Url
  toRoute?: string | Url
  curListItemIdx?: number
  setCurListItemIdx?: (idx: number) => void
  listLength?: number
}

const useScrollNavigation = ({
  fromRoute,
  toRoute,
  curListItemIdx,
  setCurListItemIdx,
  listLength
}: TUseScrollNavigation) => {
  const router = useRouter()
  const [toRouterHasTriggered, setToRouterHasTriggered] = useState(false)
  const [fromRouterHasTriggered, setFromRouterHasTriggered] = useState(false)

  useEffect(() => {
    const handleWheel = (e: any) => {
      // TODO: figure out better types
      // scroll bottom
      if (
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
        toRoute &&
        !fromRouterHasTriggered &&
        e.wheelDelta < 0
      ) {
        if (
          (!curListItemIdx && curListItemIdx !== 0) ||
          (!listLength && listLength !== 0)
        ) {
          router.push(toRoute)
          setToRouterHasTriggered(true)
          return
        }

        if (Number(curListItemIdx) === Number(listLength) - 1) {
          router.push(toRoute)
          setToRouterHasTriggered(true)
          return
        } else {
          setCurListItemIdx && setCurListItemIdx(Number(curListItemIdx) + 1)
          return
        }
      }
      // scroll top
      if (
        window.pageYOffset === 0 &&
        fromRoute &&
        !toRouterHasTriggered &&
        e.wheelDelta > 0
      ) {
        if (
          (!curListItemIdx && curListItemIdx !== 0) ||
          (!listLength && listLength !== 0)
        ) {
          router.push(fromRoute)
          setFromRouterHasTriggered(true)
          return
        }

        if (Number(curListItemIdx) === 0) {
          router.push(fromRoute)
          setFromRouterHasTriggered(true)
          return
        } else {
          setCurListItemIdx && setCurListItemIdx(Number(curListItemIdx) - 1)
          return
        }
      }
      return
    }
    window.addEventListener('wheel', handleWheel)

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [
    router,
    fromRoute,
    toRoute,
    toRouterHasTriggered,
    setToRouterHasTriggered,
    fromRouterHasTriggered,
    setFromRouterHasTriggered,
    curListItemIdx,
    setCurListItemIdx,
    listLength
  ])

  return null
}

export default useScrollNavigation
