import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'verified' | 'pending' | 'featured' | 'new' | 'sale' | 'default' | 'success' | 'error' | 'warning';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-[--color-neutral-100] text-[--color-neutral-700]',
      verified: 'bg-[--color-success] text-white',
      pending: 'bg-[--color-warning] text-white',
      featured: 'bg-[--color-primary] text-white',
      new: 'bg-[--color-secondary] text-white',
      sale: 'bg-[--color-error] text-white',
      success: 'bg-[--color-success] text-white',
      error: 'bg-[--color-error] text-white',
      warning: 'bg-[--color-warning] text-white',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';