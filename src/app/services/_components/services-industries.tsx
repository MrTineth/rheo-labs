'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { motion } from 'framer-motion'
import ServicesSectionHeader from './services-section-header'

const INDUSTRIES = [
  'Technology',
  'E-Commerce',
  'Healthcare',
  'Finance',
  'Education',
  'Real Estate',
  'Hospitality',
  'Professional Services',
]

const ServicesIndustries = () => {
  return (
    <Box
      component='section'
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
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
        >
          <ServicesSectionHeader
            label='Industries We Serve'
            title='Expertise across diverse sectors'
            description='We adapt our services to industry-specific needs, compliance requirements, and customer expectations.'
            align='center'
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            justifyContent: 'center',
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          {INDUSTRIES.map((industry, index) => (
            <Box
              key={industry}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <Box
                sx={{
                  px: 2.5,
                  py: 1.4,
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'text.primary',
                  backgroundColor: 'background.paper',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                  transition: (theme) =>
                    theme.transitions.create(
                      ['border-color', 'box-shadow', 'color', 'background-color'],
                      { duration: 250 }
                    ),
                  '&:hover': {
                    color: 'primary.main',
                    borderColor: 'primary.main',
                    boxShadow: '0 10px 28px rgba(51, 151, 255, 0.16)',
                    backgroundColor: 'primary.light',
                  },
                }}
              >
                {industry}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default ServicesIndustries
