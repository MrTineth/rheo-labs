'use client'

import React, { FC } from 'react'
import { Box, Container, Typography, Grid, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  FooterWaves,
  FooterCompanyLinks,
  FooterContactInfo,
  FooterServicesLink,
  FooterSupportLinks,
} from '@/components/footer'
import { SocialLinks } from '@/components'
import AppIcon from '@/assets/icon.png'
import { AppConfig } from '@/configs'

const Footer: FC = () => {
  const { palette } = useTheme()

  const year = new Date().getFullYear()

  return (
    <Box
      component='footer'
      sx={{
        position: 'relative',
        backgroundColor: 'background.paper',
        overflow: 'hidden',
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <FooterWaves isDark={palette.mode === 'dark'} />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            pt: 8,
            pb: 10,
            px: {
              xs: 2.5,
              md: 0,
            },
          }}
        >
          <Grid container spacing={0}>
            <Grid size={{ xs: 12, md: 5 }}>
              <FooterContactInfo />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={0}>
                <Grid size={{ xs: 12, md: 4 }} sx={{ mt: { xs: 4, md: 0 } }}>
                  <FooterServicesLink />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ mt: { xs: 4, md: 0 } }}>
                  <FooterCompanyLinks />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ mt: { xs: 4, md: 0 } }}>
                  <FooterSupportLinks />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ my: 5 }} />
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  mb: {
                    xs: 2,
                    md: 0,
                  },
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                }}
              >
                <Stack
                  direction='row'
                  gap={2}
                  sx={{
                    alignItems: 'center',
                    mb: 2,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <Box
                    component='img'
                    src={AppIcon.src}
                    alt=''
                    sx={{ height: 32, width: 'auto' }}
                  />
                  <Typography
                    sx={{
                      fontWeight: '700',
                      fontSize: { xs: 17, md: 20 },
                    }}
                  >
                    {AppConfig.appName}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    maxWidth: { xs: '100%', md: '70%' },
                    mx: { xs: 'auto', md: 0 },
                    alignItems: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <Typography variant='subtitle1'>
                    {AppConfig.appDescription}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: {
                    xs: 'center',
                    md: 'flex-end',
                  },
                  justifyContent: {
                    xs: 'center',
                    md: 'flex-end',
                  },
                }}
              >
                <Box sx={{ mb: 0.8 }}>
                  <SocialLinks />
                </Box>

                <Typography variant='subtitle1' sx={{ fontWeight: '500' }}>
                  © {year} {AppConfig.appName}. All Rights Reserved.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Root box */}
      </Container>
    </Box>
  )
}

export default Footer
