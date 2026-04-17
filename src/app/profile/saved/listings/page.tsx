'use client'

import React from 'react'
import { PropertyCard } from '@/components/ui/PropertyCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { properties } from '@/lib/sample-data'

export default function SavedListingsPage() {
  // Mock saved listings (would come from user data in real app)
  const savedListings = properties.slice(0, 3)

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Header */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-2">
            Saved Listings ({savedListings.length})
          </h1>
          <p className="text-[--color-neutral-600]">
            Properties you've saved for later viewing
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="featured" className="cursor-pointer">All</Badge>
            <Badge variant="default" className="cursor-pointer hover:bg-[--color-primary] hover:text-white">Rent</Badge>
            <Badge variant="default" className="cursor-pointer hover:bg-[--color-primary] hover:text-white">Buy</Badge>
          </div>
        </div>

        {/* Properties Grid */}
        {savedListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedListings.map((property) => (
              <div key={property.id} className="relative">
                <PropertyCard 
                  property={property} 
                  saved={true}
                  onSave={(id) => console.log('Remove saved:', id)}
                />
                <button 
                  onClick={() => console.log('Remove', property.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg text-red-500"
                >
                  ❤️
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h2 className="text-2xl font-bold text-[--color-neutral-900] mb-2">
              No saved listings yet
            </h2>
            <p className="text-[--color-neutral-600] mb-8">
              Start browsing properties and save your favorites
            </p>
            <Button size="lg">
              Browse Listings
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}