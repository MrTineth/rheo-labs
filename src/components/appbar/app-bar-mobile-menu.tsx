'use client'

import React, { FC, MouseEvent, ReactElement } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import { usePathname } from 'next/navigation'
import { companyMenus } from '@/constants/menus'
import AppBarSwitchDarkMode from './switch-dark-mode'

interface LinkItemProps {
  label: string
  path: string
  icon?: ReactElement
  onNavigate: () => void
}

const LinkItem: FC<LinkItemProps> = ({ label, path, icon, onNavigate }) => {
  const pathName = usePathname()
  const isActive = pathName === path

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathName === path) {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    onNavigate()
  }

  return (
    <Box
      component='a'
      href={path}
      onClick={handleClick}
      sx={{ textDecoration: 'none' }}
    >
      <Box
        component='span'
        sx={{
          py: 1.2,
          px: 2,
          mb: 0.5,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          color: 'text.primary',
          textDecoration: 'none',
          ...(isActive && {
            backgroundColor: 'primary.main',
            color: '#fbfbfb',
          }),
          '&:hover': {
            backgroundColor: 'primary.main',
            color: '#fbfbfb',
          },
          '& svg': {
            width: 18,
            height: 'auto',
            flexShrink: 0,
          },
        }}
      >
        {icon}
        <Typography
          component='span'
          sx={{
            fontSize: 15,
            fontWeight: 500,
            color: 'inherit',
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  )
}

interface Props {
  open: boolean
  onClose: () => void
}

const AppBarMobileMenu: FC<Props> = ({ open, onClose }) => {
  if (!open) {
    return null
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        mt: 1,
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
          <Box
            sx={{
              py: 1.5,
              px: 1,
              borderRadius: 3,
              backgroundColor: 'background.paper',
              backdropFilter: 'blur(8px)',
              boxShadow: 3,
            }}
          >
            <Box
              component='nav'
              aria-label='Mobile navigation'
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              {companyMenus.map((item, index) => (
                <LinkItem
                  key={item.label + String(index)}
                  label={item.label}
                  path={item.path}
                  icon={item.icon}
                  onNavigate={onClose}
                />
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 1,
                mt: 0.5,
                borderTop: (theme: Theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <AppBarSwitchDarkMode />
        </Box>
      </Box>
    </Box>
  )
}

export default AppBarMobileMenu
