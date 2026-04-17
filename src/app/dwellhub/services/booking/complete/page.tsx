'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ServiceCompletePage() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [selectedTip, setSelectedTip] = useState('');
  const [customTip, setCustomTip] = useState('');

  const booking = {
    id: 'BK-20240417-0023',
    provider: {
      name: 'CleanPro Services',
      service: 'Deep Cleaning',
      image: 'https://picsum.photos/seed/provider1/60/60'
    },
    total: 15000
  };

  const tipOptions = [
    { id: '500', label: '₦500', value: 500 },
    { id: '1000', label: '₦1,000', value: 1000 },
    { id: '2000', label: '₦2,000', value: 2000 },
    { id: 'custom', label: 'Custom', value: 0 },
    { id: 'skip', label: 'Skip', value: 0 }
  ];

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  const getTipAmount = () => {
    if (selectedTip === 'custom') {
      return parseFloat(customTip) || 0;
    }
    const tipOption = tipOptions.find(tip => tip.id === selectedTip);
    return tipOption ? tipOption.value : 0;
  };

  const getTotalPayment = () => {
    return booking.total + getTipAmount();
  };

  const handleSubmitReview = () => {
    if (rating === 0) {
      alert('Please provide a rating before submitting');
      return;
    }

    // In real app, would make API call to submit review
    const reviewData = {
      bookingId: booking.id,
      rating,
      review,
      tip: getTipAmount()
    };

    console.log('Submitting review:', reviewData);
    alert('Thank you for your feedback!');
    
    // Redirect to bookings page
    window.location.href = '/profile/bookings';
  };

  const renderStars = () => {
    return (
      <div className="flex justify-center gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <button
            key={i}
            onClick={() => handleStarClick(i)}
            className={`text-4xl transition-colors hover:scale-110 transform ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  const getRatingText = () => {
    const ratingTexts = {
      1: 'Poor',
      2: 'Fair',
      3: 'Good',
      4: 'Very Good',
      5: 'Excellent'
    };
    return ratingTexts[rating as keyof typeof ratingTexts] || '';
  };

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[--color-success] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">✅</span>
          </div>
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-2">
            Service Completed
          </h1>
          <p className="text-[--color-neutral-600]">
            How was your experience?
          </p>
        </div>

        {/* Provider Summary */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <img
                src={booking.provider.image}
                alt={booking.provider.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-[--color-neutral-900]">
                  {booking.provider.name}
                </h3>
                <p className="text-[--color-neutral-600]">{booking.provider.service}</p>
                <p className="text-sm text-[--color-neutral-500]">
                  Booking: {booking.id}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rating Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-center">Rate Your Experience</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            {renderStars()}
            {rating > 0 && (
              <p className="text-lg font-medium text-[--color-primary] mb-4">
                {getRatingText()}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Review Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Leave a Review</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience with other customers (optional)"
              className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary] h-24 resize-none"
              maxLength={500}
            />
            <div className="text-right text-xs text-[--color-neutral-500] mt-2">
              {review.length}/500 characters
            </div>
          </CardContent>
        </Card>

        {/* Tip Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add a Tip (Optional)</CardTitle>
            <p className="text-sm text-[--color-neutral-600]">
              Show your appreciation for excellent service
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {tipOptions.map((tip) => (
                <button
                  key={tip.id}
                  onClick={() => setSelectedTip(tip.id)}
                  className={`p-3 border rounded-lg font-medium transition-colors ${
                    selectedTip === tip.id
                      ? 'border-[--color-primary] bg-[--color-primary] bg-opacity-10 text-[--color-primary]'
                      : 'border-[--color-neutral-300] hover:border-[--color-primary]'
                  }`}
                >
                  {tip.label}
                </button>
              ))}
            </div>

            {selectedTip === 'custom' && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                  Custom Tip Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-[--color-neutral-500]">₦</span>
                  <input
                    type="number"
                    value={customTip}
                    onChange={(e) => setCustomTip(e.target.value)}
                    placeholder="0"
                    className="w-full pl-8 pr-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                    min="0"
                    max="10000"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Payment Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Total Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>₦{booking.total.toLocaleString()}</span>
              </div>
              {getTipAmount() > 0 && (
                <div className="flex justify-between text-[--color-success]">
                  <span>Tip</span>
                  <span>₦{getTipAmount().toLocaleString()}</span>
                </div>
              )}
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-[--color-primary]">
                  ₦{getTotalPayment().toLocaleString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button
          onClick={handleSubmitReview}
          className="w-full py-3 text-lg mb-6"
          disabled={rating === 0}
        >
          Submit Review
        </Button>

        <div className="text-center">
          <p className="text-xs text-[--color-neutral-500]">
            Your feedback helps us improve our services and helps other customers make informed decisions
          </p>
        </div>
      </div>
    </div>
  );
}