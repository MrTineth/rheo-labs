'use client'

import React, { FC, ReactNode } from 'react'
import { styled, Theme, type CSSObject } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { ButtonProps } from '@mui/material/Button'

interface BaseButtonProps
  extends Pick<ButtonProps, 'onClick' | 'type' | 'startIcon' | 'endIcon'> {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'dark' | 'light'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
}
type StyledButtonRootProps = BaseButtonProps

const shouldForwardButtonProp = (prop: PropertyKey) =>
  prop !== 'variant' &&
  prop !== 'color' &&
  prop !== 'size' &&
  prop !== 'rounded'

const buttonStyles = ({
  theme,
  color,
  variant,
  size,
  rounded,
}: StyledButtonRootProps & { theme: Theme }) => ({
  cursor: 'pointer',
  minWidth: 40,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: 1,
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  transform: 'unset',
  position: 'relative',
  overflow: 'hidden',
  border: 'none',
  whiteSpace: 'nowrap',
  WebkitTapHighlightColor: 'transparent',
  verticalAlign: 'middle',
  outline: 'none !important',
  textDecoration: 'none',
  transition: theme.transitions.create(['transform']),

  // hover
  '&:hover': {
    transform: 'translateY(-3px)',
  },

  '& svg': {
    fontSize: 20,
  },

  // rounded
  ...(rounded && {
    borderRadius: '2rem',
  }),
  ...(!rounded && {
    borderRadius: theme.shape.borderRadius * 2,
  }),

  // sizes and variants
  ...(size === 'small' &&
    variant === 'outlined' && {
      padding: '6px 10px',
    }),
  ...(size === 'medium' &&
    variant === 'outlined' && {
      padding: '6px 14px',
    }),
  ...(size === 'large' &&
    variant === 'outlined' && {
      padding: '12px 18px',
    }),

  ...(size === 'small' &&
    variant !== 'outlined' && {
      padding: '6px 12px',
    }),
  ...(size === 'medium' &&
    variant !== 'outlined' && {
      padding: '8px 16px',
    }),
  ...(size === 'large' &&
    variant !== 'outlined' && {
      padding: '14px 20px',
    }),

  // variants
  ...(variant !== 'contained' && {
    backgroundColor: 'transparent',
    boxShadow: 'none !important',
  }),

  // colors & varians
  ...(color === 'primary' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    }),
  ...(color === 'secondary' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
    }),
  ...(color === 'dark' &&
    variant === 'contained' && {
      backgroundColor: '#313d56',
      color: theme.palette.primary.contrastText,
    }),
  ...(color === 'light' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.primary.contrastText,
      color: '#444',
    }),

  ...(color === 'primary' &&
    variant === 'outlined' && {
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    }),
  ...(color === 'secondary' &&
    variant === 'outlined' && {
      border: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    }),
  ...(color === 'dark' &&
    variant === 'outlined' && {
      border: `2px solid #313d56`,
      color: '#313d56',
    }),
  ...(color === 'light' &&
    variant === 'outlined' && {
      border: `2px solid #313d56`,
      color: `#313d56`,
    }),

  ...(color === 'primary' &&
    variant === 'text' && {
      color: theme.palette.primary.main,
    }),
  ...(color === 'secondary' &&
    variant === 'text' && {
      color: theme.palette.secondary.main,
    }),
  ...(color === 'dark' &&
    variant === 'text' && {
      color: '#313d56',
    }),
  ...(color === 'light' &&
    variant === 'text' && {
      color: theme.palette.primary.contrastText,
    }),
}) as CSSObject

const StyledButtonRoot = styled('button', {
  shouldForwardProp: shouldForwardButtonProp,
})<StyledButtonRootProps>(buttonStyles)

const StyledButtonAnchor = styled('a', {
  shouldForwardProp: shouldForwardButtonProp,
})<StyledButtonRootProps>(buttonStyles)

interface Props extends BaseButtonProps {
  children: ReactNode
  href?: string
}

const StyledButton: FC<Props> = (props: Props) => {
  const { children, onClick, startIcon, endIcon, rounded, href, ...rest } = props

  const content = (
    <>
      {startIcon && (
        <Box component='span' sx={{ display: 'inherit', mr: 1, ml: -0.5 }}>
          {startIcon}
        </Box>
      )}
      <Box component='span'>{children}</Box>
      {endIcon && (
        <Box component='span' sx={{ display: 'inherit', ml: 1, mr: -0.5 }}>
          {endIcon}
        </Box>
      )}
    </>
  )

  if (href) {
    return (
      <StyledButtonAnchor href={href} rounded={rounded} {...rest}>
        {content}
      </StyledButtonAnchor>
    )
  }

  return (
    <StyledButtonRoot
      onClick={onClick}
      type={rest.type ?? 'button'}
      rounded={rounded}
      {...rest}
    >
      {content}
    </StyledButtonRoot>
  )
}

export default StyledButton
