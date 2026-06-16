'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import SectionTitle from './section-title'
import PageBannerPattern from './page-banner-pattern'

interface Props {
  label: string
  title: string
  description?: string
}

const PageBanner: FC<Props> = ({ label, title, description }) => {
  const { palette } = useTheme()

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 14, md: 16 },
        pb: { xs: 6, md: 8 },
        backgroundColor: palette.mode === 'dark' ? '#1b2b3c' : '#e8f3ff',
      }}
    >
      <PageBannerPattern />
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle>{label}</SectionTitle>
        <Typography
          component='h1'
          variant='h1'
          sx={{
            mb: description ? 2 : 0,
            fontWeight: 800,
            fontSize: { xs: 32, md: 44, lg: 52 },
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: 16, md: 18 },
              maxWidth: 720,
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        )}
      </Container>
    </Box>
  )
}

export default PageBanner
