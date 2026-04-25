import React from 'react'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebarItems = [
    { name: 'Analytics', href: '/admin/analytics', icon: '📊' },
    { name: 'Listings', href: '/admin/listings', icon: '🏠' },
    { name: 'Users', href: '/admin/users', icon: '👥' },
    { name: 'Disputes', href: '/admin/disputes', icon: '⚖️' },
    { name: 'Transactions', href: '/admin/transactions', icon: '💳' },
    { name: 'CMS', href: '/admin/cms', icon: '📝' }
  ]

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Admin Header */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[--color-neutral-900]">
                Ulox Admin Console
              </h1>
              <p className="text-[--color-neutral-600]">
                Platform management and oversight
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-[--color-primary] rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="text-sm font-medium">Admin User</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-6">
          {/* Sidebar */}
          <div className="w-64 space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[--color-neutral-700] hover:bg-white hover:text-[--color-primary] transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}