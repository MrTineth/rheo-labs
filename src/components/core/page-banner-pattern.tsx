'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'

const PageBannerPattern: FC = () => {
  const { palette } = useTheme()
  const isDark = palette.mode === 'dark'
  const dotColor = isDark ? 'rgba(51, 151, 255, 0.14)' : 'rgba(51, 151, 255, 0.1)'

  return (
    <>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: isDark
            ? 'radial-gradient(ellipse 80% 60% at 85% 20%, rgba(51, 151, 255, 0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 10% 90%, rgba(51, 151, 255, 0.1) 0%, transparent 55%)'
            : 'radial-gradient(ellipse 80% 60% at 85% 20%, rgba(51, 151, 255, 0.14) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 10% 90%, rgba(51, 151, 255, 0.08) 0%, transparent 55%)',
        }}
      />

      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: { xs: 24, md: 32 },
          right: { xs: -8, md: 48 },
          opacity: isDark ? 0.35 : 0.45,
          pointerEvents: 'none',
        }}
      >
        <Image
          src='/images/circle-b.svg'
          width={72}
          height={72}
          alt=''
        />
      </Box>

      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: { xs: 16, md: 24 },
          left: { xs: 12, md: 64 },
          opacity: isDark ? 0.3 : 0.4,
          pointerEvents: 'none',
        }}
      >
        <Image
          src='/images/circle-a.svg'
          width={48}
          height={48}
          alt=''
        />
      </Box>

    </>
  )
}

export default PageBannerPattern
