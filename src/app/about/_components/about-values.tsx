'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'

const VALUES = [
  {
    title: 'Strategy First',
    color: '#3397FF',
    description:
      'Every project begins with clear goals, audience insight, and a roadmap—so creative work always serves business outcomes.',
  },
  {
    title: 'Design with Purpose',
    color: '#ff9e1d',
    description:
      'We craft interfaces and brand experiences that are intuitive, accessible, and built to convert—not just look good in a portfolio.',
  },
  {
    title: 'Engineering Excellence',
    color: '#5cb460',
    description:
      'Clean, scalable code and modern tech stacks ensure your product is fast, secure, and ready to grow with your business.',
  },
  {
    title: 'Transparent Partnership',
    color: '#ff3700',
    description:
      'Regular updates, honest timelines, and open communication—you always know where your project stands and what comes next.',
  },
  {
    title: 'Data-Driven Growth',
    color: '#9b59b6',
    description:
      'We track what matters—traffic quality, conversions, retention—and use real data to refine campaigns and products over time.',
  },
  {
    title: 'Long-Term Support',
    color: '#00a8cc',
    description:
      'Launch is just the beginning. We stay involved with maintenance, optimization, and ongoing improvements as your needs evolve.',
  },
]

const AboutValues = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='about-values'
      component='section'
      sx={{
        py: { xs: 8, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0f1428 0%, #151733 100%)'
            : 'linear-gradient(180deg, #f5f8ff 0%, #eef4ff 100%)',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -100,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(51,151,255,0.1) 0%, transparent 70%)',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              mb: 2,
              px: 1.8,
              py: 0.6,
              borderRadius: 10,
              backgroundColor: 'primary.light',
              color: 'primary.main',
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
              Our Values
            </Typography>
          </Box>
          <Typography
            component='h2'
            sx={{
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: 28, md: 38 },
              lineHeight: 1.3,
            }}
          >
            What guides everything we create
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: 15, md: 17 },
              lineHeight: 1.8,
              maxWidth: 640,
              mx: 'auto',
            }}
          >
            These principles shape how we think, build, and collaborate with
            every client—from the first discovery call to years after launch.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {VALUES.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                sx={{ height: '100%' }}
              >
                <Box
                  sx={{
                    height: '100%',
                    p: 3.5,
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: 'background.paper',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    boxShadow:
                      palette.mode === 'dark'
                        ? 'none'
                        : '0 8px 30px rgba(15, 23, 42, 0.06)',
                    transition: (theme) =>
                      theme.transitions.create(
                        ['transform', 'box-shadow', 'border-color'],
                        { duration: 300 }
                      ),
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: 4,
                      background: item.color,
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: `${item.color}60`,
                      boxShadow: `0 20px 40px ${item.color}18`,
                      '&::before': { transform: 'scaleX(1)' },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      mb: 2,
                      borderRadius: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: 14,
                      color: item.color,
                      backgroundColor: `${item.color}18`,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Box>
                  <Typography
                    component='h3'
                    sx={{ mb: 1.5, fontWeight: 700, fontSize: 18 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: 14,
                      lineHeight: 1.75,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutValues
