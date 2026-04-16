import type { ReactNode } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-blue text-white shadow-button hover:bg-brand-blue-dark hover:shadow-button-hover',
  secondary:
    'bg-ink text-white hover:bg-ink/90',
  ghost:
    'bg-white text-ink border border-surface-border hover:border-brand-blue-mid hover:bg-brand-blue-light hover:text-brand-blue',
  outline:
    'bg-transparent text-brand-blue border border-brand-blue hover:bg-brand-blue hover:text-white',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm gap-1.5',
  md: 'px-7 py-3.5 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 ease-premium',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
