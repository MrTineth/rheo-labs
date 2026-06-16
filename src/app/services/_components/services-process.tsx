'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import ServicesSectionHeader from './services-section-header'

const STEPS = [
  {
    step: '01',
    title: 'Discovery',
    color: '#3397FF',
    description:
      'We learn about your business, audience, competitors, and goals to define a clear project direction.',
  },
  {
    step: '02',
    title: 'Strategy',
    color: '#5cb460',
    description:
      'We create a tailored roadmap covering scope, timelines, technology, and success metrics.',
  },
  {
    step: '03',
    title: 'Execution',
    color: '#ff9e1d',
    description:
      'Our team designs, develops, and launches your solution with regular updates and collaborative reviews.',
  },
  {
    step: '04',
    title: 'Growth',
    color: '#ff3700',
    description:
      'We monitor performance, refine campaigns, and optimize continuously to maximize long-term results.',
  },
]

const ServicesProcess = () => {
  const { palette } = useTheme()

  return (
    <Box
      component='section'
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -120,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(51,151,255,0.12) 0%, transparent 70%)',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -60,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,158,29,0.08) 0%, transparent 70%)',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <ServicesSectionHeader
          label='Our Process'
          title='A proven approach from idea to impact'
          description='Every project follows a structured workflow designed to reduce risk, improve communication, and deliver outcomes you can measure.'
        />

        <Grid container spacing={3} sx={{ position: 'relative' }}>
          <Box
            aria-hidden
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: 72,
              left: '12.5%',
              right: '12.5%',
              height: 2,
              borderRadius: 1,
              background:
                'linear-gradient(90deg, #3397FF, #5cb460, #ff9e1d, #ff3700)',
              opacity: 0.18,
              zIndex: 0,
            }}
          />

          {STEPS.map((item, index) => (
            <Grid key={item.step} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: '100%',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Box
                  className='process-card'
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 4 },
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: 'background.paper',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    boxShadow:
                      palette.mode === 'dark'
                        ? 'none'
                        : '0 10px 36px rgba(15, 23, 42, 0.06)',
                    transition: (theme) =>
                      theme.transitions.create(
                        ['box-shadow', 'transform', 'border-color'],
                        { duration: 350 }
                      ),
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.35s ease',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: -40,
                      right: -40,
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${item.color}18 0%, transparent 70%)`,
                      transition: 'opacity 0.35s ease',
                      opacity: 0.6,
                    },
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      borderColor: `${item.color}50`,
                      boxShadow: `0 24px 48px ${item.color}22`,
                      '&::before': { transform: 'scaleX(1)' },
                      '&::after': { opacity: 1 },
                      '& .process-step-badge': {
                        transform: 'scale(1.06)',
                      },
                      '& .process-step-ring': {
                        opacity: 1,
                        transform: 'scale(1) rotate(90deg)',
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 64,
                        height: 64,
                        mb: 3,
                      }}
                    >
                      <Box
                        className='process-step-ring'
                        sx={{
                          position: 'absolute',
                          inset: -10,
                          borderRadius: '50%',
                          border: `2px dotted ${item.color}`,
                          opacity: 0,
                          transform: 'scale(0.75) rotate(0deg)',
                          transition:
                            'opacity 0.35s ease, transform 0.45s ease',
                        }}
                      />
                      <Box
                        className='process-step-badge'
                        sx={{
                          position: 'relative',
                          zIndex: 1,
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(145deg, ${item.color} 0%, ${item.color}cc 100%)`,
                          color: '#fff',
                          boxShadow: 'none',
                          transition: 'transform 0.35s ease',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: 0.8,
                            textTransform: 'uppercase',
                            opacity: 0.9,
                            lineHeight: 1,
                          }}
                        >
                          Step
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: 18,
                            lineHeight: 1.2,
                          }}
                        >
                          {item.step}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      component='h3'
                      sx={{
                        mb: 1.5,
                        fontWeight: 800,
                        fontSize: { xs: 19, md: 21 },
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: 15,
                        lineHeight: 1.8,
                      }}
                    >
                      {item.description}
                    </Typography>

                    {index < STEPS.length - 1 && (
                      <Box
                        aria-hidden
                        sx={{
                          display: { xs: 'none', md: 'block' },
                          position: 'absolute',
                          top: 32,
                          right: -18,
                          width: 36,
                          height: 2,
                          background: `linear-gradient(90deg, ${item.color}60, transparent)`,
                          zIndex: 2,
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ServicesProcess
