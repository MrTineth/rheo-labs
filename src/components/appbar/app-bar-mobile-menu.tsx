'use client'

import React, { FC, ReactElement } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
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

  return (
    <MuiLink
      href={path}
      component={Link}
      onClick={onNavigate}
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
        ...(pathName === path && {
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
    </MuiLink>
  )
}

interface Props {
  open: boolean
  onClose: () => void
}

const AppBarMobileMenu: FC<Props> = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
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
      )}
    </AnimatePresence>
  )
}

export default AppBarMobileMenu
