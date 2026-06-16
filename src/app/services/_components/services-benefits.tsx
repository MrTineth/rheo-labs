'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import ServicesSectionHeader from './services-section-header'

const BENEFITS = [
  {
    title: 'Dedicated Expert Teams',
    color: '#3397FF',
    description:
      'Work with specialists across strategy, design, development, and marketing—aligned under one accountable team.',
  },
  {
    title: 'Transparent Delivery',
    color: '#5cb460',
    description:
      'Clear milestones, progress reporting, and open communication so you always know where your project stands.',
  },
  {
    title: 'Performance Focused',
    color: '#ff9e1d',
    description:
      'We prioritize metrics that matter: traffic quality, conversion rates, load speed, retention, and revenue growth.',
  },
  {
    title: 'Scalable Solutions',
    color: '#9b59b6',
    description:
      'Our builds are designed to evolve with your business, making future updates and expansion straightforward.',
  },
  {
    title: 'Brand-First Thinking',
    color: '#ff3700',
    description:
      'Every deliverable reflects your positioning, voice, and visual identity for a consistent customer experience.',
  },
  {
    title: 'Ongoing Partnership',
    color: '#00a8cc',
    description:
      'Beyond launch, we support optimization, maintenance, and campaign improvements to sustain momentum.',
  },
]

const ServicesBenefits = () => {
  return (
    <Box
      component='section'
      sx={{
        py: { xs: 8, md: 14 },
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0f1428 0%, #151733 100%)'
            : 'linear-gradient(180deg, #f5f8ff 0%, #eef4ff 100%)',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={6} alignItems='center'>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ServicesSectionHeader
                label='Why Choose Us'
                title='More than delivery—we build lasting value'
                description='Clients choose us for strategic thinking, technical quality, and a partnership mindset that keeps projects moving forward with confidence.'
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2.5}>
              {BENEFITS.map((item, index) => (
                <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    sx={{ height: '100%' }}
                  >
                    <Box
                      sx={{
                        height: '100%',
                        p: 3,
                        borderRadius: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'background.paper',
                        boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)',
                        transition: (theme) =>
                          theme.transitions.create(['transform', 'box-shadow'], {
                            duration: 300,
                          }),
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 16px 40px rgba(51, 151, 255, 0.14)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: 4,
                          height: '100%',
                          background: item.color,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          mb: 2,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: `${item.color}18`,
                          color: item.color,
                          fontWeight: 800,
                          fontSize: 14,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </Box>
                      <Typography
                        component='h3'
                        sx={{ mb: 1, fontWeight: 700, fontSize: 17 }}
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ServicesBenefits
