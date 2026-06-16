'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/core'
import { useTheme } from '@mui/material/styles'

const STATS = [
  {
    value: '6+',
    label: 'Years in business',
    detail: 'Delivering digital solutions since 2019',
    image: '/images/medal.png',
  },
  {
    value: '150+',
    label: 'Clients served',
    detail: 'Across 12 countries and 8 industries',
    image: '/images/smile.png',
  },
  {
    value: '480+',
    label: 'Projects delivered',
    detail: 'Websites, apps, brands, and campaigns',
    image: '/images/success.png',
  },
]

const AboutStats = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='about-stats'
      component='section'
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={6} alignItems='center'>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle>By the Numbers</SectionTitle>
              <Typography
                component='h2'
                sx={{
                  fontSize: { xs: 24, md: 30 },
                  mb: 2,
                  fontWeight: 800,
                  lineHeight: 1.35,
                }}
              >
                Results that reflect long-term partnerships
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 15, md: 16 },
                  lineHeight: 1.8,
                }}
              >
                We measure success by the impact we create for our clients—
                stronger brands, faster products, and campaigns that convert.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2.5}>
              {STATS.map((item, index) => (
                <Grid key={item.label} size={{ xs: 12, sm: 4 }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    sx={{ height: '100%' }}
                  >
                    <Box
                      sx={{
                        height: '100%',
                        p: { xs: 3, md: 3.5 },
                        borderRadius: 4,
                        backgroundColor:
                          palette.mode === 'dark' ? '#090e22' : '#D1E7FE',
                        boxShadow: (theme) =>
                          palette.mode === 'dark' ? 'none' : theme.shadows[2],
                        border: (theme) =>
                          palette.mode === 'dark'
                            ? `1px solid ${theme.palette.divider}`
                            : 'none',
                        transition: (theme) =>
                          theme.transitions.create(
                            ['background-color', 'transform', 'color'],
                            { duration: 280 }
                          ),
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          color: '#fbfbfb',
                          backgroundColor:
                            palette.mode === 'dark' ? '#000' : 'primary.main',
                          '& .stat-detail': {
                            color: 'rgba(255,255,255,0.82)',
                          },
                        },
                      }}
                    >
                      <Typography
                        sx={{ fontWeight: 800, fontSize: 36, mb: 2 }}
                      >
                        {item.value}
                      </Typography>
                      <Box sx={{ width: 56, height: 56, mb: 2 }}>
                        <Image
                          src={item.image}
                          width={56}
                          height={56}
                          alt={item.label}
                        />
                      </Box>
                      <Divider sx={{ width: 36, mb: 2 }} />
                      <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                        {item.label}
                      </Typography>
                      <Typography
                        className='stat-detail'
                        sx={{
                          fontSize: 13,
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          transition: 'color 0.28s ease',
                        }}
                      >
                        {item.detail}
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

export default AboutStats
