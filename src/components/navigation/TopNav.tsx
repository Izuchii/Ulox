'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Avatar } from '../ui/Avatar';

export const TopNav: React.FC = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/listings', label: 'Listings', icon: '🏘️' },
    { href: '/reels', label: 'Reels', icon: '🎬' },
    { href: '/dwellhub', label: 'DwellHub', icon: '🛍️' },
    { href: '/labourhub', label: 'LabourHub', icon: '⚒️' },
  ];

  return (
    <nav className="bg-white border-b border-[--color-neutral-200] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[--color-primary] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold text-[--color-primary]">Ulox</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname.startsWith(item.href) && item.href !== '/'
                    ? 'text-[--color-primary] bg-[--color-primary] bg-opacity-10'
                    : pathname === item.href
                    ? 'text-[--color-primary] bg-[--color-primary] bg-opacity-10'
                    : 'text-[--color-neutral-700] hover:text-[--color-primary] hover:bg-[--color-neutral-100]'
                )}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-[--color-neutral-600] hover:text-[--color-neutral-900] relative">
              <span className="text-xl">🔔</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[--color-error] rounded-full"></span>
            </button>
            
            <Link 
              href="/profile"
              className="flex items-center space-x-2 p-1 rounded-lg hover:bg-[--color-neutral-100]"
            >
              <Avatar 
                src="https://picsum.photos/seed/user1/150/150" 
                alt="User"
                size="sm"
              />
              <span className="hidden md:block text-sm font-medium text-[--color-neutral-700]">
                John Smith
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};