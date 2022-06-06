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
      // TODO: figure out better types

      console.log(e)

      const isScrolling = setTimeout(() => {
        console.log('scrolling has stopped')
      }, 66)

      window.clearTimeout(isScrolling)

      const wheelDelta = e.wheelDelta
      const menuIsOpen =
        sessionStorage.getItem('menuIsOpen') === 'true' ? true : false

      const scrollBottom =
        (window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight &&
          toRoute &&
          !menuIsOpen &&
          !fromRouterHasTriggered &&
          ((wheelDelta && wheelDelta < 0) ||
            e.keyCode === 40 ||
            e.which === 40 ||
            e.keyCode === 39 ||
            e.which === 39)) ||
        (toRoute &&
          !fromRouterHasTriggered &&
          (e.keyCode === 39 || e.which === 39))

      const scrollTop =
        (window.pageYOffset === 0 &&
          fromRoute &&
          !menuIsOpen &&
          !toRouterHasTriggered &&
          ((wheelDelta && wheelDelta > 0) ||
            e.keyCode === 38 ||
            e.which === 38 ||
            e.keyCode === 37 ||
            e.which === 37)) ||
        (fromRoute &&
          !toRouterHasTriggered &&
          (e.keyCode === 37 || e.which === 37))

      const isNotListItem =
        (!curListItemIdx && curListItemIdx !== 0) ||
        (!listLength && listLength !== 0)

      const isEndOfListItems = Number(curListItemIdx) === Number(listLength) - 1

      const isBegginingOfListItems = Number(curListItemIdx) === 0

      if (scrollBottom) {
        if (isNotListItem) {
          routeTo({
            navScrollDir: 'bottom',
            router,
            route: toRoute,
            setState: setToRouterHasTriggered
          })
        }

        if (isEndOfListItems) {
          routeTo({
            navScrollDir: 'bottom',
            router,
            route: toRoute,
            setState: setToRouterHasTriggered
          })
        } else {
          setCurListItemIdx && setCurListItemIdx(Number(curListItemIdx) + 1)
        }
      }

      if (scrollTop) {
        if (isNotListItem) {
          routeTo({
            navScrollDir: 'top',
            router,
            route: fromRoute,
            setState: setFromRouterHasTriggered
          })
        }

        if (isBegginingOfListItems) {
          routeTo({
            navScrollDir: 'top',
            router,
            route: fromRoute,
            setState: setFromRouterHasTriggered
          })
        } else {
          setCurListItemIdx && setCurListItemIdx(Number(curListItemIdx) - 1)
        }
      }

      // window.removeEventListener('wheel', handleWheel)
      // setTimeout(() => {
      //   window.addEventListener('wheel', handleWheel)
      // }, 2000)
      return
    }
    window.addEventListener('wheel', handleWheel)
    window.addEventListener('keyup', handleWheel)

    const test = (e: any) => {
      console.log(e)
    }

    window.addEventListener('touchend', test)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keyup', handleWheel)
      window.removeEventListener('touchend', test)
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
