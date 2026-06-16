import { JSX } from 'react'
import type { Metadata } from 'next'
import Stack from '@mui/material/Stack'
import { PageBanner } from '@/components/core'
import HomeServices from '../_components/home-services'
import HomeCTA from '../_components/home-cta'
import ServicesProcess from './_components/services-process'
import ServicesBenefits from './_components/services-benefits'
import ServicesIndustries from './_components/services-industries'
import { AppConfig } from '@/configs'

export const metadata: Metadata = {
  title: `Services - ${AppConfig.appName}`,
  description:
    'Full-service digital solutions including web development, marketing, branding, e-commerce, strategy consulting, and AI—built to help your business grow.',
}

const ServicesPage = (): JSX.Element => {
  return (
    <Stack direction='column'>
      <PageBanner
        label='Our Services'
        title='Digital solutions that drive real business results'
        description='We partner with ambitious brands to design, build, and market products that perform—from first impression to long-term customer loyalty.'
      />
      <HomeServices hideHeader />
      <ServicesProcess />
      <ServicesBenefits />
      <ServicesIndustries />
      <HomeCTA />
    </Stack>
  )
}

export default ServicesPage
