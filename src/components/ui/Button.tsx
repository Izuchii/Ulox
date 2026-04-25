import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-[--color-primary] text-white hover:bg-[--color-primary-dark] focus:ring-[--color-primary]',
      secondary: 'bg-[--color-secondary] text-white hover:bg-[--color-secondary-dark] focus:ring-[--color-secondary]',
      outline: 'border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white',
      ghost: 'text-[--color-primary] hover:bg-[--color-neutral-100] hover:text-[--color-primary-dark]',
      danger: 'bg-[--color-error] text-white hover:bg-red-700 focus:ring-red-500',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm font-medium',
      md: 'px-4 py-2 text-sm font-medium',
      lg: 'px-6 py-3 text-base font-medium',
    };

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';