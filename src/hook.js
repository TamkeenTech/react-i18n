import { useState, useEffect, useCallback } from 'react'
import { langResource } from './lang'

export const useSyncLang = () => {
  useEffect(() => {
    langResource.addListener(update)
    return () => langResource.removeListener(update)
  }, [])
  const setValue = useState(0)[1]
  const update = useCallback(() => {
    setValue((v) => ~v)
  }, [])
  return update
}
