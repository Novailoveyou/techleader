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

  const [windowParams, setWindowParams] = useState({
    innerHeight: 0,
    pageYOffest: 0,
    bodyOffsetHeight: 0
  })

  const [touchParams, setTouchParams] = useState({
    touchStartX: 0,
    touchStartY: 0,
    touchEndX: 0,
    touchEndY: 0
  })

  // handle resize
  useEffect(() => {
    const handleResize = () => {
      setWindowParams({
        innerHeight: Math.ceil(window.innerHeight),
        pageYOffest: Math.ceil(window.pageYOffset),
        bodyOffsetHeight: Math.ceil(document.body.offsetHeight)
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWindowParams])

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setWindowParams({
        innerHeight: Math.ceil(window.innerHeight),
        pageYOffest: Math.ceil(window.pageYOffset),
        bodyOffsetHeight: Math.ceil(document.body.offsetHeight)
      })
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setWindowParams])

  // handle touch
  useEffect(() => {
    const handleTouchStart = (e: any) => {
      // TODO: improve types

      if (e.type === 'touchstart' && e.touches?.length === 1) {
        setTouchParams({
          ...touchParams,
          touchStartX: Math.round(e.touches?.[0]?.screenX),
          touchStartY: Math.round(e.touches?.[0]?.screenY)
        })
      }
    }
    window.addEventListener('touchstart', handleTouchStart)

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
    }
  }, [touchParams])

  // handle nav
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

    const handleNav = (e: any) => {
      // TODO: figure out better types

      // console.log(windowParams)
      console.log(e)

      setWindowParams({
        innerHeight: Math.ceil(window.innerHeight),
        pageYOffest: Math.ceil(window.pageYOffset),
        bodyOffsetHeight: Math.ceil(document.body.offsetHeight)
      })

      // console.log(e)
      if (e.type === 'touchend' && e.changedTouches?.length === 1) {
        // console.log('touchend')
        // console.log(Math.round(e.changedTouches?.[0]?.screenX))
        setTouchParams({
          ...touchParams,
          touchEndX: Math.round(e.changedTouches?.[0]?.screenX),
          touchEndY: Math.round(e.changedTouches?.[0]?.screenY)
        })
        // console.log(touchParams)
      }

      // const isScrolling = setTimeout(() => {
      //   console.log('scrolling has stopped')
      // }, 66)

      // window.clearTimeout(isScrolling)

      // console.log(touchParams)

      const wheelDelta = e.wheelDelta
      const menuIsOpen =
        sessionStorage.getItem('menuIsOpen') === 'true' ? true : false

      const touchEndY = Math.round(e.changedTouches?.[0]?.screenY)
      const touchEndX = Math.round(e.changedTouches?.[0]?.screenX)

      // const swipedTop =
      //   e.type === 'touchend' &&
      //   e.changedTouches?.length === 1 &&
      //   touchEndY < touchParams.touchStartY

      // const swipedRight =
      //   e.type === 'touchend' &&
      //   e.changedTouches?.length === 1 &&
      //   touchEndX > touchParams.touchStartX

      // const swipedBottom =
      //   e.type === 'touchend' &&
      //   e.changedTouches?.length === 1 &&
      //   touchEndY > touchParams.touchStartY

      // const swipedLeft =
      //   e.type === 'touchend' &&
      //   e.changedTouches?.length === 1 &&
      //   touchEndX < touchParams.touchStartX
      //

      const swipedTop = e.type === 'swiped' && e.detail.dir === 'up'
      const swipedRight = e.type === 'swiped' && e.detail.dir === 'right'
      const swipedBottom = e.type === 'swiped' && e.detail.dir === 'down'
      const swipedLeft = e.type === 'swiped' && e.detail.dir === 'left'

      // swipedLeft && console.log('swipedLeft')
      // swipedRight && console.log('swipedRight')
      // swipedTop && console.log('swipedTop')
      // swipedBottom && console.log('swipedBottom')

      const scrollBottom =
        (!e.ctrlKey &&
          windowParams.innerHeight + windowParams.pageYOffest + 1 >=
            windowParams.bodyOffsetHeight &&
          toRoute &&
          !menuIsOpen &&
          !fromRouterHasTriggered &&
          ((wheelDelta && wheelDelta < 0) ||
            e.keyCode === 40 ||
            e.which === 40 ||
            e.keyCode === 39 ||
            e.which === 39 ||
            swipedTop)) ||
        (toRoute &&
          !fromRouterHasTriggered &&
          !menuIsOpen &&
          (e.keyCode === 39 || e.which === 39)) ||
        (toRoute && !fromRouterHasTriggered && !menuIsOpen && swipedLeft)

      const scrollTop =
        (!e.ctrlKey &&
          windowParams.pageYOffest - 1 <= 0 &&
          fromRoute &&
          !menuIsOpen &&
          !toRouterHasTriggered &&
          ((wheelDelta && wheelDelta > 0) ||
            e.keyCode === 38 ||
            e.which === 38 ||
            e.keyCode === 37 ||
            e.which === 37 ||
            swipedBottom)) ||
        (fromRoute &&
          !toRouterHasTriggered &&
          !menuIsOpen &&
          (e.keyCode === 37 || e.which === 37)) ||
        (fromRoute && !toRouterHasTriggered && !menuIsOpen && swipedRight)

      const isNotListItem =
        (!curListItemIdx && curListItemIdx !== 0) ||
        (!listLength && listLength !== 0)

      const isEndOfListItems = Number(curListItemIdx) === Number(listLength) - 1

      const isBegginingOfListItems = Number(curListItemIdx) === 0

      if (scrollBottom) {
        localStorage.setItem('scrollDir', 'bottom')
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
        localStorage.setItem('scrollDir', 'top')
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

    window.addEventListener('wheel', handleNav)
    window.addEventListener('keyup', handleNav)
    window.addEventListener('touchend', handleNav)
    window.addEventListener('swiped', handleNav)
    return () => {
      window.removeEventListener('wheel', handleNav)
      window.removeEventListener('keyup', handleNav)
      window.removeEventListener('touchend', handleNav)
      window.addEventListener('swiped', handleNav)
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
    setIsThrottling,
    windowParams,
    setWindowParams,
    touchParams,
    setTouchParams
  ])

  return null
}

export default useScrollNavigation
