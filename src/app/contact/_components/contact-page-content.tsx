'use client'

import React, { FormEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { motion } from 'framer-motion'
import { StyledButton } from '@/components/core'
import EmailIcon from '@/assets/icons/eva--email-outline.svg'
import PhoneIcon from '@/assets/icons/eva--phone-outline.svg'
import LocationIcon from '@/assets/icons/tdesign--location.svg'
import SendIcon from '@/assets/icons/picon--send.svg'
import { services } from '@/constants/service'
import { AppConfig } from '@/configs'

const SERVICE_OPTIONS = [...services.map((service) => service.title), 'Other']

const CONTACT_DETAILS = [
  {
    icon: EmailIcon,
    title: 'Email Us',
    value: AppConfig.contact.email,
    note: 'We respond within one business day',
    href: `mailto:${AppConfig.contact.email}`,
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    value: AppConfig.contact.phone,
    note: 'Mon–Fri, 9:00 AM – 6:00 PM',
    href: AppConfig.contact.phoneHref,
  },
  {
    icon: LocationIcon,
    title: 'Visit Us',
    value: AppConfig.contact.address,
    note: 'By appointment only',
    href: '#',
  },
]

const NEXT_STEPS = [
  'We review your request and assign the right specialist.',
  'You receive a response within 24 business hours.',
  'We schedule a discovery call to understand your goals.',
]

const fieldStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2.5,
    backgroundColor: 'background.paper',
    '&:hover fieldset': {
      borderColor: 'primary.main',
    },
    '&.Mui-focused fieldset': {
      borderWidth: 1,
      borderColor: 'primary.main',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'primary.main',
  },
}

const ContactPageContent = () => {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Box
      component='section'
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 14 },
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0f1428 0%, #151733 100%)'
            : 'linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -80,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(51,151,255,0.1) 0%, transparent 70%)',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 5, md: 7 }}>
          <Grid size={{ xs: 12, md: 5 }}>
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
                  Contact Information
                </Typography>
              </Box>

              <Typography
                component='h2'
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  fontSize: { xs: 28, md: 34 },
                  lineHeight: 1.3,
                }}
              >
                Let&apos;s start a conversation
              </Typography>

              <Typography
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.85,
                  fontSize: { xs: 15, md: 17 },
                }}
              >
                Tell us about your project, timeline, and goals. Our team will
                review your message and recommend the best next steps for your
                business.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {CONTACT_DETAILS.map((item) => (
                  <Box
                    key={item.title}
                    component='a'
                    href={item.href}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      p: 2.5,
                      borderRadius: 3,
                      textDecoration: 'none',
                      color: 'inherit',
                      backgroundColor: 'background.paper',
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
                      transition: (theme) =>
                        theme.transitions.create(
                          ['transform', 'box-shadow', 'border-color'],
                          { duration: 250 }
                        ),
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        borderColor: 'primary.light',
                        boxShadow: '0 14px 32px rgba(51, 151, 255, 0.12)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        flexShrink: 0,
                        borderRadius: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'primary.light',
                        color: 'primary.main',
                        '& svg': { width: 22, height: 22 },
                      }}
                    >
                      <Box component={item.icon} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, mb: 0.3 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
                        {item.value}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{ color: 'text.secondary', mt: 0.3 }}
                      >
                        {item.note}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#090e22' : '#e8f3ff',
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 2 }}>
                  What happens next?
                </Typography>
                {NEXT_STEPS.map((step, index) => (
                  <Box
                    key={step}
                    sx={{ display: 'flex', gap: 1.5, mb: index < 2 ? 1.5 : 0 }}
                  >
                    <Box
                      sx={{
                        width: 26,
                        height: 26,
                        flexShrink: 0,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#fff',
                        backgroundColor: 'primary.main',
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: 14,
                        lineHeight: 1.7,
                        pt: 0.2,
                      }}
                    >
                      {step}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Box
                component='form'
                onSubmit={onSubmit}
                sx={{
                  p: { xs: 3, md: 4.5 },
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'background.paper',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  boxShadow: '0 24px 60px rgba(51, 151, 255, 0.1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background:
                      'linear-gradient(90deg, #3397FF, #5cb460, #ff9e1d)',
                  },
                }}
              >
                <Typography
                  sx={{
                    mb: 0.5,
                    fontWeight: 800,
                    fontSize: { xs: 22, md: 26 },
                  }}
                >
                  Send us a message
                </Typography>
                <Typography
                  sx={{
                    mb: 3,
                    color: 'text.secondary',
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  Complete the form below and our team will get back to you with
                  tailored recommendations.
                </Typography>

                {submitted ? (
                  <Box
                    sx={{
                      py: 5,
                      px: 3,
                      textAlign: 'center',
                      borderRadius: 3,
                      backgroundColor: 'primary.light',
                    }}
                  >
                    <Typography
                      sx={{
                        mb: 1,
                        fontWeight: 800,
                        fontSize: 22,
                        color: 'primary.main',
                      }}
                    >
                      Thank you for reaching out!
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      Your message has been received. A member of our team will
                      contact you within 24 business hours.
                    </Typography>
                  </Box>
                ) : (
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label='Full Name'
                        name='name'
                        placeholder='John Smith'
                        sx={fieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label='Company'
                        name='company'
                        placeholder='Your Company Ltd.'
                        sx={fieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label='Email Address'
                        name='email'
                        type='email'
                        placeholder='you@company.com'
                        sx={fieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label='Phone Number'
                        name='phone'
                        placeholder='+1 (555) 000-0000'
                        sx={fieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        select
                        label='Service of Interest'
                        name='service'
                        defaultValue=''
                        sx={fieldStyles}
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label='Project Budget (Optional)'
                        name='budget'
                        placeholder='e.g. $5,000 – $10,000'
                        sx={fieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        minRows={5}
                        label='How can we help?'
                        name='message'
                        placeholder='Share your project goals, timeline, and any specific requirements...'
                        sx={fieldStyles}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <StyledButton
                        type='submit'
                        variant='contained'
                        color='primary'
                        size='large'
                        rounded
                        endIcon={
                          <Box
                            component={SendIcon}
                            sx={{ width: 18, height: 18 }}
                          />
                        }
                      >
                        Send Message
                      </StyledButton>
                      <Typography
                        variant='caption'
                        sx={{
                          display: 'block',
                          mt: 1.5,
                          color: 'text.secondary',
                        }}
                      >
                        By submitting this form, you agree to be contacted
                        regarding your inquiry. We respect your privacy.
                      </Typography>
                    </Grid>
                  </Grid>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactPageContent
