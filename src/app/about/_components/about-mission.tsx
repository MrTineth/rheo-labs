'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'

const PILLARS = [
  {
    label: 'Mission',
    color: '#3397FF',
    title: 'Empower businesses to thrive with better software',
    body: 'We help businesses of every size compete online with strategy, design, and technology that is practical, scalable, and built to deliver measurable results.',
  },
  {
    label: 'Vision',
    color: '#5cb460',
    title: 'Be the software partner clients trust for their most important work',
    body: 'We aim to set the standard for thoughtful digital partnerships—where creativity meets engineering, and every engagement leaves our clients stronger than when we started.',
  },
]

const WORKFLOW = [
  {
    step: '01',
    title: 'Listen & Discover',
    description:
      'We learn your business, users, competitors, and goals through workshops and research.',
  },
  {
    step: '02',
    title: 'Plan & Prototype',
    description:
      'We define scope, timelines, and success metrics—then validate ideas with wireframes and prototypes.',
  },
  {
    step: '03',
    title: 'Build & Launch',
    description:
      'Our team designs, develops, and deploys your solution with agile sprints and regular reviews.',
  },
  {
    step: '04',
    title: 'Measure & Improve',
    description:
      'Post-launch, we analyze performance, optimize campaigns, and iterate based on real user data.',
  },
]

const AboutMission = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='about-mission'
      component='section'
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                  Mission & Vision
                </Typography>
              </Box>

              {PILLARS.map((item, index) => (
                <Box
                  key={item.label}
                  sx={{
                    mb: index === 0 ? 4 : 0,
                    pl: 3,
                    borderLeft: `3px solid ${item.color}`,
                  }}
                >
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      color: item.color,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    component='h3'
                    sx={{
                      mb: 1.5,
                      fontWeight: 800,
                      fontSize: { xs: 20, md: 24 },
                      lineHeight: 1.35,
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
                    {item.body}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                background:
                  palette.mode === 'dark'
                    ? 'linear-gradient(160deg, #151733 0%, #0d1228 100%)'
                    : 'linear-gradient(160deg, #087ae7 0%, #0568c7 100%)',
                color: '#fbfbfb',
              }}
            >
              <Typography
                sx={{
                  mb: 1,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.2,
                  textTransform: 'uppercase',
                  opacity: 0.85,
                }}
              >
                How We Partner
              </Typography>
              <Typography
                component='h3'
                sx={{
                  mb: 3,
                  fontWeight: 800,
                  fontSize: { xs: 22, md: 26 },
                  lineHeight: 1.35,
                }}
              >
                A collaborative process from day one
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {WORKFLOW.map((item, index) => (
                  <Box
                    key={item.step}
                    component={motion.div}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      p: 2,
                      borderRadius: 3,
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(6px)',
                      transition: 'background-color 0.25s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.14)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: 13,
                        backgroundColor: 'rgba(255,255,255,0.15)',
                      }}
                    >
                      {item.step}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: 16 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                          lineHeight: 1.7,
                          color: 'rgba(255,255,255,0.82)',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutMission
