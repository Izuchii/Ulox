'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { services } from '@/lib/sample-data';
import Link from 'next/link';

export default function ServicesPage() {
  const serviceCategories = [
    { id: 'plumbing', name: 'Plumbing', icon: '🔧', count: 24 },
    { id: 'electrical', name: 'Electrical', icon: '⚡', count: 18 },
    { id: 'cleaning', name: 'Cleaning', icon: '🧹', count: 32 },
    { id: 'painting', name: 'Painting', icon: '🎨', count: 15 },
    { id: 'renovation', name: 'Renovation', icon: '🏗️', count: 12 },
    { id: 'landscaping', name: 'Landscaping', icon: '🌿', count: 9 },
    { id: 'security', name: 'Security', icon: '🔒', count: 21 },
    { id: 'tech', name: 'IT/Tech', icon: '🖥️', count: 16 },
    { id: 'moving', name: 'Moving', icon: '📦', count: 8 },
    { id: 'interior', name: 'Interior Design', icon: '🛋️', count: 14 },
    { id: 'carpentry', name: 'Carpentry', icon: '🔨', count: 19 },
    { id: 'ac', name: 'AC Repair', icon: '❄️', count: 13 }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: 'Browse Services',
      description: 'Find the right service provider for your needs',
      icon: '🔍'
    },
    {
      step: 2,
      title: 'Book & Pay',
      description: 'Schedule your service and pay securely',
      icon: '📅'
    },
    {
      step: 3,
      title: 'Get It Done',
      description: 'Professional service delivered to your doorstep',
      icon: '✅'
    }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <Card hover className="h-full">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <img
            src={service.image}
            alt={service.provider}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-[--color-neutral-900]">{service.provider}</h3>
            <p className="text-sm text-[--color-neutral-600] mb-2">{service.service}</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-400">
                {'★'.repeat(Math.floor(service.rating))}
              </div>
              <span className="text-sm text-[--color-neutral-600]">
                {service.rating} ({service.reviews})
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">From ₦{service.priceFrom.toLocaleString()}</span>
              <Badge variant="success">{service.availability}</Badge>
            </div>
          </div>
        </div>
        <Link href={`/dwellhub/services/${service.id}`}>
          <Button className="w-full mt-4" size="sm">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Hero Section */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-2">
            DwellHub Services
          </h1>
          <p className="text-[--color-neutral-600] mb-6">
            Professional home services delivered by verified providers
          </p>
          <div className="flex flex-wrap gap-4">
            <input
              type="search"
              placeholder="What service do you need?"
              className="flex-1 min-w-64 px-4 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
            />
            <Button>Search Services</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Service Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[--color-neutral-900] mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceCategories.map((category) => (
              <Card key={category.id} hover className="cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-[--color-neutral-900] mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[--color-neutral-600]">
                    {category.count} providers
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Providers */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[--color-neutral-900]">
              Featured Providers
            </h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[--color-neutral-900] text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-[--color-primary] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-[--color-neutral-900] mb-2">
                  {step.step}. {step.title}
                </h3>
                <p className="text-[--color-neutral-600]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[--color-primary] bg-opacity-5 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[--color-neutral-900] mb-4">
            Need a Custom Service?
          </h2>
          <p className="text-[--color-neutral-600] mb-6">
            Can't find what you're looking for? Post your requirement and get quotes from verified providers.
          </p>
          <Button size="lg">
            Post Your Requirement
          </Button>
        </section>
      </div>
    </div>
  );
}