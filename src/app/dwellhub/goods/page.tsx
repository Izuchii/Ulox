'use client'

import React from 'react'
import { ProductCard } from '@/components/ui/ProductCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { products } from '@/lib/sample-data'

export default function DwellHubGoodsPage() {
  const categories = [
    'All', 'Furniture', 'Appliances', 'Decor', 'Bedding', 'Kitchen', 'Lighting', 'Storage'
  ]

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Header */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-2">
            DwellHub Goods
          </h1>
          <p className="text-[--color-neutral-600]">
            Everything you need to make your house a home
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category Navigation */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? 'featured' : 'default'}
                className="cursor-pointer hover:bg-[--color-primary] hover:text-white px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Search and Featured Banner */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
            <div className="flex-1 mb-4 md:mb-0">
              <Input
                placeholder="Search for products..."
                icon={<span>🔍</span>}
                className="w-full"
              />
            </div>
            <select className="px-3 py-2 border border-[--color-neutral-300] rounded-lg bg-white focus:border-[--color-primary] focus:outline-none">
              <option>Sort by: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Best Rating</option>
            </select>
          </div>

          {/* Featured Banner */}
          <div className="bg-gradient-to-r from-[--color-secondary] to-[--color-secondary-dark] text-white rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">🔥 Flash Sale</h2>
                <p className="text-lg">Up to 50% off furniture and appliances</p>
                <p className="text-sm opacity-90">Limited time offer - ends in 2 days</p>
              </div>
              <div className="text-right">
                <Button variant="outline" className="bg-white text-[--color-secondary] border-white">
                  Shop Sale
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Products */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[--color-neutral-900]">
              Trending Products
            </h2>
            <Button variant="outline">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={(id) => console.log('Added to cart:', id)}
                onSave={(id) => console.log('Saved:', id)}
              />
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[--color-neutral-900] mb-6">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Furniture', icon: '🪑', count: '234 items' },
              { name: 'Appliances', icon: '🔌', count: '156 items' },
              { name: 'Decor', icon: '🎨', count: '89 items' },
              { name: 'Lighting', icon: '💡', count: '67 items' },
              { name: 'Bedding', icon: '🛏️', count: '123 items' },
              { name: 'Kitchen', icon: '🍳', count: '198 items' },
              { name: 'Storage', icon: '📦', count: '76 items' },
              { name: 'Garden', icon: '🌿', count: '45 items' }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-[--color-neutral-200] p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-[--color-neutral-900] mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-[--color-neutral-600]">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[--color-neutral-900]">
              Recently Added
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice().reverse().map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={(id) => console.log('Added to cart:', id)}
                onSave={(id) => console.log('Saved:', id)}
              />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-[--color-primary]/5 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-[--color-neutral-900] mb-2">
            Get the Best Deals First
          </h3>
          <p className="text-[--color-neutral-600] mb-6">
            Subscribe to get exclusive offers, new arrivals, and home decor tips
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}