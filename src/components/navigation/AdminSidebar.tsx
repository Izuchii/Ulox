'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/admin/analytics', label: 'Analytics', icon: '📊' },
    { href: '/admin/listings', label: 'Listings', icon: '🏘️' },
    { href: '/admin/users', label: 'Users', icon: '👥' },
    { href: '/admin/disputes', label: 'Disputes', icon: '⚖️' },
    { href: '/admin/transactions', label: 'Transactions', icon: '💳' },
    { href: '/admin/cms', label: 'Content', icon: '📝' },
  ];

  return (
    <div className="w-64 bg-white h-full shadow-sm border-r border-[--color-neutral-200]">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-[--color-neutral-900] mb-6">
          Admin Console
        </h2>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'text-[--color-primary] bg-[--color-primary] bg-opacity-10'
                  : 'text-[--color-neutral-700] hover:text-[--color-primary] hover:bg-[--color-neutral-100]'
              )}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="mt-8 pt-6 border-t border-[--color-neutral-200]">
          <Link
            href="/"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-[--color-neutral-700] hover:text-[--color-primary] hover:bg-[--color-neutral-100] transition-colors"
          >
            <span>🔙</span>
            <span>Back to Site</span>
          </Link>
        </div>
      </div>
    </div>
  );
};