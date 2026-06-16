'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useMediaQuery, useTheme } from '@mui/material'
import ServicesSectionHeader from './services-section-header'

const STATS = [
  {
    value: '150+',
    description: 'Projects Delivered',
    image: '/images/success.png',
  },
  {
    value: '98%',
    description: 'Client Satisfaction',
    image: '/images/smile.png',
  },
  {
    value: '8+',
    description: 'Years of Experience',
    image: '/images/medal.png',
  },
]

const ServicesStats = () => {
  const { breakpoints, palette } = useTheme()
  const matchMobile = useMediaQuery(breakpoints.down('sm'))

  return (
    <Box
      component='section'
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={6} alignItems='center'>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ServicesSectionHeader
                label='Our Track Record'
                title='Results backed by experience'
                description='From startups to established enterprises, we have helped teams launch faster, market smarter, and scale digital operations with confidence.'
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={matchMobile ? 2 : 3}>
              {STATS.map((item, index) => (
                <Grid key={item.description} size={{ xs: 12, sm: 4 }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: { xs: 3, md: 3.5 },
                        borderRadius: 4,
                        position: 'relative',
                        overflow: 'hidden',
                        background:
                          palette.mode === 'dark'
                            ? 'linear-gradient(145deg, #090e22 0%, #151733 100%)'
                            : 'linear-gradient(145deg, #D1E7FE 0%, #e8f3ff 100%)',
                        boxShadow:
                          palette.mode === 'dark'
                            ? '0 12px 32px rgba(0,0,0,0.35)'
                            : '0 12px 32px rgba(51, 151, 255, 0.12)',
                        transition: (theme) =>
                          theme.transitions.create(
                            ['transform', 'background', 'color'],
                            { duration: 300 }
                          ),
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          background:
                            palette.mode === 'dark'
                              ? 'linear-gradient(145deg, #000 0%, #1a2744 100%)'
                              : 'linear-gradient(145deg, #3397FF 0%, #2575DB 100%)',
                          color: '#fbfbfb',
                          '& .stat-divider': {
                            borderColor: 'rgba(255,255,255,0.35)',
                          },
                        },
                      }}
                    >
                      <Typography
                        variant='h2'
                        sx={{ fontWeight: 800, fontSize: { xs: 32, md: 40 } }}
                      >
                        {item.value}
                      </Typography>
                      <Box sx={{ width: 64, my: 2 }}>
                        <Image
                          src={item.image}
                          width={72}
                          height={72}
                          alt={item.description}
                        />
                      </Box>
                      <Box
                        className='stat-divider'
                        sx={{
                          width: 40,
                          mb: 2,
                          borderBottom: (theme) =>
                            `2px solid ${theme.palette.divider}`,
                        }}
                      />
                      <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ServicesStats
