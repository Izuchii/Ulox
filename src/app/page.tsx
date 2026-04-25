'use client';

import React from 'react';
import { SearchBar } from '@/components/ui/SearchBar';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { ReelCard } from '@/components/ui/ReelCard';
import { ProductCard } from '@/components/ui/ProductCard';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { JobCard } from '@/components/ui/JobCard';
import { Button } from '@/components/ui/Button';
import { properties, reels, products, services, jobs } from '@/lib/sample-data';
import Link from 'next/link';

export default function HomePage() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 4);
  const featuredReels = reels.slice(0, 3);
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredJobs = jobs.slice(0, 4);

  return (
    <div className="min-h-screen bg-[--background]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[--color-primary] to-[--color-primary-dark] text-white py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Complete Real Estate Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Find properties, connect with roommates, discover services, and access skilled labor
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              placeholder="Search properties, services, or jobs..."
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[--color-neutral-900]">Featured Properties</h2>
            <Link href="/listings">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSave={(id) => console.log('Save property:', id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reels */}
      <section className="py-16 bg-[--color-neutral-50]">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[--color-neutral-900]">Trending Reels</h2>
            <Link href="/reels">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {featuredReels.map((reel) => (
              <div key={reel.id} className="flex-shrink-0 w-64">
                <ReelCard
                  reel={reel}
                  onPlay={(id) => console.log('Play reel:', id)}
                  onLike={(id) => console.log('Like reel:', id)}
                  onComment={(id) => console.log('Comment reel:', id)}
                  onShare={(id) => console.log('Share reel:', id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[--color-neutral-900]">DwellHub Products</h2>
            <Link href="/dwellhub/goods">
              <Button variant="outline">Shop All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onSave={(id) => console.log('Save product:', id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-[--color-neutral-50]">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[--color-neutral-900]">Featured Services</h2>
            <Link href="/dwellhub/services">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={(id) => console.log('Book service:', id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Active Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[--color-neutral-900]">Available Jobs</h2>
            <Link href="/labourhub">
              <Button variant="outline">View All Jobs</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={(id) => console.log('Apply for job:', id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[--color-primary] text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust Ulox for all their real estate needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" variant="secondary">
                Sign Up Today
              </Button>
            </Link>
            <Link href="/listings">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[--color-primary]">
                Browse Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
