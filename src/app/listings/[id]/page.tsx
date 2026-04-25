'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { Tabs } from '@/components/ui/Tabs'
import { ScheduleTourModal } from '@/components/modals/ScheduleTourModal'
import { properties } from '@/lib/sample-data'

export default function PropertyDetailPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [showTourModal, setShowTourModal] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const property = properties.find(p => p.id === params.id)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[--color-neutral-900] mb-2">Property Not Found</h1>
          <p className="text-[--color-neutral-600] mb-4">The property you're looking for doesn't exist.</p>
          <Link href="/listings">
            <Button>Back to Listings</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Mock additional images
  const images = [
    property.image,
    'https://picsum.photos/seed/prop' + property.id + 'a/800/600',
    'https://picsum.photos/seed/prop' + property.id + 'b/800/600',
    'https://picsum.photos/seed/prop' + property.id + 'c/800/600',
    'https://picsum.photos/seed/prop' + property.id + 'd/800/600'
  ]

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-[--color-neutral-900] mb-3">Property Description</h3>
            <p className="text-[--color-neutral-700] leading-relaxed">{property.description}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[--color-neutral-50] rounded-lg p-4 text-center">
              <div className="text-2xl mb-1">🏠</div>
              <div className="text-sm text-[--color-neutral-600]">Property Type</div>
              <div className="font-medium text-[--color-neutral-900]">
                {property.type === 'rent' ? 'Rental' : 'For Sale'}
              </div>
            </div>
            <div className="bg-[--color-neutral-50] rounded-lg p-4 text-center">
              <div className="text-2xl mb-1">📅</div>
              <div className="text-sm text-[--color-neutral-600]">Year Built</div>
              <div className="font-medium text-[--color-neutral-900]">2019</div>
            </div>
            <div className="bg-[--color-neutral-50] rounded-lg p-4 text-center">
              <div className="text-2xl mb-1">🪑</div>
              <div className="text-sm text-[--color-neutral-600]">Furnishing</div>
              <div className="font-medium text-[--color-neutral-900]">Semi-furnished</div>
            </div>
            <div className="bg-[--color-neutral-50] rounded-lg p-4 text-center">
              <div className="text-2xl mb-1">🅿️</div>
              <div className="text-sm text-[--color-neutral-600]">Parking</div>
              <div className="font-medium text-[--color-neutral-900]">2 spaces</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'amenities',
      label: 'Amenities',
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {property.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-[--color-neutral-50] rounded-lg">
              <div className="text-2xl">
                {amenity === 'Parking' && '🅿️'}
                {amenity === 'Gym' && '🏋️'}
                {amenity === 'Pool' && '🏊'}
                {amenity === 'Pet Friendly' && '🐕'}
                {amenity === 'Laundry' && '🧺'}
                {amenity === 'Garage' && '🚗'}
                {amenity === 'Garden' && '🌿'}
                {amenity === 'Fireplace' && '🔥'}
                {amenity === 'School District' && '🏫'}
                {amenity === 'Concierge' && '🛎️'}
                {amenity === 'Rooftop' && '🏢'}
                {amenity === 'Valet' && '🚗'}
                {!['Parking', 'Gym', 'Pool', 'Pet Friendly', 'Laundry', 'Garage', 'Garden', 'Fireplace', 'School District', 'Concierge', 'Rooftop', 'Valet'].includes(amenity) && '✓'}
              </div>
              <span className="font-medium text-[--color-neutral-900]">{amenity}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'location',
      label: 'Location',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-[--color-neutral-900] mb-3">Address</h3>
            <p className="text-[--color-neutral-700] flex items-center">
              <span className="mr-2">📍</span>
              {property.location}
            </p>
          </div>
          
          <div className="bg-[--color-neutral-100] rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-[--color-neutral-600]">Interactive map would be displayed here</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[--color-neutral-900] mb-3">Nearby</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏪</span>
                <div>
                  <div className="font-medium text-[--color-neutral-900]">Shopping Mall</div>
                  <div className="text-sm text-[--color-neutral-600]">0.5 miles</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚇</span>
                <div>
                  <div className="font-medium text-[--color-neutral-900]">Metro Station</div>
                  <div className="text-sm text-[--color-neutral-600]">0.3 miles</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <div className="font-medium text-[--color-neutral-900]">Hospital</div>
                  <div className="text-sm text-[--color-neutral-600]">1.2 miles</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏫</span>
                <div>
                  <div className="font-medium text-[--color-neutral-900]">School</div>
                  <div className="text-sm text-[--color-neutral-600]">0.8 miles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'agent',
      label: 'Agent',
      content: (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar src={property.agent.image} alt={property.agent.name} size="xl" />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-[--color-neutral-900]">{property.agent.name}</h3>
                  {property.verified && <Badge variant="verified">✓ Verified Agent</Badge>}
                </div>
                <p className="text-[--color-neutral-600] mb-4">{property.agent.company}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-[--color-neutral-900]">4.8</div>
                    <div className="text-sm text-[--color-neutral-600]">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-[--color-neutral-900]">156</div>
                    <div className="text-sm text-[--color-neutral-600]">Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-[--color-neutral-900]">45</div>
                    <div className="text-sm text-[--color-neutral-600]">Properties</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full">
                    Contact Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    View All Properties
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Back Button */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Link href="/listings" className="inline-flex items-center text-[--color-primary] hover:underline">
            ← Back to Listings
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Image Gallery */}
        <div className="mb-6">
          <div className="grid grid-cols-4 gap-2 h-96">
            {/* Main Image */}
            <div className="col-span-3 relative rounded-lg overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
              />
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-rows-4 gap-2">
              {images.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg overflow-hidden cursor-pointer ${
                    currentImageIndex === index + 1 ? 'ring-2 ring-[--color-primary]' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index + 1)}
                >
                  <div
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h1 className="text-2xl font-bold text-[--color-neutral-900]">{property.title}</h1>
                      {property.verified && <Badge variant="verified">✓ Verified</Badge>}
                    </div>
                    <p className="text-[--color-neutral-600] flex items-center mb-2">
                      <span className="mr-2">📍</span>
                      {property.location}
                    </p>
                    <div className="text-3xl font-bold text-[--color-primary]">
                      ${property.price.toLocaleString()}
                      {property.type === 'rent' && <span className="text-lg font-normal text-[--color-neutral-600]">/month</span>}
                    </div>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="flex items-center space-x-6 py-4 border-y border-[--color-neutral-200] mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🛏️</span>
                    <span className="font-medium text-[--color-neutral-900]">{property.beds} beds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🚿</span>
                    <span className="font-medium text-[--color-neutral-900]">{property.baths} baths</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📐</span>
                    <span className="font-medium text-[--color-neutral-900]">{property.sqft} sqft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🅿️</span>
                    <span className="font-medium text-[--color-neutral-900]">2 parking</span>
                  </div>
                </div>

                {/* Tabs */}
                <Tabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card>
              <CardContent className="p-6 space-y-3">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => setShowTourModal(true)}
                >
                  Schedule Tour
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSaved(!isSaved)}
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>{isSaved ? '❤️' : '🤍'}</span>
                    <span>Save</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center space-x-2">
                    <span>📤</span>
                    <span>Share</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agent Quick Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[--color-neutral-900] mb-4">Listed by</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar src={property.agent.image} alt={property.agent.name} size="md" />
                  <div>
                    <p className="font-medium text-[--color-neutral-900]">{property.agent.name}</p>
                    <p className="text-sm text-[--color-neutral-600]">{property.agent.company}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Contact Agent
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sticky Mobile Action Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[--color-neutral-200] p-4 z-50">
          <div className="flex items-center space-x-4">
            <div>
              <div className="text-lg font-bold text-[--color-primary]">
                ${property.price.toLocaleString()}
                {property.type === 'rent' && <span className="text-sm font-normal">/mo</span>}
              </div>
            </div>
            <Button className="flex-1" onClick={() => setShowTourModal(true)}>
              Schedule Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Schedule Tour Modal */}
      <ScheduleTourModal
        isOpen={showTourModal}
        onClose={() => setShowTourModal(false)}
        propertyTitle={property.title}
      />
    </div>
  )
}