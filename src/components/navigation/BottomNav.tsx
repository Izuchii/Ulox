'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const BottomNav: React.FC = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/listings', label: 'Listings', icon: '🏘️' },
    { href: '/reels', label: 'Reels', icon: '🎬' },
    { href: '/dwellhub', label: 'DwellHub', icon: '🛍️' },
    { href: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[--color-neutral-200] md:hidden z-40">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center space-y-1 px-3 py-1 rounded-lg transition-colors',
              pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')
                ? 'text-[--color-primary]'
                : 'text-[--color-neutral-500]'
            )}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};