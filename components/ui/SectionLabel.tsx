import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionLabelProps {
  children: ReactNode
  variant?: 'blue' | 'orange' | 'neutral'
  className?: string
}

export function SectionLabel({ children, variant = 'blue', className }: SectionLabelProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase',
        variant === 'blue' && 'bg-brand-blue-light text-brand-blue border border-brand-blue-mid/30',
        variant === 'orange' && 'bg-brand-orange-light text-brand-orange border border-brand-orange-mid/30',
        variant === 'neutral' && 'bg-surface-muted text-ink-muted border border-surface-border',
        className
      )}
    >
      <span className={clsx(
        'w-1.5 h-1.5 rounded-full',
        variant === 'blue' && 'bg-brand-blue',
        variant === 'orange' && 'bg-brand-orange',
        variant === 'neutral' && 'bg-ink-muted',
      )} />
      {children}
    </span>
  )
}

interface SectionHeaderProps {
  label?: string
  labelVariant?: 'blue' | 'orange' | 'neutral'
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeader({
  label,
  labelVariant = 'blue',
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={clsx(
      'flex flex-col gap-4',
      align === 'center' && 'items-center text-center',
      align === 'left' && 'items-start text-left',
      className,
    )}>
      {label && <SectionLabel variant={labelVariant}>{label}</SectionLabel>}
      <h2 className={clsx(
        'font-display font-bold text-ink text-balance',
        'text-3xl sm:text-4xl lg:text-display-sm',
        titleClassName,
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-ink-muted text-lg leading-relaxed max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  )
}
