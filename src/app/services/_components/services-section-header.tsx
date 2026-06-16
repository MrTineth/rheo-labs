'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
interface Props {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inverted?: boolean
}

const ServicesSectionHeader: FC<Props> = ({
  label,
  title,
  description,
  align = 'left',
  inverted = false,
}) => {
  const isCenter = align === 'center'

  return (
    <Box
      sx={{
        mb: { xs: 5, md: 7 },
        maxWidth: isCenter ? 720 : 640,
        mx: isCenter ? 'auto' : 0,
        textAlign: align,
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          mb: 2,
          px: 1.8,
          py: 0.6,
          borderRadius: 10,
          backgroundColor: inverted
            ? 'rgba(255,255,255,0.12)'
            : 'primary.light',
          color: inverted ? '#fbfbfb' : 'primary.main',
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.2,
            textTransform: 'uppercase',
          }}
        >
          {label}
        </Typography>
      </Box>
      <Typography
        component='h2'
        variant='h1'
        sx={{
          mb: description ? 2 : 0,
          fontWeight: 800,
          fontSize: { xs: 28, md: 38 },
          lineHeight: 1.3,
          color: inverted ? '#fbfbfb' : 'text.primary',
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          sx={{
            color: inverted ? 'rgba(255,255,255,0.82)' : 'text.secondary',
            fontSize: { xs: 15, md: 17 },
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  )
}

export default ServicesSectionHeader
