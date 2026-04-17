'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function ServiceProviderPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('services');

  // Mock data - in real app would fetch based on params.id
  const provider = {
    id: params.id,
    name: 'CleanPro Services',
    specialty: 'Professional House Cleaning',
    image: 'https://picsum.photos/seed/provider1/150/150',
    coverImage: 'https://picsum.photos/seed/cover1/800/200',
    rating: 4.9,
    reviews: 156,
    completedJobs: 234,
    responseTime: '< 2 hours',
    verified: true,
    backgroundChecked: true,
    joinedDate: 'March 2023',
    bio: 'Professional cleaning service with over 5 years of experience. We use eco-friendly products and guarantee satisfaction.',
    services: [
      { id: 1, name: 'Regular House Cleaning', price: '₦8,000 - ₦15,000', description: 'Weekly/monthly cleaning service' },
      { id: 2, name: 'Deep Cleaning', price: '₦12,000 - ₦25,000', description: 'Comprehensive deep cleaning' },
      { id: 3, name: 'Move-in/Move-out Cleaning', price: '₦15,000 - ₦30,000', description: 'Complete cleaning for moving' },
      { id: 4, name: 'Office Cleaning', price: '₦5,000 - ₦20,000', description: 'Commercial office cleaning' }
    ]
  };

  const customerReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent service! Very thorough and professional. My house looked amazing after their deep cleaning.',
      avatar: 'https://picsum.photos/seed/customer1/50/50'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 5,
      date: '1 month ago',
      comment: 'Regular cleaning service has been fantastic. Always on time and consistent quality.',
      avatar: 'https://picsum.photos/seed/customer2/50/50'
    },
    {
      id: 3,
      name: 'Lisa Park',
      rating: 4,
      date: '1 month ago',
      comment: 'Good service overall. Could improve communication but the cleaning quality is great.',
      avatar: 'https://picsum.photos/seed/customer3/50/50'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'services':
        return (
          <div className="space-y-4">
            {provider.services.map((service) => (
              <Card key={service.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-[--color-neutral-900] mb-2">
                        {service.name}
                      </h4>
                      <p className="text-sm text-[--color-neutral-600] mb-3">
                        {service.description}
                      </p>
                      <div className="text-lg font-medium text-[--color-primary]">
                        {service.price}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-[--color-neutral-900]">
                {provider.rating}
              </div>
              <div>
                {renderStars(Math.floor(provider.rating))}
                <p className="text-sm text-[--color-neutral-600]">
                  Based on {provider.reviews} reviews
                </p>
              </div>
            </div>
            
            {customerReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{review.name}</span>
                        <span className="text-sm text-[--color-neutral-500]">
                          {review.date}
                        </span>
                      </div>
                      {renderStars(review.rating)}
                      <p className="text-sm text-[--color-neutral-700] mt-2">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {provider.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[--color-neutral-700] mb-4">{provider.bio}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-[--color-neutral-500]">Joined</span>
                    <div className="font-medium">{provider.joinedDate}</div>
                  </div>
                  <div>
                    <span className="text-sm text-[--color-neutral-500]">Response Time</span>
                    <div className="font-medium">{provider.responseTime}</div>
                  </div>
                  <div>
                    <span className="text-sm text-[--color-neutral-500]">Completed Jobs</span>
                    <div className="font-medium">{provider.completedJobs}</div>
                  </div>
                  <div>
                    <span className="text-sm text-[--color-neutral-500]">Rating</span>
                    <div className="font-medium">{provider.rating}/5</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Cover Image */}
      <div
        className="h-48 bg-gradient-to-r from-[--color-primary] to-[--color-secondary]"
        style={{ backgroundImage: `url(${provider.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        {/* Provider Info Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h1 className="text-2xl font-bold text-[--color-neutral-900]">
                    {provider.name}
                  </h1>
                  {provider.verified && (
                    <Badge variant="verified">KYC Verified</Badge>
                  )}
                  {provider.backgroundChecked && (
                    <Badge variant="success">Background Checked</Badge>
                  )}
                </div>
                
                <p className="text-lg text-[--color-neutral-600] mb-4">
                  {provider.specialty}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    {renderStars(Math.floor(provider.rating))}
                    <span className="font-medium">{provider.rating}</span>
                    <span className="text-[--color-neutral-500]">
                      ({provider.reviews} reviews)
                    </span>
                  </div>
                  <div>
                    <span className="text-[--color-neutral-500]">Completed:</span>
                    <span className="font-medium ml-1">{provider.completedJobs} jobs</span>
                  </div>
                  <div>
                    <Badge variant="success">{provider.responseTime}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex border-b border-[--color-neutral-200] mb-6">
          {[
            { id: 'services', label: 'Services' },
            { id: 'reviews', label: 'Reviews' },
            { id: 'about', label: 'About' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-[--color-primary] border-[--color-primary]'
                  : 'text-[--color-neutral-600] border-transparent hover:text-[--color-primary]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="pb-8">
          {renderTabContent()}
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[--color-neutral-200] p-4 md:hidden">
        <div className="flex gap-3">
          <Link href={`/dwellhub/services/${provider.id}/book`} className="flex-1">
            <Button className="w-full">Book Now</Button>
          </Link>
          <Button variant="outline" className="flex-1">
            Make Offer
          </Button>
        </div>
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden md:block fixed bottom-6 right-6">
        <div className="flex gap-3">
          <Button variant="outline">
            Make Offer
          </Button>
          <Link href={`/dwellhub/services/${provider.id}/book`}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}