'use client'

import React, { FC, memo, MouseEvent, ReactElement } from 'react'

// components
import Box from '@mui/material/Box'
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

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathName === path) {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  return (
    <Box component='li' sx={{ display: 'inline-block' }}>
      <Box
        component='a'
        href={path}
        onClick={handleClick}
        sx={{ textDecoration: 'none' }}
      >
        <Box
          component='span'
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
            '& svg': {
              fontSize: 18,
              transform: isActive ? 'translateX(0px)' : 'translateX(-32px)',
              position: 'absolute',
              top: '8px',
              transition: (theme: Theme) =>
                theme.transitions.create(['transform', 'margin']),
            },
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
              transition: (theme: Theme) =>
                theme.transitions.create(['margin']),
            }}
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </Box>
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
