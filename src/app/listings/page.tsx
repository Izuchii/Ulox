'use client';

import React from 'react';
import { SubNav } from '@/components/navigation/SubNav';
import { SearchBar } from '@/components/ui/SearchBar';
import { FilterPanel } from '@/components/ui/FilterPanel';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { properties } from '@/lib/sample-data';

const subNavItems = [
  { href: '/listings/rent', label: 'Rent' },
  { href: '/listings/buy', label: 'Buy' },
  { href: '/listings/homebuy-assist', label: 'HomeBuy Assist' },
];

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-[--background]">
      <SubNav items={subNavItems} />
      
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-4">
            Property Listings
          </h1>
          <SearchBar placeholder="Search by location, property type, or price..." />
        </div>

        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-80">
            <FilterPanel />
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[--color-neutral-600]">
                Showing {properties.length} properties
              </p>
              <select className="px-4 py-2 border border-[--color-neutral-300] rounded-lg text-sm">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onSave={(id) => console.log('Save property:', id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}