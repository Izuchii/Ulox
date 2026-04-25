'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { ProgressTracker } from '@/components/ui/ProgressTracker'
import { ConveyancingTracker } from '@/components/ConveyancingTracker'

export default function BuyCheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    offerPrice: '',
    offerValidity: '7',
    depositAmount: '',
    financing: 'mortgage'
  })

  // Mock property data
  const property = {
    id: '3',
    title: 'Family Home with Garden',
    image: 'https://picsum.photos/seed/buy-property/400/300',
    address: 'Suburban Heights, TX',
    listingPrice: 450000,
    beds: 4,
    baths: 3,
    sqft: 2500
  }

  const purchaseSteps = [
    {
      id: 'offer',
      label: 'Make Offer',
      status: (currentStep > 1 ? 'completed' : 'current') as 'completed' | 'current' | 'pending'
    },
    {
      id: 'deposit',
      label: 'Deposit',
      status: (currentStep > 2 ? 'completed' : currentStep === 2 ? 'current' : 'pending') as 'completed' | 'current' | 'pending'
    },
    {
      id: 'title-check',
      label: 'Title Check',
      status: (currentStep > 3 ? 'completed' : currentStep === 3 ? 'current' : 'pending') as 'completed' | 'current' | 'pending'
    },
    {
      id: 'conveyancing',
      label: 'Conveyancing',
      status: (currentStep > 4 ? 'completed' : currentStep === 4 ? 'current' : 'pending') as 'completed' | 'current' | 'pending'
    },
    {
      id: 'registry',
      label: 'Registry',
      status: (currentStep > 5 ? 'completed' : currentStep === 5 ? 'current' : 'pending') as 'completed' | 'current' | 'pending'
    },
    {
      id: 'settlement',
      label: 'Settlement',
      status: (currentStep === 6 ? 'completed' : 'pending') as 'completed' | 'current' | 'pending'
    }
  ]

  const conveyancingSteps = [
    {
      id: 'offer-accepted',
      label: 'Offer Accepted',
      status: 'completed' as const,
      description: 'Your offer has been accepted by the seller',
      date: '2024-12-10'
    },
    {
      id: 'deposit-paid', 
      label: 'Deposit Paid',
      status: 'completed' as const,
      description: 'Initial deposit secured in escrow',
      date: '2024-12-11'
    },
    {
      id: 'title-verification',
      label: 'Title Verification',
      status: 'current' as const,
      description: 'Property title is being verified',
      date: '2024-12-15'
    },
    {
      id: 'conveyancing',
      label: 'Conveyancing Process',
      status: 'pending' as const,
      description: 'Legal transfer of property ownership'
    },
    {
      id: 'registry-lodged',
      label: 'Registry Lodged', 
      status: 'pending' as const,
      description: 'Property registration with authorities'
    },
    {
      id: 'settlement',
      label: 'Settlement Complete',
      status: 'pending' as const,
      description: 'Final settlement and key handover'
    }
  ]

  const renderStep1 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Property Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <img
              src={property.image}
              alt={property.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-[--color-neutral-900] mb-1">
                {property.title}
              </h3>
              <p className="text-sm text-[--color-neutral-600] mb-2">
                📍 {property.address}
              </p>
              <div className="flex space-x-4 text-sm text-[--color-neutral-600] mb-2">
                <span>🛏️ {property.beds} beds</span>
                <span>🚿 {property.baths} baths</span>
                <span>📐 {property.sqft} sqft</span>
              </div>
              <div className="text-lg font-bold text-[--color-primary]">
                Listed at ${property.listingPrice.toLocaleString()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Make Your Offer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Input
              label="Offer Price"
              type="number"
              placeholder="Enter your offer"
              value={formData.offerPrice}
              onChange={(e) => setFormData({ ...formData, offerPrice: e.target.value })}
            />
            <p className="text-sm text-[--color-neutral-600] mt-1">
              Listed price: ${property.listingPrice.toLocaleString()}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
              Offer Valid For
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['3', '7', '14'].map((days) => (
                <button
                  key={days}
                  type="button"
                  onClick={() => setFormData({ ...formData, offerValidity: days })}
                  className={`px-4 py-3 border rounded-lg text-center transition-colors ${
                    formData.offerValidity === days
                      ? 'border-[--color-primary] bg-[--color-primary] text-white'
                      : 'border-[--color-neutral-300] hover:border-[--color-primary]'
                  }`}
                >
                  <div className="font-semibold">{days} days</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[--color-neutral-50] rounded-lg p-4">
            <h4 className="font-medium text-[--color-neutral-900] mb-2">Offer Terms</h4>
            <ul className="text-sm text-[--color-neutral-700] space-y-1">
              <li>• Subject to finance approval</li>
              <li>• Subject to satisfactory building inspection</li>
              <li>• Deposit: 10% of purchase price</li>
              <li>• Settlement: 30 days from acceptance</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Deposit First - Secure Your Purchase</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-[--color-primary]/10 to-[--color-success]/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[--color-neutral-900] mb-2">
              🛡️ Ulox Deposit Protection
            </h3>
            <p className="text-[--color-neutral-700] mb-4">
              Your deposit is held securely in escrow until all conditions are met. 
              If the purchase doesn't proceed for valid reasons, your deposit is fully refunded.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-[--color-success]">✓</span>
                <span>Escrow protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[--color-success]">✓</span>
                <span>Full refund guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[--color-success]">✓</span>
                <span>Licensed escrow agent</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[--color-success]">✓</span>
                <span>24/7 support</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[--color-neutral-900] mb-4">Deposit Amount</h4>
            <div className="bg-[--color-neutral-50] rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-[--color-neutral-700]">
                  10% of offer price (${formData.offerPrice || '0'})
                </span>
                <span className="text-2xl font-bold text-[--color-primary]">
                  ${formData.offerPrice ? (parseInt(formData.offerPrice) * 0.1).toLocaleString() : '0'}
                </span>
              </div>
            </div>
            <p className="text-sm text-[--color-neutral-600]">
              This deposit will be held in our secure escrow account and applied to your purchase at settlement.
            </p>
          </div>

          <div className="border border-[--color-warning]/30 bg-[--color-warning]/5 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="text-[--color-warning] text-lg">⚠️</span>
              <div>
                <p className="text-sm font-medium text-[--color-warning]">Important Notice</p>
                <p className="text-sm text-[--color-neutral-700] mt-1">
                  By proceeding with the deposit, you confirm your serious intent to purchase this property. 
                  The deposit may be forfeited if you withdraw without valid contractual grounds.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Title Verification in Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[--color-warning]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-[--color-warning] border-t-transparent"></div>
            </div>
            <h3 className="text-lg font-semibold text-[--color-neutral-900] mb-2">
              Verifying Property Title
            </h3>
            <p className="text-[--color-neutral-600] mb-4">
              Our legal team is conducting a comprehensive title search to ensure clear ownership.
            </p>
            <Badge variant="warning">Status: In Progress</Badge>
          </div>

          <div className="bg-[--color-neutral-50] rounded-lg p-4">
            <h4 className="font-medium text-[--color-neutral-900] mb-3">Expected Completion</h4>
            <div className="flex items-center space-x-2 text-[--color-neutral-700]">
              <span>📅</span>
              <span>December 20, 2024</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <ConveyancingTracker steps={conveyancingSteps} />
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Conveyancing Process</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-[--color-success]/5 border border-[--color-success]/20 rounded-lg">
            <div className="w-12 h-12 bg-[--color-success] rounded-full flex items-center justify-center text-white">
              👨‍⚖️
            </div>
            <div>
              <h3 className="font-semibold text-[--color-neutral-900]">Solicitor Assigned</h3>
              <p className="text-[--color-neutral-600]">Sarah Johnson, Conveyancing Specialist</p>
              <p className="text-sm text-[--color-neutral-500]">Licensed Conveyancer #CV12345</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[--color-neutral-900] mb-3">Document Checklist</h4>
            <div className="space-y-2">
              {[
                { name: 'Contract of Sale', status: 'completed' },
                { name: 'Property Certificate', status: 'completed' },
                { name: 'Building Inspection Report', status: 'current' },
                { name: 'Finance Approval', status: 'pending' },
                { name: 'Insurance Confirmation', status: 'pending' }
              ].map((doc, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <span className="text-[--color-neutral-700]">{doc.name}</span>
                  <Badge 
                    variant={
                      doc.status === 'completed' ? 'success' : 
                      doc.status === 'current' ? 'warning' : 'default'
                    }
                  >
                    {doc.status === 'completed' ? 'Complete' :
                     doc.status === 'current' ? 'In Progress' : 'Pending'}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[--color-neutral-50] rounded-lg p-4">
            <h4 className="font-medium text-[--color-neutral-900] mb-2">Latest Update</h4>
            <p className="text-sm text-[--color-neutral-700] mb-2">
              Building inspection scheduled for December 18, 2024. Inspector will contact you directly to arrange access.
            </p>
            <p className="text-xs text-[--color-neutral-500]">
              Updated 2 hours ago by Sarah Johnson
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderStep5 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Registry Lodgement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center py-6">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-lg font-semibold text-[--color-neutral-900] mb-2">
              Lodged with Government Registry
            </h3>
            <p className="text-[--color-neutral-600]">
              Your property purchase has been officially lodged with the state registry for processing.
            </p>
          </div>

          <div className="bg-[--color-neutral-50] rounded-lg p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-[--color-neutral-600]">Lodgement Number:</span>
              <span className="font-mono text-[--color-neutral-900]">REG-2024-456789</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[--color-neutral-600]">Lodged Date:</span>
              <span className="text-[--color-neutral-900]">December 15, 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[--color-neutral-600]">Expected Registration:</span>
              <span className="text-[--color-neutral-900]">December 22, 2024</span>
            </div>
          </div>

          <div className="border border-[--color-primary]/30 bg-[--color-primary]/5 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <span>🔗</span>
              <span className="font-medium text-[--color-primary]">Track Progress Online</span>
            </div>
            <p className="text-sm text-[--color-neutral-700] mb-3">
              You can track the registration progress on the government portal using your lodgement number.
            </p>
            <Button variant="outline" size="sm">
              View on Government Portal
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderStep6 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <CardTitle className="text-2xl text-[--color-success]">
            Congratulations! Purchase Complete
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-[--color-neutral-700] mb-4">
              Welcome to your new home! The property purchase has been successfully completed.
            </p>
            <Badge variant="success" className="text-lg px-4 py-2">
              🔑 Keys Ready for Collection
            </Badge>
          </div>

          <div className="bg-[--color-success]/5 border border-[--color-success]/20 rounded-lg p-6">
            <h4 className="font-semibold text-[--color-neutral-900] mb-3">Key Handover Details</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[--color-neutral-600]">Collection Address:</span>
                <span className="text-[--color-neutral-900]">{property.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[--color-neutral-600]">Available From:</span>
                <span className="text-[--color-neutral-900]">December 23, 2024 at 10:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[--color-neutral-600]">Contact Person:</span>
                <span className="text-[--color-neutral-900]">Sarah Johnson - (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="bg-[--color-neutral-50] rounded-lg p-4">
            <h4 className="font-medium text-[--color-neutral-900] mb-3">Your Certificate of Ownership</h4>
            <div className="bg-white border-2 border-dashed border-[--color-neutral-300] rounded-lg p-4 text-center">
              <div className="text-4xl mb-2">📜</div>
              <p className="text-[--color-neutral-700] mb-3">
                Certificate of Title will be available for download within 48 hours
              </p>
              <Button variant="outline" size="sm" disabled>
                Download Certificate (Coming Soon)
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="mr-3">
              Schedule Key Collection
            </Button>
            <Button variant="outline" size="lg">
              View Property Portal
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Header */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <Link href="/listings" className="text-[--color-primary] hover:underline">
              ← Back to Listings
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-[--color-neutral-900] mt-2">
            Property Purchase Process
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Progress Tracker */}
        <div className="mb-8">
          <ProgressTracker steps={purchaseSteps} />
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
          {currentStep === 6 && renderStep6()}
        </div>

        {/* Navigation */}
        {currentStep < 6 && (
          <div className="flex justify-between">
            <div>
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Previous
                </Button>
              )}
            </div>
            
            <div>
              {currentStep === 1 && (
                <Button
                  onClick={() => setCurrentStep(2)}
                  disabled={!formData.offerPrice}
                >
                  Submit Offer
                </Button>
              )}
              {currentStep === 2 && (
                <Button onClick={() => setCurrentStep(3)}>
                  Pay Deposit ${formData.offerPrice ? (parseInt(formData.offerPrice) * 0.1).toLocaleString() : '0'}
                </Button>
              )}
              {currentStep > 2 && currentStep < 6 && (
                <Button onClick={() => setCurrentStep(currentStep + 1)}>
                  Next Step
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}