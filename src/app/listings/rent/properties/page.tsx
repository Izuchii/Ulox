'use client'

import React from 'react'
import { PropertyCard } from '@/components/ui/PropertyCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { properties } from '@/lib/sample-data'

export default function RentPropertiesPage() {
  const rentalProperties = properties.filter(property => property.type === 'rent')

  const filterChips = [
    'All', 'Furnished', 'Unfurnished', 'Studio', '1BR', '2BR', '3BR+'
  ]

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Header */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-2">
            Rental Properties
          </h1>
          <p className="text-[--color-neutral-600]">
            Find your perfect rental home in the best neighborhoods
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filters */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-wrap gap-2">
              {filterChips.map((filter, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? 'featured' : 'default'}
                  className="cursor-pointer hover:bg-[--color-primary] hover:text-white"
                >
                  {filter}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <select className="px-3 py-2 border border-[--color-neutral-300] rounded-lg bg-white focus:border-[--color-primary] focus:outline-none">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
          
          <p className="text-sm text-[--color-neutral-600]">
            <strong>{rentalProperties.length}</strong> rental properties found
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {rentalProperties.map((property) => (
            <div key={property.id} className="relative">
              <PropertyCard 
                property={property} 
                onSave={(id) => console.log('Saved:', id)}
              />
              <div className="absolute top-4 left-4">
                <Badge variant="new">For Rent</Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Properties
          </Button>
          <p className="text-sm text-[--color-neutral-500] mt-2">
            Showing {rentalProperties.length} of 124 properties
          </p>
        </div>
      </div>
    </div>
  )
}