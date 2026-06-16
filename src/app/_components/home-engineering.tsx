'use client'

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import HomeSectionHeader from './home-section-header'

const CAPABILITIES = [
  {
    title: 'Cloud-Native Architecture',
    description: 'Scalable systems designed for high availability and global reach.',
    color: '#3397FF',
    icon: '☁',
  },
  {
    title: 'Automated CI/CD',
    description: 'Fast, reliable releases with testing and monitoring built in.',
    color: '#5cb460',
    icon: '⚡',
  },
  {
    title: 'Secure by Design',
    description: 'Authentication, encryption, and compliance from day one.',
    color: '#ff9e1d',
    icon: '🔒',
  },
  {
    title: 'Data-Driven Products',
    description: 'Analytics pipelines that turn usage into actionable insight.',
    color: '#ff3700',
    icon: '📊',
  },
]

const TERMINAL_LINES = [
  { text: '$ rheo init bloom-retail-platform', delay: 0 },
  { text: '→ Scaffolding microservices...', delay: 800 },
  { text: '→ Running test suite (128 specs)...', delay: 1600 },
  { text: '✓ All checks passed', delay: 2400, success: true },
  { text: '$ rheo deploy --env production', delay: 3200 },
  { text: '✓ Build completed in 38s', delay: 4000, success: true },
  { text: '✓ Deployed to us-east-1', delay: 4800, success: true },
  { text: '→ Uptime monitor: 99.98%', delay: 5600, accent: true },
]

const TECH_STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Kubernetes',
  'GraphQL',
  'Redis',
  'Terraform',
]

const HomeEngineering = () => {
  const { palette } = useTheme()
  const [visibleLines, setVisibleLines] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    setVisibleLines(0)
    const timers = TERMINAL_LINES.map((line, index) =>
      window.setTimeout(() => setVisibleLines(index + 1), line.delay)
    )

    const resetTimer = window.setTimeout(() => {
      setCycle((prev) => prev + 1)
    }, 7200)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(resetTimer)
    }
  }, [cycle])

  const marqueeItems = [...TECH_STACK, ...TECH_STACK]

  return (
    <Box
      id='home-engineering'
      component='section'
      sx={{
        py: { xs: 8, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background:
          palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0f1428 0%, #151733 100%)'
            : 'linear-gradient(180deg, #f5f8ff 0%, #eef4ff 100%)',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(51,151,255,0.12) 0%, transparent 70%)',
          animation: 'pulse-glow 6s ease-in-out infinite',
          '@keyframes pulse-glow': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.6 },
            '50%': { transform: 'scale(1.08)', opacity: 1 },
          },
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(92,180,96,0.1) 0%, transparent 70%)',
          animation: 'pulse-glow 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <HomeSectionHeader
            label='Engineering Excellence'
            title='Modern software, built to perform'
            description='We combine robust architecture, automated delivery, and thoughtful product design to ship software that lasts.'
            align='center'
          />
        </Box>

        <Grid container spacing={4} alignItems='stretch'>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {CAPABILITIES.map((item, index) => (
                <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    sx={{
                      height: '100%',
                      p: 2.5,
                      borderRadius: 3,
                      backgroundColor: 'background.paper',
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                      boxShadow:
                        palette.mode === 'dark'
                          ? 'none'
                          : '0 8px 28px rgba(15, 23, 42, 0.06)',
                      transition: 'box-shadow 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 16px 40px ${item.color}18`,
                        borderColor: `${item.color}40`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        mb: 1.5,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        backgroundColor: `${item.color}14`,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{ fontWeight: 700, fontSize: 15, mb: 0.8 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: 13,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              sx={{
                height: '100%',
                minHeight: 340,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                overflow: 'hidden',
                backgroundColor: '#0d1117',
                border: '1px solid #1e293b',
                boxShadow: '0 24px 56px rgba(0, 0, 0, 0.28)',
              }}
            >
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  flexShrink: 0,
                  backgroundColor: '#1a1f35',
                  borderBottom: '1px solid #1e293b',
                }}
              >
                <Box sx={{ display: 'flex', gap: 0.8 }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
                    <Box
                      key={color}
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </Box>
                <Typography
                  sx={{
                    ml: 1,
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.55)',
                    fontFamily: 'monospace',
                  }}
                >
                  rheo-cli — deploy pipeline
                </Typography>
                <Box
                  component={motion.div}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  sx={{
                    ml: 'auto',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#28c840',
                  }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  p: 2.5,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  backgroundColor: '#0d1117',
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                }}
              >
                {TERMINAL_LINES.slice(0, visibleLines).map((line, index) => (
                  <Box
                    key={`${cycle}-${index}`}
                    component={motion.div}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    sx={{ mb: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: line.success
                          ? '#4ade80'
                          : line.accent
                            ? '#60a5fa'
                            : 'rgba(255,255,255,0.82)',
                        fontFamily: 'inherit',
                      }}
                    >
                      {line.text}
                    </Typography>
                  </Box>
                ))}
                <Box
                  component={motion.span}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  sx={{
                    display: 'inline-block',
                    width: 8,
                    height: 16,
                    backgroundColor: '#60a5fa',
                    verticalAlign: 'middle',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, overflow: 'hidden' }}>
          <Typography
            sx={{
              textAlign: 'center',
              mb: 2.5,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              color: 'text.secondary',
            }}
          >
            Technologies we work with
          </Typography>
          <Box
            sx={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee 28s linear infinite',
              '@keyframes marquee': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
            }}
          >
            {marqueeItems.map((tech, index) => (
              <Box
                key={`${tech}-${index}`}
                component={motion.div}
                whileHover={{ scale: 1.05, y: -2 }}
                sx={{
                  mx: 1,
                  px: 2.2,
                  py: 1,
                  borderRadius: 10,
                  flexShrink: 0,
                  backgroundColor: 'background.paper',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  boxShadow:
                    palette.mode === 'dark'
                      ? 'none'
                      : '0 4px 16px rgba(15, 23, 42, 0.05)',
                }}
              >
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                  {tech}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeEngineering
