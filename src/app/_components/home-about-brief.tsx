'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/core'

const HIGHLIGHTS = [
  { label: 'Web Applications', color: '#3397ff' },
  { label: 'Mobile Apps', color: '#5cb460' },
  { label: 'Cloud & DevOps', color: '#ff9e1d' },
  { label: 'AI & Automation', color: '#ff3700' },
]

const HomeAboutBrief = () => {
  return (
    <Box
      id='home-about'
      component='section'
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems='center'>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle>About Us</SectionTitle>
              <Typography
                component='h2'
                variant='h1'
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  fontSize: { xs: 26, md: 34 },
                  lineHeight: 1.3,
                }}
              >
                Building software that solves real problems
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.8,
                  mb: 3,
                  maxWidth: 520,
                }}
              >
                Rheo Labs partners with startups and enterprises to design,
                develop, and ship reliable software - from MVPs and internal
                tools to full-scale platforms that grow with your business.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                {HIGHLIGHTS.map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      px: 1.8,
                      py: 0.6,
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 600,
                      color: item.color,
                      backgroundColor: `${item.color}14`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Box>
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
                position: 'relative',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '100%', sm: 420 },
                  maxWidth: '100%',
                }}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    lineHeight: 0,
                    boxShadow: '0 20px 50px rgba(51, 151, 255, 0.15)',
                  }}
                >
                  <Image
                    src='/images/about-1.jpg'
                    width={420}
                    height={320}
                    quality={90}
                    alt='Rheo Labs engineering team'
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    left: -16,
                    px: 2.5,
                    py: 2,
                    borderRadius: 3,
                    backgroundColor: 'background.paper',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 28,
                      color: 'primary.main',
                    }}
                  >
                    10+
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
                    Products delivered
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeAboutBrief
