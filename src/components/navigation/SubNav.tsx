'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SubNavItem {
  href: string;
  label: string;
}

interface SubNavProps {
  items: SubNavItem[];
  className?: string;
}

export const SubNav: React.FC<SubNavProps> = ({ items, className }) => {
  const pathname = usePathname();

  return (
    <div className={cn('bg-white border-b border-[--color-neutral-200]', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 overflow-x-auto">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors',
                pathname === item.href || pathname.startsWith(item.href + '/')
                  ? 'border-[--color-primary] text-[--color-primary]'
                  : 'border-transparent text-[--color-neutral-500] hover:text-[--color-neutral-700] hover:border-[--color-neutral-300]'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};