import { JSX } from 'react'
import type { Metadata } from 'next'

// components
import Stack from '@mui/material/Stack'
import { AppConfig } from '@/configs'
import HomeHero from './_components/home-hero'
import HomeAboutBrief from './_components/home-about-brief'
import HomeFeaturedServices from './_components/home-featured-services'
import HomeProcess from './_components/home-process'
import HomeEngineering from './_components/home-engineering'
import HomeCTA from './_components/home-cta'
import HomeContact from './_components/home-contact'

export const metadata: Metadata = {
  title: AppConfig.appHomeTitle,
  description: AppConfig.appDescription,
}

const HomePage = (): JSX.Element => {
  return (
    <Stack direction='column'>
      <HomeHero />
      <HomeAboutBrief />
      <HomeFeaturedServices />
      <HomeProcess />
      <HomeEngineering />
      <HomeCTA />
      <HomeContact />
    </Stack>
  )
}

export default HomePage
