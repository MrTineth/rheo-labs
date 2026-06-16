'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { StyledButton } from '@/components/core'
import { services } from '@/constants/service'
import HomeSectionHeader from './home-section-header'

const FEATURED_SLUGS = ['dev', 'mobile-app', 'ai']

const FEATURED = FEATURED_SLUGS.map(
  (slug) => services.find((service) => service.slug === slug)!
)

const ACCENT_COLORS = ['#3397FF', '#5cb460', '#ff9e1d']

const HomeFeaturedServices = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='home-services'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background:
          palette.mode === 'dark'
            ? 'linear-gradient(160deg, #151733 0%, #0d1228 100%)'
            : 'linear-gradient(160deg, #087ae7 0%, #0568c7 100%)',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -80,
          left: -60,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: -100,
          right: -40,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(92,180,96,0.15) 0%, transparent 70%)',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <HomeSectionHeader
            label='What We Build'
            title='Software solutions for modern businesses'
            description='We design and engineer web apps, mobile products, and intelligent platforms-built for performance, security, and long-term scale.'
            inverted
          />
        </Box>

        <Grid container spacing={3}>
          {FEATURED.map((item, index) => (
            <Grid key={item.slug} size={{ xs: 12, md: 4 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ height: '100%' }}
              >
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 4 },
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: 'background.paper',
                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
                    transition: (theme) =>
                      theme.transitions.create(['transform', 'box-shadow'], {
                        duration: 350,
                      }),
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: ACCENT_COLORS[index],
                    },
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 28px 56px rgba(0, 0, 0, 0.18)',
                      '& .service-icon-wrap': {
                        transform: 'scale(1.08) rotate(-3deg)',
                      },
                    },
                  }}
                >
                  <Box
                    className='service-icon-wrap'
                    sx={{
                      width: 72,
                      height: 72,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: (theme) =>
                        theme.transitions.create('transform', {
                          duration: 300,
                        }),
                      '& img': {
                        height: 48,
                        width: 'auto',
                      },
                    }}
                  >
                    <Image
                      src={item.image as string}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                  </Box>
                  <Typography
                    component='h3'
                    sx={{
                      mb: 1.5,
                      fontWeight: 700,
                      fontSize: { xs: 20, md: 22 },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: 15,
                      lineHeight: 1.75,
                      mb: 3,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    component={Link}
                    href={`/services#${item.slug}`}
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: ACCENT_COLORS[index],
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      '&:hover': { gap: 1 },
                      transition: 'gap 0.2s ease',
                    }}
                  >
                    Learn more →
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          sx={{ textAlign: 'center', mt: 6 }}
        >
          <Link href='/services' passHref>
            <StyledButton variant='contained' color='light' size='large'>
              Explore All Services
            </StyledButton>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeFeaturedServices
