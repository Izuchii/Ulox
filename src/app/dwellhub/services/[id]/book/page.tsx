'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function BookServicePage({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [serviceAddress, setServiceAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Mock provider data
  const provider = {
    id: params.id,
    name: 'CleanPro Services',
    service: 'Deep Cleaning',
    image: 'https://picsum.photos/seed/provider1/60/60',
    rating: 4.9,
    reviews: 156
  };

  const timeSlots = [
    { id: 'morning', label: 'Morning', time: '8:00 AM - 12:00 PM', available: true },
    { id: 'afternoon', label: 'Afternoon', time: '12:00 PM - 5:00 PM', available: true },
    { id: 'evening', label: 'Evening', time: '5:00 PM - 8:00 PM', available: false }
  ];

  const pricing = {
    baseFee: 12000,
    travelFee: 2000,
    platformFee: 1000,
    get total() {
      return this.baseFee + this.travelFee + this.platformFee;
    }
  };

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

  const handleBooking = () => {
    if (!selectedDate || !selectedTimeSlot || !serviceAddress) {
      alert('Please fill in all required fields');
      return;
    }
    // In real app, would make API call here
    window.location.href = '/dwellhub/services/booking/confirmation';
  };

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6">
          <Link href={`/dwellhub/services/${params.id}`} className="text-[--color-primary] hover:underline mb-4 inline-block">
            ← Back to Provider
          </Link>
          <h1 className="text-2xl font-bold text-[--color-neutral-900]">Book Service</h1>
        </div>

        {/* Provider Mini Card */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-[--color-neutral-900]">
                  {provider.name}
                </h3>
                <p className="text-sm text-[--color-neutral-600]">{provider.service}</p>
                <div className="flex items-center gap-2 mt-1">
                  {renderStars(Math.floor(provider.rating))}
                  <span className="text-sm text-[--color-neutral-500]">
                    {provider.rating} ({provider.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Date Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
            />
          </CardContent>
        </Card>

        {/* Time Slot Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Time Slot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {timeSlots.map((slot) => (
              <div
                key={slot.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  !slot.available
                    ? 'opacity-50 cursor-not-allowed bg-[--color-neutral-100]'
                    : selectedTimeSlot === slot.id
                    ? 'border-[--color-primary] bg-[--color-primary] bg-opacity-5'
                    : 'border-[--color-neutral-200] hover:border-[--color-primary]'
                }`}
                onClick={() => slot.available && setSelectedTimeSlot(slot.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{slot.label}</div>
                    <div className="text-sm text-[--color-neutral-600]">{slot.time}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!slot.available && (
                      <Badge variant="error">Unavailable</Badge>
                    )}
                    <input
                      type="radio"
                      name="timeSlot"
                      checked={selectedTimeSlot === slot.id}
                      onChange={() => {}}
                      disabled={!slot.available}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Service Address */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Service Address *</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={serviceAddress}
              onChange={(e) => setServiceAddress(e.target.value)}
              placeholder="Enter the full address where the service will be performed"
              className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary] h-24 resize-none"
              required
            />
          </CardContent>
        </Card>

        {/* Special Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Special Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Any special requirements or instructions for the service provider"
              className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary] h-20 resize-none"
            />
          </CardContent>
        </Card>

        {/* Price Breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Price Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Base Service Fee</span>
                <span>₦{pricing.baseFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Travel Fee</span>
                <span>₦{pricing.travelFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₦{pricing.platformFee.toLocaleString()}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-[--color-primary]">
                  ₦{pricing.total.toLocaleString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms */}
        <div className="bg-[--color-neutral-50] p-4 rounded-lg mb-6">
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" required />
            <span className="text-sm text-[--color-neutral-700]">
              I agree to the{' '}
              <Link href="/terms" className="text-[--color-primary] hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-[--color-primary] hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        {/* Confirm Booking Button */}
        <Button
          onClick={handleBooking}
          className="w-full py-3 text-lg"
          disabled={!selectedDate || !selectedTimeSlot || !serviceAddress}
        >
          Confirm Booking - ₦{pricing.total.toLocaleString()}
        </Button>

        <p className="text-xs text-[--color-neutral-500] text-center mt-4">
          Your payment will be processed securely. You can cancel or reschedule up to 24 hours before the service.
        </p>
      </div>
    </div>
  );
}