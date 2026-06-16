import { JSX } from 'react'
import type { Metadata } from 'next'
import Stack from '@mui/material/Stack'
import { PageBanner } from '@/components/core'
import ContactPageContent from './_components/contact-page-content'
import { AppConfig } from '@/configs'

export const metadata: Metadata = {
  title: `Contact Us - ${AppConfig.appName}`,
  description:
    'Contact Rheo Labs for product inquiries, partnerships, and consultations. We respond within 24 business hours.',
}

const ContactPage = (): JSX.Element => {
  return (
    <Stack direction='column'>
      <PageBanner
        label="Let's Talk"
        title='Ready to bring your next project to life?'
        description='Share your vision with our team. We help businesses plan, design, and launch digital experiences that deliver measurable growth.'
      />
      <ContactPageContent />
    </Stack>
  )
}

export default ContactPage
