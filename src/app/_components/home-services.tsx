'use client'

import React, { useEffect } from 'react'

// components
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

// hooks
import { useTheme } from '@mui/material/styles'

// constants
import { services } from '@/constants/service'

type ServiceItemProps = {
  item: IService
}
const HomeServiceItem = ({
  item,
  index,
}: ServiceItemProps & { index: number }) => {
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        sx={{ height: '100%' }}
      >
        <Box
          id={item.slug}
          sx={{
            height: '100%',
            borderRadius: 4,
            px: { xs: 3.5, md: 4.5 },
            py: { xs: 3.5, md: 4.5 },
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'background.paper',
            scrollMarginTop: { xs: 100, md: 120 },
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
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
              background: 'linear-gradient(90deg, #3397FF, #5cb460, #ff9e1d)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.14)',
              '&::before': {
                opacity: 1,
              },
              '& .service-icon-wrap': {
                transform: 'scale(1.05)',
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
                height: 52,
                width: 'auto',
              },
            }}
          >
            <Image
              src={item.image as string}
              alt={item.title}
              width={100}
              height={100}
            />
          </Box>
          <Typography
            component='h3'
            variant='h4'
            sx={{ fontSize: { xs: 18, md: 20 }, mb: 1.5, fontWeight: 700 }}
          >
            {item.title}
          </Typography>

          <Typography
            component='p'
            sx={{
              color: 'text.secondary',
              fontSize: 15,
              lineHeight: 1.75,
            }}
          >
            {item.description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

interface HomeServicesProps {
  hideHeader?: boolean
}

const HomeServices = ({ hideHeader = false }: HomeServicesProps) => {
  const { palette } = useTheme()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return

    const element = document.getElementById(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <Box
      id='home-service'
      component='section'
      sx={{
        width: '100%',
        pt: hideHeader ? { xs: 6, md: 8 } : { xs: 8, md: 14 },
        pb: { xs: 6, md: 12 },
        background:
          palette.mode === 'dark'
            ? 'linear-gradient(160deg, #151733 0%, #0d1228 100%)'
            : 'linear-gradient(160deg, #087ae7 0%, #0568c7 100%)',
      }}
    >
      {!hideHeader && (
        <Container maxWidth='md'>
          <Box
            sx={{
              mb: 6,
              color: 'primary.contrastText',
              textAlign: { xs: 'center', md: 'left' },
              width: {
                xs: '100%',
                md: '70%',
              },
            }}
          >
            <Box
              sx={{
                mb: 3,
                borderRadius: 1,
                display: 'inline-block',
                padding: '6px 14px',
                backgroundColor: 'rgb(255,255,255,0.10)',
                color: '#fbfbfb',
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
                variant='h5'
              >
                OUR SERVICES
              </Typography>
            </Box>
            <Typography
              variant='h1'
              sx={{
                mb: 2,
                lineHeight: 1.4,
                fontWeight: '800',
                textTransform: 'capitalize',
              }}
            >
              Digital solutions that drive real business results
            </Typography>
            <Typography
              sx={{
                color: '#ececec',
                mb: 1,
                fontSize: {
                  xs: 16,
                  md: 22,
                },
              }}
            >
              We deliver strategy, design, development, and marketing services
              that help businesses launch faster and grow with confidence.
            </Typography>
          </Box>
        </Container>
      )}
      <Container
        sx={{
          position: 'relative',
          overflowX: {
            xs: 'hidden',
            lg: 'unset',
          },
        }}
      >
        {/* Shapes */}
        <Box sx={{ position: 'absolute', top: -10, left: -16 }}>
          <Image
            src='/images/shape-2-b.png'
            width={70}
            height={100}
            alt='Shape 2'
          />
        </Box>
        <Box sx={{ position: 'absolute', top: 40, right: -20 }}>
          <Image
            src='/images/shape-1-a.png'
            width={84}
            height={90}
            alt='Shape 1'
          />
        </Box>
        <Box sx={{ position: 'absolute', top: -40, right: 420, width: 60 }}>
          <Image
            src='/images/circle-b.svg'
            width={34}
            height={34}
            alt='Shape circle a'
          />
        </Box>
        <Box sx={{ position: 'absolute', top: 500, right: -46 }}>
          <Image
            src='/images/figure-shape-1-b.png'
            width={26}
            height={26}
            alt='Shape 3'
          />
        </Box>
        <Box sx={{ position: 'absolute', top: -30, right: 112 }}>
          <Image
            src='/images/figure-shape-4-a.png'
            width={43}
            height={38}
            alt='Shape 4'
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 340,
            left: -40,
            transform: 'rotate(23deg)',
          }}
        >
          <Image
            src='/images/figure-shape-2.png'
            width={43}
            height={38}
            alt='Shape 4'
          />
        </Box>

        <Grid container spacing={3}>
          {services.map((item, index) => (
            <HomeServiceItem item={item} index={index} key={item.title} />
          ))}
        </Grid>

        <Box
          sx={{
            textAlign: 'center',
            mt: 6,
            mx: 'auto',
            maxWidth: 720,
            px: 2,
            py: 2.5,
            borderRadius: 4,
            color: '#fbfbfb',
            backgroundColor: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <Typography sx={{ fontSize: { xs: 15, md: 17 }, lineHeight: 1.8 }}>
            Every engagement is guided by clear goals, transparent communication,
            and a commitment to outcomes that matter to your business.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeServices
