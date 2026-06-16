'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import AppIcon from '@/assets/icon.png'

interface Props {
  fullScreen?: boolean
}

const LoadingScreen: FC<Props> = ({ fullScreen = false }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: fullScreen ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: fullScreen ? 0.25 : 0.35, ease: 'easeInOut' }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...(fullScreen
          ? {
              position: 'fixed',
              inset: 0,
              zIndex: 1200,
              backgroundColor: 'background.default',
            }
          : {
              minHeight: '70vh',
              width: '100%',
            }),
      }}
    >
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{ width: 48, height: 'auto' }}
      >
        <Box component='img' src={AppIcon.src} alt='' />
      </Box>
    </Box>
  )
}

export default LoadingScreen
