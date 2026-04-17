'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [profileData, setProfileData] = useState({
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://picsum.photos/seed/user1/150/150'
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    marketing: false,
    bookingUpdates: true,
    priceAlerts: true,
    newListings: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showActivity: true,
    dataSharing: false,
    targetedAds: true
  });

  const [savedCards] = useState([
    {
      id: '1',
      type: 'Visa',
      lastFour: '4567',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: '2', 
      type: 'Mastercard',
      lastFour: '8901',
      expiry: '08/26',
      isDefault: false
    }
  ]);

  const tabs = [
    { id: 'account', label: 'Account', icon: '👤' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'privacy', label: 'Privacy', icon: '🔒' },
    { id: 'payment', label: 'Payment', icon: '💳' },
    { id: 'security', label: 'Security', icon: '🛡️' }
  ];

  const handleProfileUpdate = () => {
    // In real app, would call API
    alert('Profile updated successfully!');
  };

  const handleNotificationToggle = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handlePrivacyToggle = (key: string) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Photo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <img
                    src={profileData.avatar}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <Button variant="outline" size="sm" className="mb-2">
                      Change Photo
                    </Button>
                    <p className="text-sm text-[--color-neutral-600]">
                      JPG, PNG up to 5MB
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                  />
                </div>
                <Button onClick={handleProfileUpdate}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 'notifications':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <p className="text-sm text-[--color-neutral-600]">
                Choose how you want to be notified about updates and activities
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium text-[--color-neutral-900] mb-4">Communication</h4>
                <div className="space-y-4">
                  {[
                    { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
                    { key: 'sms', label: 'SMS Notifications', desc: 'Receive important updates via text' },
                    { key: 'push', label: 'Push Notifications', desc: 'Browser and mobile push notifications' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-[--color-neutral-600]">{item.desc}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[item.key as keyof typeof notifications] as boolean}
                          onChange={() => handleNotificationToggle(item.key)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[--color-primary]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[--color-neutral-900] mb-4">Content</h4>
                <div className="space-y-4">
                  {[
                    { key: 'bookingUpdates', label: 'Booking Updates', desc: 'Service confirmations and reminders' },
                    { key: 'priceAlerts', label: 'Price Alerts', desc: 'Notify when saved items go on sale' },
                    { key: 'newListings', label: 'New Listings', desc: 'Properties matching your interests' },
                    { key: 'marketing', label: 'Marketing Communications', desc: 'Promotions and special offers' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-[--color-neutral-600]">{item.desc}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[item.key as keyof typeof notifications] as boolean}
                          onChange={() => handleNotificationToggle(item.key)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[--color-primary]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'privacy':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <p className="text-sm text-[--color-neutral-600]">
                Control your privacy and data sharing preferences
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                  Profile Visibility
                </label>
                <select
                  value={privacy.profileVisibility}
                  onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value})}
                  className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                >
                  <option value="public">Public - Anyone can see your profile</option>
                  <option value="users">Users Only - Only registered users</option>
                  <option value="private">Private - Only you can see your profile</option>
                </select>
              </div>

              <div className="space-y-4">
                {[
                  { key: 'showActivity', label: 'Show Activity Status', desc: 'Let others see when you\'re active' },
                  { key: 'dataSharing', label: 'Anonymous Data Sharing', desc: 'Help improve our services' },
                  { key: 'targetedAds', label: 'Personalized Ads', desc: 'Show ads based on your interests' }
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-[--color-neutral-600]">{item.desc}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacy[item.key as keyof typeof privacy] as boolean}
                        onChange={() => handlePrivacyToggle(item.key)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[--color-primary]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <p className="text-sm text-[--color-neutral-600]">
                  Manage your saved payment methods
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedCards.map((card) => (
                    <div key={card.id} className="flex items-center justify-between p-4 border border-[--color-neutral-200] rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-[--color-primary] bg-opacity-10 rounded flex items-center justify-center">
                          <span className="text-xs font-medium">💳</span>
                        </div>
                        <div>
                          <div className="font-medium">
                            {card.type} •••• {card.lastFour}
                          </div>
                          <div className="text-sm text-[--color-neutral-600]">
                            Expires {card.expiry}
                          </div>
                        </div>
                        {card.isDefault && (
                          <Badge variant="default" className="text-xs">Default</Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">Remove</Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full mt-4">
                    + Add New Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Password & Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-[--color-neutral-900] mb-4">Change Password</h4>
                  <div className="space-y-4">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                    />
                    <Button>Update Password</Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-[--color-neutral-900] mb-4">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Enable 2FA</div>
                      <div className="text-sm text-[--color-neutral-600]">
                        Add an extra layer of security to your account
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-[--color-neutral-900] mb-4">Active Sessions</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-[--color-neutral-50] rounded-lg">
                      <div>
                        <div className="font-medium">Current Session</div>
                        <div className="text-sm text-[--color-neutral-600]">
                          Chrome on Mac • New York, NY • Now
                        </div>
                      </div>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[--color-neutral-50] rounded-lg">
                      <div>
                        <div className="font-medium">Mobile App</div>
                        <div className="text-sm text-[--color-neutral-600]">
                          iPhone • 2 hours ago
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Revoke</Button>
                    </div>
                  </div>
                  <Button variant="danger" className="w-full mt-4">
                    Sign Out All Other Devices
                  </Button>
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/profile" className="text-[--color-primary] hover:underline mb-4 inline-block">
            ← Back to Profile
          </Link>
          <h1 className="text-2xl font-bold text-[--color-neutral-900]">Settings</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-64">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-[--color-primary] bg-opacity-10 text-[--color-primary]'
                          : 'text-[--color-neutral-700] hover:bg-[--color-neutral-100]'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Tab Navigation - Mobile */}
          <div className="lg:hidden mb-6">
            <div className="flex overflow-x-auto gap-2 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[--color-primary] text-white'
                      : 'bg-white text-[--color-neutral-700] border border-[--color-neutral-200]'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}