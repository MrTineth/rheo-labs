import { JSX } from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

// configs
import { AppConfig } from '@/configs'

// components
import { AppShell } from '@/components/loading'

// @mui provider
import MuiThemeProvider from '@/plugins/@mui/components/@mui-theme.provider'

// app context provider
import { AppContextProvider } from '@/contexts'

// assets
import AppIcon from '@/assets/icon.png'

// global styles
import './globals.css'

const plugJakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: AppConfig.appName,
  description: AppConfig.appDescription,
  icons: {
    icon: AppIcon.src,
    shortcut: AppIcon.src,
    apple: AppIcon.src,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en'>
      <body className={plugJakartaSans.variable}>
        <div id='initial-loader' aria-live='polite' aria-busy='true'>
          <img
            src={AppIcon.src}
            alt=''
            width={48}
            height={48}
            className='initial-loader-icon'
          />
        </div>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <AppContextProvider>
            <MuiThemeProvider>
              <AppShell>{children}</AppShell>
            </MuiThemeProvider>
          </AppContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
