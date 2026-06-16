'use client'

import React, { FC, memo, ReactElement } from 'react'

// components
import Link from 'next/link'
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// interfaces
import { Theme } from '@mui/material/styles'

// hooks
import { usePathname } from 'next/navigation'

// constants
import { companyMenus } from '@/constants/menus'

interface LinkItemProps extends Props {
  label: string
  path: string
  icon?: ReactElement
}

const LinkItem: FC<LinkItemProps> = ({ label, path, icon }: LinkItemProps) => {
  const pathName = usePathname()
  const isActive = pathName === path

  return (
    <MuiLink
      href={path}
      component={Link}
      sx={{
        py: 0.8,
        px: 1.8,
        mx: 0.4,
        borderRadius: 10,
        cursor: 'pointer',
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        color: 'text.primary',
        textDecoration: 'none',
        display: 'inline-block',
        // Icon
        '& svg': {
          fontSize: 18,
          transform: isActive ? 'translateX(0px)' : 'translateX(-32px)',
          position: 'absolute',
          top: '8px',
          transition: (theme: Theme) =>
            theme.transitions.create(['transform', 'margin']),
        },

        // Styles for active menu
        ...(isActive && {
          backgroundColor: 'primary.main',
          color: '#fbfbfb',
        }),

        '&:hover': {
          backgroundColor: 'primary.main',
          color: '#fbfbfb',
          '& svg': {
            transform: 'translateX(0px)',
          },
          '& p': {
            marginLeft: '26px',
          },
        },
      }}
    >
      {icon}
      <Typography
        variant='h6'
        component='p'
        sx={{
          fontSize: 14,
          display: 'inline-block',
          color: 'inherit',
          marginLeft: isActive ? '26px' : '0',
          transition: (theme: Theme) => theme.transitions.create(['margin']),
        }}
      >
        {label}
      </Typography>
    </MuiLink>
  )
}
const MemoizedLinkItem = memo(LinkItem)

interface Props {}

const AppBarNavigation: FC<Props> = () => {
  return (
    <Box>
      <Box
        component='ul'
        sx={{
          m: 0,
          lineHeight: 0,
          pl: 0,
        }}
      >
        {companyMenus.map((item, index) => (
          <MemoizedLinkItem
            key={String(index)}
            label={item.label}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </Box>
    </Box>
  )
}

export default memo(AppBarNavigation)
