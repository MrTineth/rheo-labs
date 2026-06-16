'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import HomeSectionHeader from './home-section-header'

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, Bloom Retail',
    quote:
      'Rheo Labs rebuilt our inventory platform from the ground up. Deployment cycles dropped from weeks to days, and our team finally has a system they trust.',
    initials: 'SM',
    color: '#3397FF',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Founder, TechFlow',
    quote:
      'They shipped our MVP in eight weeks without cutting corners. Clean architecture, strong communication, and a product our users actually love.',
    initials: 'JC',
    color: '#5cb460',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP Engineering, Nova Health',
    quote:
      'Professional, responsive, and deeply technical. Rheo Labs feels like an extension of our engineering team—not just another vendor.',
    initials: 'ER',
    color: '#ff9e1d',
    rating: 5,
  },
]

const StarRating = ({ count }: { count: number }) => (
  <Box sx={{ display: 'flex', gap: 0.3, mb: 2 }}>
    {Array.from({ length: count }).map((_, i) => (
      <Typography
        key={i}
        component='span'
        sx={{ color: '#ff9e1d', fontSize: 18, lineHeight: 1 }}
      >
        ★
      </Typography>
    ))}
  </Box>
)

const HomeTestimonials = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='home-testimonials'
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
        <Box sx={{ textAlign: 'center' }}>
          <HomeSectionHeader
            label='Client Stories'
            title='Trusted by teams building ambitious products'
            description='Real outcomes from real engineering partnerships. Here is what our clients say about working with Rheo Labs.'
            align='center'
          />
        </Box>

        <Grid container spacing={3}>
          {TESTIMONIALS.map((item, index) => (
            <Grid key={item.name} size={{ xs: 12, md: 4 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                sx={{ height: '100%' }}
              >
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 4 },
                    borderRadius: 4,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    boxShadow:
                      palette.mode === 'dark'
                        ? '0 12px 40px rgba(0, 0, 0, 0.3)'
                        : '0 12px 40px rgba(15, 23, 42, 0.08)',
                    transition: (theme) =>
                      theme.transitions.create(
                        ['transform', 'box-shadow'],
                        { duration: 350 }
                      ),
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 24,
                      right: 28,
                      width: 40,
                      height: 32,
                      opacity: 0.12,
                      background: `linear-gradient(135deg, ${item.color}, transparent)`,
                      borderRadius: 2,
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow:
                        palette.mode === 'dark'
                          ? `0 24px 48px ${item.color}25`
                          : `0 24px 48px ${item.color}20`,
                    },
                  }}
                >
                  <Typography
                    aria-hidden
                    sx={{
                      fontSize: 64,
                      lineHeight: 0.8,
                      fontWeight: 800,
                      color: item.color,
                      opacity: 0.2,
                      mb: 1,
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    &ldquo;
                  </Typography>

                  <StarRating count={item.rating} />

                  <Typography
                    sx={{
                      flex: 1,
                      color: 'text.secondary',
                      fontSize: 15,
                      lineHeight: 1.8,
                      mb: 3,
                      fontStyle: 'italic',
                    }}
                  >
                    {item.quote}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}99 100%)`,
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: 14,
                        flexShrink: 0,
                      }}
                    >
                      {item.initials}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{ color: 'text.secondary', fontSize: 13 }}
                      >
                        {item.role}
                      </Typography>
                    </Box>
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

export default HomeTestimonials
