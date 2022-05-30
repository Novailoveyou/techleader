import { NextRouter, Router, useRouter } from 'next/router'
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

type TRouteToProps = {
  navScrollDir: string
  router: NextRouter
  route: string | Url
  setState: (state: boolean) => void
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

  const [isThrottling, setIsThrottling] = useState(false)

  useEffect(() => {
    const routeTo = ({
      navScrollDir,
      router,
      route,
      setState
    }: TRouteToProps) => {
      localStorage.setItem('navScrollDir', navScrollDir)
      router.push(route)
      setState(true)
      return
    }

    const handleWheel = (e: any) => {
      console.log(e)
      // TODO: figure out better types

      setIsThrottling(true)

      setTimeout(() => {
        setIsThrottling(false)
      }, 0)

      if (!isThrottling) {
        // scroll bottom
        const wheelDelta = e.wheelDelta
        if (
          window.innerHeight + window.pageYOffset >=
            document.body.offsetHeight &&
          toRoute &&
          !fromRouterHasTriggered &&
          wheelDelta < 0
        ) {
          if (
            (!curListItemIdx && curListItemIdx !== 0) ||
            (!listLength && listLength !== 0)
          ) {
            routeTo({
              navScrollDir: 'bottom',
              router,
              route: toRoute,
              setState: setToRouterHasTriggered
            })
            return
          }

          if (Number(curListItemIdx) === Number(listLength) - 1) {
            routeTo({
              navScrollDir: 'bottom',
              router,
              route: toRoute,
              setState: setToRouterHasTriggered
            })
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
          wheelDelta > 0
        ) {
          if (
            (!curListItemIdx && curListItemIdx !== 0) ||
            (!listLength && listLength !== 0)
          ) {
            routeTo({
              navScrollDir: 'top',
              router,
              route: fromRoute,
              setState: setFromRouterHasTriggered
            })
            return
          }

          if (Number(curListItemIdx) === 0) {
            routeTo({
              navScrollDir: 'top',
              router,
              route: fromRoute,
              setState: setFromRouterHasTriggered
            })
            return
          } else {
            setCurListItemIdx && setCurListItemIdx(Number(curListItemIdx) - 1)
            return
          }
        }
      }

      return
    }
    window.addEventListener('wheel', handleWheel)
    // window.addEventListener('touchmove', handleWheel)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      // window.removeEventListener('touchmove', handleWheel)
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
    listLength,
    isThrottling,
    setIsThrottling
  ])

  return null
}

export default useScrollNavigation
