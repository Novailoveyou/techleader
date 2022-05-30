import { useEffect, useState } from 'react'
import { useNavScrollDir } from '@/hooks/index'

type TUseSetCurListItemIdxProps = {
  listLength: number
  setCurListItemIdx: (idx: number) => void
}

const useSetCurListItemIdx = ({
  listLength,
  setCurListItemIdx
}: TUseSetCurListItemIdxProps) => {
  const navScrollDir = useNavScrollDir()

  useEffect(() => {
    navScrollDir === 'top' && setCurListItemIdx(listLength)
  }, [navScrollDir, listLength, setCurListItemIdx])
}

export default useSetCurListItemIdx
