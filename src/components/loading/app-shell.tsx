'use client'

import React, { FC, ReactNode, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import AppBar from '@/components/appbar/app-bar'
import Footer from '@/components/footer/footer'
import LoadingScreen from './loading-screen'
import NavigationProgress from './navigation-progress'

const MIN_DISPLAY_MS = 800

const removeInitialLoader = () => {
  document.getElementById('initial-loader')?.remove()
}

interface Props {
  children: ReactNode
}

const AppShell: FC<Props> = ({ children }) => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    removeInitialLoader()

    let timeoutId: ReturnType<typeof setTimeout>
    const startedAt = Date.now()

    const finishLoading = () => {
      const elapsed = Date.now() - startedAt
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)

      timeoutId = setTimeout(() => {
        setIsReady(true)
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
    <>
      <AnimatePresence mode='wait'>
        {!isReady && <LoadingScreen key='website-loader' fullScreen />}
      </AnimatePresence>
      {isReady && (
        <>
          <NavigationProgress />
          <AppBar />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}

export default AppShell
