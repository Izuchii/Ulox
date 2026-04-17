import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  online?: boolean;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  online,
  className 
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const getInitials = (name?: string) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={cn('relative inline-flex', className)}>
      <div className={cn(
        'rounded-full bg-[--color-neutral-200] flex items-center justify-center overflow-hidden',
        sizes[size]
      )}>
        {src ? (
          <img 
            src={src} 
            alt={alt || 'Avatar'} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className={cn(
            'font-medium text-[--color-neutral-600]',
            size === 'sm' ? 'text-xs' : 'text-sm'
          )}>
            {getInitials(alt)}
          </span>
        )}
      </div>
      {online && (
        <div className="absolute -bottom-0 -right-0 block h-3 w-3 rounded-full border-2 border-white bg-[--color-success]" />
      )}
    </div>
  );
};