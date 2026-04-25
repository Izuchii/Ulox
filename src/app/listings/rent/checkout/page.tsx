'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'

export default function RentCheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    moveInDate: '',
    duration: '12',
    utilities: true,
    paymentMethod: 'card'
  })

  // Mock property data - would come from props/params in real app
  const property = {
    id: '1',
    title: 'Modern Downtown Apartment',
    image: 'https://picsum.photos/seed/rent-property/400/300',
    address: 'Downtown District, NYC',
    monthlyRent: 2500,
    beds: 2,
    baths: 2
  }

  const calculateTotals = () => {
    const monthlyRent = property.monthlyRent
    const securityDeposit = monthlyRent * 2 // 2 months
    const legalFee = 500
    const serviceCharge = 150
    const total = monthlyRent + securityDeposit + legalFee + serviceCharge
    
    return {
      monthlyRent,
      securityDeposit,
      legalFee,
      serviceCharge,
      total
    }
  }

  const totals = calculateTotals()

  const steps = [
    { number: 1, title: 'Rental Details' },
    { number: 2, title: 'Payment Breakdown' },
    { number: 3, title: 'Review & Confirm' }
  ]

  const renderStep1 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Property Summary</CardTitle>
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
              <div className="flex space-x-4 text-sm text-[--color-neutral-600]">
                <span>🛏️ {property.beds} beds</span>
                <span>🚿 {property.baths} baths</span>
              </div>
              <div className="text-lg font-bold text-[--color-primary] mt-2">
                ${property.monthlyRent.toLocaleString()}/month
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rental Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
              Move-in Date
            </label>
            <input
              type="date"
              value={formData.moveInDate}
              onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:border-[--color-primary] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
              Lease Duration
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['6', '12', '24'].map((months) => (
                <button
                  key={months}
                  type="button"
                  onClick={() => setFormData({ ...formData, duration: months })}
                  className={`px-4 py-3 border rounded-lg text-center transition-colors ${
                    formData.duration === months
                      ? 'border-[--color-primary] bg-[--color-primary] text-white'
                      : 'border-[--color-neutral-300] hover:border-[--color-primary]'
                  }`}
                >
                  <div className="font-semibold">{months} months</div>
                  <div className="text-xs opacity-75">
                    {months === '6' && 'Short term'}
                    {months === '12' && 'Most popular'}
                    {months === '24' && 'Best value'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[--color-neutral-700] mb-3">
              Utilities Included
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, utilities: true })}
                className={`flex-1 p-4 border rounded-lg text-left transition-colors ${
                  formData.utilities
                    ? 'border-[--color-primary] bg-[--color-primary]/5'
                    : 'border-[--color-neutral-300]'
                }`}
              >
                <div className="font-medium">Yes (+$150/month)</div>
                <div className="text-sm text-[--color-neutral-600]">
                  Electricity, gas, water, internet
                </div>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, utilities: false })}
                className={`flex-1 p-4 border rounded-lg text-left transition-colors ${
                  !formData.utilities
                    ? 'border-[--color-primary] bg-[--color-primary]/5'
                    : 'border-[--color-neutral-300]'
                }`}
              >
                <div className="font-medium">No</div>
                <div className="text-sm text-[--color-neutral-600]">
                  You pay utilities separately
                </div>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between py-2">
              <span className="text-[--color-neutral-700]">First month rent</span>
              <span className="font-medium">${totals.monthlyRent.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[--color-neutral-700]">Security deposit (2 months)</span>
              <span className="font-medium">${totals.securityDeposit.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[--color-neutral-700]">Legal fee</span>
              <span className="font-medium">${totals.legalFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[--color-neutral-700]">Service charge</span>
              <span className="font-medium">${totals.serviceCharge.toLocaleString()}</span>
            </div>
            {formData.utilities && (
              <div className="flex justify-between py-2">
                <span className="text-[--color-neutral-700]">Utilities setup</span>
                <span className="font-medium">$75</span>
              </div>
            )}
            
            <div className="border-t border-[--color-neutral-200] pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total due today</span>
                <span className="text-[--color-primary]">
                  ${(totals.total + (formData.utilities ? 75 : 0)).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
              className={`p-4 border rounded-lg text-left transition-colors ${
                formData.paymentMethod === 'card'
                  ? 'border-[--color-primary] bg-[--color-primary]/5'
                  : 'border-[--color-neutral-300]'
              }`}
            >
              <div className="font-medium">💳 Credit/Debit Card</div>
              <div className="text-sm text-[--color-neutral-600]">Instant processing</div>
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, paymentMethod: 'bank' })}
              className={`p-4 border rounded-lg text-left transition-colors ${
                formData.paymentMethod === 'bank'
                  ? 'border-[--color-primary] bg-[--color-primary]/5'
                  : 'border-[--color-neutral-300]'
              }`}
            >
              <div className="font-medium">🏦 Bank Transfer</div>
              <div className="text-sm text-[--color-neutral-600]">1-2 business days</div>
            </button>
          </div>

          {formData.paymentMethod === 'card' && (
            <div className="space-y-4 pt-4 border-t border-[--color-neutral-200]">
              <div className="grid grid-cols-2 gap-4">
                <Input label="Card Number" placeholder="1234 5678 9012 3456" />
                <Input label="Expiry Date" placeholder="MM/YY" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input label="CVV" placeholder="123" />
                <Input label="Name on Card" placeholder="John Doe" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Review & Confirm</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-[--color-neutral-900] mb-3">Property Details</h4>
            <div className="bg-[--color-neutral-50] rounded-lg p-4">
              <div className="flex space-x-4">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h5 className="font-medium">{property.title}</h5>
                  <p className="text-sm text-[--color-neutral-600]">{property.address}</p>
                  <p className="text-sm font-medium text-[--color-primary]">
                    ${property.monthlyRent.toLocaleString()}/month
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[--color-neutral-900] mb-3">Lease Terms</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[--color-neutral-600]">Move-in Date:</span>
                <span className="ml-2 font-medium">
                  {formData.moveInDate || 'Not selected'}
                </span>
              </div>
              <div>
                <span className="text-[--color-neutral-600]">Duration:</span>
                <span className="ml-2 font-medium">{formData.duration} months</span>
              </div>
              <div>
                <span className="text-[--color-neutral-600]">Utilities:</span>
                <span className="ml-2 font-medium">
                  {formData.utilities ? 'Included' : 'Not included'}
                </span>
              </div>
              <div>
                <span className="text-[--color-neutral-600]">Payment:</span>
                <span className="ml-2 font-medium">
                  {formData.paymentMethod === 'card' ? 'Credit/Debit Card' : 'Bank Transfer'}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[--color-neutral-900] mb-3">Payment Summary</h4>
            <div className="bg-[--color-neutral-50] rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Monthly rent</span>
                <span>${totals.monthlyRent.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Security deposit</span>
                <span>${totals.securityDeposit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Fees</span>
                <span>${(totals.legalFee + totals.serviceCharge).toLocaleString()}</span>
              </div>
              <div className="border-t border-[--color-neutral-200] pt-2 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-[--color-primary]">
                  ${(totals.total + (formData.utilities ? 75 : 0)).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-sm text-[--color-neutral-700]">
              I agree to the{' '}
              <Link href="/terms" className="text-[--color-primary] hover:underline">
                terms and conditions
              </Link>{' '}
              and{' '}
              <Link href="/rental-agreement" className="text-[--color-primary] hover:underline">
                rental agreement
              </Link>
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Header */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <Link href="/listings" className="text-[--color-primary] hover:underline">
              ← Back to Listings
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-[--color-neutral-900] mt-2">
            Complete Your Rental
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.number
                    ? 'bg-[--color-primary] text-white'
                    : 'bg-[--color-neutral-300] text-[--color-neutral-600]'
                } font-medium`}>
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-[--color-neutral-900]' : 'text-[--color-neutral-500]'
                  }`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-[--color-primary]' : 'bg-[--color-neutral-300]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>

        {/* Navigation */}
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
            {currentStep < 3 ? (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={currentStep === 1 && !formData.moveInDate}
              >
                Continue
              </Button>
            ) : (
              <Button size="lg">
                Confirm & Pay ${(totals.total + (formData.utilities ? 75 : 0)).toLocaleString()}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}