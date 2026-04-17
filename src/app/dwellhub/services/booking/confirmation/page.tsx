'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function BookingConfirmationPage() {
  const booking = {
    id: 'BK-20240417-0023',
    provider: {
      name: 'CleanPro Services',
      service: 'Deep Cleaning',
      image: 'https://picsum.photos/seed/provider1/60/60'
    },
    date: 'Thursday, April 18, 2024',
    time: '2:00 PM - 6:00 PM',
    address: '123 Main Street, Downtown, Lagos State',
    status: 'Confirmed',
    total: 15000
  };

  const addToCalendar = () => {
    // In real app, would generate calendar event
    const event = {
      title: `${booking.provider.service} - ${booking.provider.name}`,
      start: new Date('2024-04-18T14:00:00'),
      end: new Date('2024-04-18T18:00:00'),
      location: booking.address,
      description: `Service booking ${booking.id}`
    };
    
    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/${event.end.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[--color-success] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">✅</span>
          </div>
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-[--color-neutral-600]">
            Your service has been successfully booked
          </p>
        </div>

        {/* Booking Reference */}
        <Card className="mb-6">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-[--color-neutral-500] mb-2">
              Booking Reference
            </p>
            <div className="text-2xl font-mono font-bold text-[--color-primary] mb-4">
              {booking.id}
            </div>
            <p className="text-sm text-[--color-neutral-600]">
              Save this reference number for future communication
            </p>
          </CardContent>
        </Card>

        {/* Booking Details */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
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
                <Badge variant="success" className="mt-2">
                  {booking.status}
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg">📅</span>
                <div>
                  <p className="font-medium">{booking.date}</p>
                  <p className="text-sm text-[--color-neutral-600]">{booking.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="font-medium">Service Location</p>
                  <p className="text-sm text-[--color-neutral-600]">{booking.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">💰</span>
                <div>
                  <p className="font-medium">Total Amount</p>
                  <p className="text-sm text-[--color-neutral-600]">
                    ₦{booking.total.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-4 mb-6">
          <Button onClick={addToCalendar} variant="outline" className="w-full">
            📅 Add to Calendar
          </Button>
          
          <Button variant="outline" className="w-full">
            📞 Contact Provider
          </Button>
        </div>

        {/* Next Steps */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[--color-neutral-900] mb-4">
              What happens next?
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[--color-primary] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-[--color-primary]">1</span>
                </div>
                <div>
                  <p className="font-medium">Provider Confirmation</p>
                  <p className="text-sm text-[--color-neutral-600]">
                    The service provider will contact you within 2 hours to confirm details
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[--color-primary] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-[--color-primary]">2</span>
                </div>
                <div>
                  <p className="font-medium">Service Reminder</p>
                  <p className="text-sm text-[--color-neutral-600]">
                    You'll receive a reminder 24 hours before your scheduled service
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[--color-primary] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-[--color-primary]">3</span>
                </div>
                <div>
                  <p className="font-medium">Service Delivery</p>
                  <p className="text-sm text-[--color-neutral-600]">
                    The provider will arrive at your location at the scheduled time
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/profile/bookings" className="flex-1">
            <Button variant="outline" className="w-full">
              View All Bookings
            </Button>
          </Link>
          <Link href="/dwellhub/services" className="flex-1">
            <Button className="w-full">
              Book Another Service
            </Button>
          </Link>
        </div>

        {/* Help Section */}
        <div className="text-center mt-8 pt-6 border-t border-[--color-neutral-200]">
          <p className="text-sm text-[--color-neutral-600] mb-3">
            Need help with your booking?
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/support/chat" className="text-[--color-primary] hover:underline text-sm">
              Live Chat
            </Link>
            <Link href="/support/faq" className="text-[--color-primary] hover:underline text-sm">
              FAQ
            </Link>
            <Link href="tel:+2348012345678" className="text-[--color-primary] hover:underline text-sm">
              Call Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}