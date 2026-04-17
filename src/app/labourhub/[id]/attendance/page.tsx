'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Table } from '@/components/ui/Table';

export default function AttendancePage({ params }: { params: { id: string } }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState<string | null>(null);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [gpsLocation, setGpsLocation] = useState(false);

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Mock GPS location capture
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      () => setGpsLocation(true),
      () => setGpsLocation(false)
    );
  }, []);

  const weeklyHours = [
    { day: 'Monday', clockIn: '7:00 AM', clockOut: '4:00 PM', hours: '8.0' },
    { day: 'Tuesday', clockIn: '7:05 AM', clockOut: '4:15 PM', hours: '8.2' },
    { day: 'Wednesday', clockIn: '6:58 AM', clockOut: '4:10 PM', hours: '8.2' },
    { day: 'Thursday', clockIn: '7:02 AM', clockOut: '4:05 PM', hours: '8.1' },
    { day: 'Friday', clockIn: '7:00 AM', clockOut: '--', hours: '--' },
    { day: 'Saturday', clockIn: '--', clockOut: '--', hours: '--' },
    { day: 'Sunday', clockIn: '--', clockOut: '--', hours: '--' }
  ];

  const tableColumns = [
    { key: 'day' as const, header: 'Day' },
    { key: 'clockIn' as const, header: 'Clock In' },
    { key: 'clockOut' as const, header: 'Clock Out' },
    { 
      key: 'hours' as const, 
      header: 'Hours',
      render: (value: string) => (
        <span className={value !== '--' ? 'font-medium text-[--color-primary]' : ''}>
          {value}
        </span>
      )
    }
  ];

  const handleClockToggle = () => {
    if (isClockedIn) {
      // Clock out
      setIsClockedIn(false);
      setClockInTime(null);
    } else {
      // Clock in
      setIsClockedIn(true);
      setClockInTime(currentTime.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    }
  };

  const handlePhotoUpload = () => {
    // Mock photo upload
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setPhotoUploaded(true);
      }
    };
    input.click();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[--color-neutral-900] mb-2">
            Attendance Tracker
          </h1>
          <p className="text-[--color-neutral-600]">
            Track your work hours for Construction Laborer position
          </p>
        </div>

        {/* Current Date */}
        <Card className="mb-6">
          <CardContent className="p-6 text-center">
            <div className="text-lg font-medium text-[--color-neutral-900] mb-2">
              {formatDate(currentTime)}
            </div>
          </CardContent>
        </Card>

        {/* Digital Clock */}
        <Card className="mb-6">
          <CardContent className="p-6 text-center">
            <div className="text-6xl font-mono font-bold text-[--color-primary] mb-4">
              {formatTime(currentTime)}
            </div>
          </CardContent>
        </Card>

        {/* Clock In/Out Button */}
        <Card className="mb-6">
          <CardContent className="p-6 text-center">
            <Button
              onClick={handleClockToggle}
              variant={isClockedIn ? "danger" : "primary"}
              size="lg"
              className="w-full py-4 text-lg mb-4"
            >
              {isClockedIn ? "🔴 Clocked In - Clock Out" : "🟢 Clock In"}
            </Button>
            
            {isClockedIn && clockInTime && (
              <div className="text-[--color-success] font-medium">
                Clocked in at {clockInTime}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Site Photo Upload */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Site Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                onClick={handlePhotoUpload}
                variant="outline"
                className="w-full py-3"
              >
                📷 Upload Site Photo
                {photoUploaded && <span className="ml-2 text-[--color-success]">✓</span>}
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-sm">
                <span>📍 GPS:</span>
                {gpsLocation ? (
                  <Badge variant="success">Location Captured ✓</Badge>
                ) : (
                  <Badge variant="warning">Capturing Location...</Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Hours Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Weekly Hours</CardTitle>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[--color-neutral-600]">
                Total this week: <strong className="text-[--color-primary]">32.5 hours</strong>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <Table
              data={weeklyHours}
              columns={tableColumns}
            />
          </CardContent>
        </Card>

        {/* Status Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[--color-primary] mb-1">
                5
              </div>
              <div className="text-sm text-[--color-neutral-600]">
                Days This Week
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[--color-success] mb-1">
                98%
              </div>
              <div className="text-sm text-[--color-neutral-600]">
                Attendance Rate
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div className="bg-[--color-neutral-100] p-4 rounded-lg">
          <h4 className="font-medium text-[--color-neutral-900] mb-2">
            📋 Attendance Guidelines
          </h4>
          <ul className="text-sm text-[--color-neutral-700] space-y-1">
            <li>• Clock in when you arrive at the job site</li>
            <li>• Upload a site photo to verify your location</li>
            <li>• Clock out when you leave the site</li>
            <li>• GPS location is automatically captured for verification</li>
            <li>• Contact your supervisor for any attendance issues</li>
          </ul>
        </div>
      </div>
    </div>
  );
}