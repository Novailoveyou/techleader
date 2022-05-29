import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Url } from 'url'
import { routes, colors, selectors } from '@/config/index'

type TUseScrollNavigation = {
  fromRoute?: string | Url
  toRoute?: string | Url
}

const useScrollNavigation = ({ fromRoute, toRoute }: TUseScrollNavigation) => {
  const router = useRouter()
  const [toRouterHasTriggered, setToRouterHasTriggered] = useState(false)
  const [fromRouterHasTriggered, setFromRouterHasTriggered] = useState(false)

  useEffect(() => {
    const handleWheel = (e: any) => {
      // TODO: figure out better types
      // console.log(e)
      if (
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
        toRoute &&
        !fromRouterHasTriggered &&
        e.wheelDelta < 0
      ) {
        router.push(toRoute)
        setToRouterHasTriggered(true)
        return
      }
      if (
        window.pageYOffset === 0 &&
        fromRoute &&
        !toRouterHasTriggered &&
        e.wheelDelta > 0
      ) {
        router.push(fromRoute)
        setFromRouterHasTriggered(true)
        return
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
    setFromRouterHasTriggered
  ])

  return null
}

export default useScrollNavigation
