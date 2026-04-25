import React from 'react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 'md',
  showValue = false,
  className,
}) => {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    const isFilled = i <= rating;
    
    stars.push(
      <span
        key={i}
        className={cn(
          'inline-block',
          sizes[size],
          isFilled ? 'text-yellow-400' : 'text-[--color-neutral-300]'
        )}
      >
        ★
      </span>
    );
  }

  return (
    <div className={cn('flex items-center space-x-1', className)}>
      <div className="flex items-center">
        {stars}
      </div>
      {showValue && (
        <span className="text-sm text-[--color-neutral-600] ml-1">
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
};