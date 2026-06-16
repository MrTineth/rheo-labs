'use client'

import React, { FC, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './loading-screen'

const MIN_DISPLAY_MS = 800

const WebsiteLoader: FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    const startedAt = Date.now()

    const finishLoading = () => {
      const elapsed = Date.now() - startedAt
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)

      timeoutId = setTimeout(() => {
        setIsLoading(false)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading)
    }

    return () => {
      window.removeEventListener('load', finishLoading)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && <LoadingScreen key='website-loader' fullScreen />}
    </AnimatePresence>
  )
}

export default WebsiteLoader
