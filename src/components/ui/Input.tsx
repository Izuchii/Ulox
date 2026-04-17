import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="text-sm font-medium text-[--color-neutral-700]">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              {icon}
            </div>
          )}
          <input
            className={cn(
              'flex h-10 w-full rounded-lg border border-[--color-neutral-300] bg-white px-3 py-2 text-sm placeholder:text-[--color-neutral-500] focus:border-[--color-primary] focus:outline-none focus:ring-1 focus:ring-[--color-primary]',
              icon && 'pl-10',
              error && 'border-[--color-error] focus:border-[--color-error] focus:ring-[--color-error]',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-[--color-error]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';