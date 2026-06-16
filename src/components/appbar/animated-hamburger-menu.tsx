'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { IconButton, useTheme } from '@mui/material'

interface Props {
  isOpen: boolean
  onToggle: () => void
}

const AnimatedHamburgerMenu: FC<Props> = ({ isOpen, onToggle }) => {
  const theme = useTheme()

  return (
    <IconButton
      onClick={onToggle}
        sx={{
          p: 0,
          width: 42,
          height: 42,
        }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <svg width='32' height='32' viewBox='0 0 32 32'>
          {/* Top line */}
          <motion.line
            x1='6'
            y1='10'
            x2='26'
            y2='10'
            stroke={theme.palette.primary.main}
            strokeWidth='2'
            strokeLinecap='round'
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          />

          {/* Middle line */}
          <motion.line
            x1='6'
            y1='16'
            x2='26'
            y2='16'
            stroke={theme.palette.primary.main}
            strokeWidth='2'
            strokeLinecap='round'
            animate={{
              opacity: isOpen ? 0 : 1,
              x: isOpen ? 10 : 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          />

          {/* Bottom line */}
          <motion.line
            x1='6'
            y1='22'
            x2='26'
            y2='22'
            stroke={theme.palette.primary.main}
            strokeWidth='2'
            strokeLinecap='round'
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </IconButton>
  )
}

export default AnimatedHamburgerMenu
