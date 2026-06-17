'use client'

import React, { FC, ReactNode } from 'react'
import AppBar from '@/components/appbar/app-bar'
import Footer from '@/components/footer/footer'

interface Props {
  children: ReactNode
}

const AppShell: FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  )
}

export default AppShell
