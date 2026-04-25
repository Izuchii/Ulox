import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressTrackerProps {
  steps: Array<{
    id: string;
    label: string;
    status: 'completed' | 'current' | 'pending';
    description?: string;
    date?: string;
  }>;
  className?: string;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  steps,
  className,
}) => {
  return (
    <div className={cn('flow-root', className)}>
      <ul className="-mb-8">
        {steps.map((step, stepIdx) => (
          <li key={step.id}>
            <div className="relative pb-8">
              {stepIdx !== steps.length - 1 && (
                <span
                  className={cn(
                    'absolute top-4 left-4 -ml-px h-full w-0.5',
                    step.status === 'completed'
                      ? 'bg-[--color-success]'
                      : 'bg-[--color-neutral-300]'
                  )}
                  aria-hidden="true"
                />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={cn(
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                      step.status === 'completed'
                        ? 'bg-[--color-success]'
                        : step.status === 'current'
                        ? 'bg-[--color-primary]'
                        : 'bg-[--color-neutral-300]'
                    )}
                  >
                    {step.status === 'completed' ? (
                      <span className="text-white text-sm">✓</span>
                    ) : (
                      <span className="text-white text-sm font-medium">
                        {stepIdx + 1}
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className={cn(
                      'text-sm font-medium',
                      step.status === 'completed' || step.status === 'current'
                        ? 'text-[--color-neutral-900]'
                        : 'text-[--color-neutral-500]'
                    )}>
                      {step.label}
                    </p>
                    {step.description && (
                      <p className="mt-0.5 text-sm text-[--color-neutral-500]">
                        {step.description}
                      </p>
                    )}
                  </div>
                  {step.date && (
                    <div className="whitespace-nowrap text-right text-sm text-[--color-neutral-500]">
                      {step.date}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};