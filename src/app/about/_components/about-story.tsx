'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/core'
import { useTheme } from '@mui/material/styles'
import { AppConfig } from '@/configs'

const EXPERTISE = [
  {
    title: 'Digital Marketing',
    image: '/icons/content-strategy.png',
  },
  {
    title: 'UI/UX Design',
    image: '/icons/pantone.png',
  },
  {
    title: 'Web Development',
    image: '/icons/mobile-app.png',
  },
  {
    title: 'AI & Automation',
    image: '/icons/ai.png',
  },
]

const AboutStory = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='about-story'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 8, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems='center'>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle>Our Story</SectionTitle>
              <Typography
                component='h2'
                variant='h1'
                sx={{ mb: 3, fontWeight: 800, fontSize: { xs: 28, md: 38 } }}
              >
                Building digital products that move businesses forward
              </Typography>

              <Typography
                sx={{
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: { xs: 18, md: 22 },
                  mb: 2,
                  lineHeight: 1.5,
                }}
              >
                {AppConfig.appName} is a software company helping businesses
                design, build, and ship products that perform.
              </Typography>

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 15, md: 17 },
                  mb: 2.5,
                  lineHeight: 1.8,
                }}
              >
                Founded in 2026, we started with a simple belief: great software
                should be strategic, reliable, and scalable. Today we partner
                with startups and established companies across retail,
                healthcare, fintech, and SaaS - delivering web apps, mobile
                products, and platforms that drive real growth.
              </Typography>

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 15, md: 17 },
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                Our team brings together strategists, designers, developers, and
                product engineers who work as one unit-so every project stays
                aligned from the first workshop to launch day and beyond.
              </Typography>

              <Grid container spacing={2}>
                {EXPERTISE.map((item) => (
                  <Grid key={item.title} size={{ xs: 6, sm: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        textAlign: { xs: 'left', sm: 'center' },
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          mb: 1.2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: (theme) =>
                            theme.transitions.create('transform', {
                              duration: 250,
                            }),
                          '&:hover': { transform: 'scale(1.08)' },
                          '& img': {
                            width: 'auto',
                            height: 44,
                            maxWidth: '100%',
                          },
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={52}
                          height={52}
                        />
                      </Box>
                      <Typography
                        sx={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              sx={{
                position: 'relative',
                minHeight: { xs: 320, md: 420 },
                overflowX: { xs: 'hidden', md: 'unset' },
              }}
            >
              <Box
                sx={{ position: 'absolute', top: -80, right: 80, opacity: 0.6 }}
              >
                <svg
                  width='400'
                  height='400'
                  viewBox='0 0 1358 1089'
                  fill='none'
                >
                  <defs>
                    <linearGradient
                      id='about_blob'
                      x1='0%'
                      x2='86.603%'
                      y1='50%'
                      y2='0%'
                    >
                      <stop
                        offset='0%'
                        stopColor={
                          palette.mode === 'dark'
                            ? '#171717'
                            : 'rgb(252,253,253)'
                        }
                      />
                      <stop
                        offset='99%'
                        stopColor={
                          palette.mode === 'dark'
                            ? '#171717'
                            : 'rgb(232,243,255)'
                        }
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d='M1357.57 464.94C1357.57 605.537 1180.32 1063.16 848.987 1088.34C505.565 1088.34 591.877 719.737 426.004 719.737C311.195 719.737 0 831.507 0 525.037C0 218.566 368.288 0.336304 674.758 0.336304C981.229 0.336304 1357.57 158.47 1357.57 464.94Z'
                    fill='url(#about_blob)'
                  />
                </svg>
              </Box>

              <Box
                sx={{
                  top: 0,
                  right: 0,
                  position: 'absolute',
                  borderRadius: 3,
                  overflow: 'hidden',
                  width: { xs: '75%', sm: 280 },
                  boxShadow: '0 20px 50px rgba(51, 151, 255, 0.18)',
                }}
              >
                <Image
                  src='/images/about-1.jpg'
                  width={350}
                  height={350}
                  quality={95}
                  alt='Team collaborating on a digital project'
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>

              <Box
                sx={{
                  top: 100,
                  right: { xs: 0, sm: 120 },
                  position: 'absolute',
                  borderRadius: 3,
                  overflow: 'hidden',
                  width: { xs: '65%', sm: 240 },
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
                }}
              >
                <Image
                  src='/images/about-2.jpg'
                  width={330}
                  height={330}
                  quality={95}
                  alt='Creative workspace and design review'
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  px: 2.5,
                  py: 2,
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <Typography
                  sx={{ fontWeight: 800, fontSize: 26, color: 'primary.main' }}
                >
                  10+
                </Typography>
                <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
                  Specialists on our team
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutStory
