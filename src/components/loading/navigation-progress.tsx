'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { motion, AnimatePresence } from 'framer-motion'

const NavigationProgress: FC = () => {
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setIsNavigating(true)

    const timeoutId = setTimeout(() => {
      setIsNavigating(false)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return (
    <AnimatePresence>
      {isNavigating && (
        <Box
          component={motion.div}
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
          }}
        >
          <LinearProgress color='primary' />
        </Box>
      )}
    </AnimatePresence>
  )
}

export default NavigationProgress
