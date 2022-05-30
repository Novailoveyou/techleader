import { useEffect, useState } from 'react'

const useNavScrollDir = () => {
  const [navScrollDir, setNavScrollDir] = useState<string | null>(null)

  useEffect(() => {
    setNavScrollDir(localStorage.getItem('navScrollDir'))
  }, [navScrollDir, setNavScrollDir])

  return navScrollDir
}

export default useNavScrollDir
