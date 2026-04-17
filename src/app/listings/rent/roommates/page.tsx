'use client'

import React from 'react'
import { RoommateCard } from '@/components/ui/RoommateCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { roommates } from '@/lib/sample-data'

export default function RoommatesPage() {
  const lifestyleOptions = [
    'Pet-friendly', 'Non-smoker', 'Night owl', 'Early bird', 'Student', 'Professional'
  ]

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Header */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-2">
            Find Roommates
          </h1>
          <p className="text-[--color-neutral-600]">
            Connect with compatible roommates and split the costs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filter Section */}
        <div className="bg-white rounded-lg border border-[--color-neutral-200] p-6 mb-6">
          <h2 className="text-lg font-semibold text-[--color-neutral-900] mb-4">
            Find Your Perfect Match
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Budget Range */}
            <div>
              <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                Budget Range
              </label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Input placeholder="Min" className="flex-1" />
                  <span className="text-[--color-neutral-500]">-</span>
                  <Input placeholder="Max" className="flex-1" />
                </div>
                <div className="flex justify-between text-xs text-[--color-neutral-500]">
                  <span>$500</span>
                  <span>$3,000</span>
                </div>
                <div className="h-2 bg-[--color-neutral-200] rounded-full">
                  <div className="h-2 bg-[--color-primary] rounded-full w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                Preferred Location
              </label>
              <select className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg bg-white focus:border-[--color-primary] focus:outline-none">
                <option>All Areas</option>
                <option>Manhattan</option>
                <option>Brooklyn</option>
                <option>Queens</option>
                <option>Bronx</option>
                <option>Staten Island</option>
              </select>
            </div>

            {/* Move-in Date */}
            <div>
              <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                Move-in Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg bg-white focus:border-[--color-primary] focus:outline-none"
              />
            </div>
          </div>

          {/* Lifestyle Preferences */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-[--color-neutral-700] mb-3">
              Lifestyle Preferences
            </label>
            <div className="flex flex-wrap gap-2">
              {lifestyleOptions.map((option, index) => (
                <Badge 
                  key={index}
                  variant="default"
                  className="cursor-pointer hover:bg-[--color-primary] hover:text-white"
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[--color-neutral-600]">
            <strong>{roommates.length}</strong> potential roommates found
          </p>
          <select className="px-3 py-2 border border-[--color-neutral-300] rounded-lg bg-white focus:border-[--color-primary] focus:outline-none">
            <option>Sort by: Best Match</option>
            <option>Budget: Low to High</option>
            <option>Budget: High to Low</option>
            <option>Recently Active</option>
            <option>Highest Compatibility</option>
          </select>
        </div>

        {/* Roommates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {roommates.map((roommate) => (
            <RoommateCard 
              key={roommate.id}
              roommate={roommate}
              onConnect={(id) => console.log('Connect:', id)}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Roommates
          </Button>
          <p className="text-sm text-[--color-neutral-500] mt-2">
            Showing {roommates.length} of 47 potential roommates
          </p>
        </div>
      </div>
    </div>
  )
}