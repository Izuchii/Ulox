'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { ContactRevealModal } from '@/components/modals/ContactRevealModal'
import { roommates } from '@/lib/sample-data'

export default function RoommateDetailPage() {
  const params = useParams()
  const [showContactModal, setShowContactModal] = useState(false)
  const [contactRevealed, setContactRevealed] = useState(false)

  const roommate = roommates.find(r => r.id === params.id)

  if (!roommate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[--color-neutral-900] mb-2">Roommate Not Found</h1>
          <p className="text-[--color-neutral-600] mb-4">The profile you're looking for doesn't exist.</p>
          <Link href="/listings/rent/roommates">
            <Button>Back to Roommate Search</Button>
          </Link>
        </div>
      </div>
    )
  }

  const compatibilityBreakdown = [
    { category: 'Lifestyle', score: 95 },
    { category: 'Cleanliness', score: 92 },
    { category: 'Schedule', score: 88 },
    { category: 'Budget', score: 96 },
    { category: 'Interests', score: 85 }
  ]

  const traitChips = [
    'Organized', 'Social', 'Respectful', 'Quiet Hours', 'Cooking Enthusiast', 
    'Fitness Minded', 'Tech Savvy', 'Creative', 'Environmental Conscious'
  ]

  const mockContactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'emma@example.com'
  }

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Back Button */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Link href="/listings/rent/roommates" className="inline-flex items-center text-[--color-primary] hover:underline">
            ← Back to Roommate Search
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <Avatar src={roommate.image} alt={roommate.name} size="xl" className="mx-auto md:mx-0" />
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-3 mb-2">
                  <h1 className="text-2xl font-bold text-[--color-neutral-900]">
                    {roommate.name}, {roommate.age}
                  </h1>
                  <div className="flex justify-center md:justify-start items-center space-x-2 mt-2 md:mt-0">
                    <Badge variant="verified">✓ Verified</Badge>
                    <Badge variant="success">{roommate.compatibility}% Match</Badge>
                  </div>
                </div>
                
                <p className="text-[--color-neutral-600] mb-3">
                  📍 Currently in {roommate.location}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-semibold text-[--color-primary] text-lg">
                      ${roommate.budget}
                    </div>
                    <div className="text-sm text-[--color-neutral-600]">Max Budget</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[--color-neutral-900] text-lg">25</div>
                    <div className="text-sm text-[--color-neutral-600]">Age</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[--color-neutral-900] text-lg">Marketing</div>
                    <div className="text-sm text-[--color-neutral-600]">Profession</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[--color-neutral-900] text-lg">Feb 2024</div>
                    <div className="text-sm text-[--color-neutral-600]">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle>About {roommate.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[--color-neutral-700] leading-relaxed mb-4">
                  {roommate.bio}
                </p>
                <p className="text-[--color-neutral-700] leading-relaxed">
                  I'm looking for a clean, respectful roommate who values both social time and personal space. 
                  I work standard hours and enjoy cooking, so sharing kitchen responsibilities would be great. 
                  I'm pet-friendly and believe in open communication to maintain a harmonious living environment.
                </p>
              </CardContent>
            </Card>

            {/* Looking For */}
            <Card>
              <CardHeader>
                <CardTitle>What {roommate.name} is Looking For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[--color-neutral-700]">Location Preference</label>
                      <p className="text-[--color-neutral-900]">Manhattan, Brooklyn</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[--color-neutral-700]">Budget Range</label>
                      <p className="text-[--color-neutral-900]">$800 - $1,200/month</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[--color-neutral-700]">Move-in Date</label>
                      <p className="text-[--color-neutral-900]">February 1, 2024</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[--color-neutral-700]">Lease Duration</label>
                      <p className="text-[--color-neutral-900]">12 months</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Lifestyle & Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {roommate.lifestyle.map((trait, index) => (
                    <Badge key={index} variant="default">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compatibility Score */}
            {roommate.compatibility && (
              <Card>
                <CardHeader>
                  <CardTitle>Compatibility Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-[--color-success]">
                        {roommate.compatibility}% Compatible
                      </span>
                      <Badge variant="success">Excellent Match</Badge>
                    </div>
                    <div className="text-sm text-[--color-neutral-600]">
                      Based on lifestyle, preferences, and living habits
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {compatibilityBreakdown.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[--color-neutral-700]">{item.category}</span>
                          <span className="font-medium text-[--color-neutral-900]">{item.score}%</span>
                        </div>
                        <div className="h-2 bg-[--color-neutral-200] rounded-full">
                          <div 
                            className="h-2 bg-[--color-success] rounded-full"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* What they're like */}
            <Card>
              <CardHeader>
                <CardTitle>What {roommate.name} is like</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {traitChips.map((trait, index) => (
                    <Badge key={index} variant="default" className="text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Section */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[--color-neutral-900] mb-4">Get in Touch</h3>
                
                {!contactRevealed ? (
                  <div className="space-y-4">
                    <div className="bg-[--color-neutral-100] rounded-lg p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-[--color-neutral-600]">Phone:</span>
                          <span className="text-sm text-[--color-neutral-400]">••• ••• ••••</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[--color-neutral-600]">Email:</span>
                          <span className="text-sm text-[--color-neutral-400]">•••••@••••.com</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      onClick={() => setShowContactModal(true)}
                    >
                      Reveal Contact Info
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-[--color-success]/5 border border-[--color-success]/20 rounded-lg p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-[--color-neutral-600]">Phone:</span>
                          <span className="text-sm font-medium text-[--color-neutral-900]">{mockContactInfo.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[--color-neutral-600]">Email:</span>
                          <span className="text-sm font-medium text-[--color-neutral-900]">{mockContactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full">
                        📞 Call
                      </Button>
                      <Button variant="outline" className="w-full">
                        ✉️ Email
                      </Button>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-[--color-neutral-200]">
                  <Button variant="outline" className="w-full text-[--color-neutral-600]">
                    📝 Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Safety */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[--color-neutral-900] mb-4">Safety & Trust</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[--color-success]">✓</span>
                    <span className="text-sm text-[--color-neutral-700]">Identity Verified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[--color-success]">✓</span>
                    <span className="text-sm text-[--color-neutral-700]">Background Checked</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[--color-success]">✓</span>
                    <span className="text-sm text-[--color-neutral-700]">References Available</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-[--color-neutral-200]">
                  <button className="text-sm text-[--color-neutral-500] hover:text-[--color-neutral-700]">
                    Report this user
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Reveal Modal */}
      <ContactRevealModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        contactName={roommate.name}
        contactImage={roommate.image}
        contactInfo={mockContactInfo}
        onReveal={() => {
          setContactRevealed(true)
          setShowContactModal(false)
        }}
      />
    </div>
  )
}