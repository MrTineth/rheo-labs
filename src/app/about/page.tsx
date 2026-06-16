import { JSX } from 'react'
import type { Metadata } from 'next'
import Stack from '@mui/material/Stack'
import { PageBanner } from '@/components/core'
import AboutStory from './_components/about-story'
import AboutStats from './_components/about-stats'
import AboutValues from './_components/about-values'
import AboutMission from './_components/about-mission'
import HomeCTA from '../_components/home-cta'
import { AppConfig } from '@/configs'

export const metadata: Metadata = {
  title: `About Us - ${AppConfig.appName}`,
  description:
    'Meet the Rheo Labs team. Since 2019 we have helped 150+ clients build web apps, mobile products, and software platforms that drive measurable growth.',
}

const AboutPage = (): JSX.Element => {
  return (
    <Stack direction='column'>
      <PageBanner
        label='About Us'
        title='A team obsessed with software excellence'
        description='We are strategists, designers, and engineers united by one goal—helping ambitious businesses build software products that deliver lasting impact.'
      />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutMission />
      <HomeCTA />
    </Stack>
  )
}

export default AboutPage
