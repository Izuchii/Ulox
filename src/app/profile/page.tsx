import React from 'react';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { user } from '@/lib/sample-data';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[--background]">
      <div className="max-w-4xl mx-auto container-padding py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <div className="p-6">
            <div className="flex items-center space-x-6 mb-6">
              <Avatar src={user.avatar} alt={user.name} size="xl" />
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-2xl font-bold text-[--color-neutral-900]">
                    {user.name}
                  </h1>
                  {user.verified && <Badge variant="verified">✓ Verified</Badge>}
                  <Badge variant="success">KYC Approved</Badge>
                </div>
                <p className="text-[--color-neutral-600] mb-2">{user.email}</p>
                <p className="text-sm text-[--color-neutral-500]">
                  Member since {new Date(user.joinDate).toLocaleDateString()}
                </p>
              </div>
              <Link href="/profile/settings">
                <Button variant="outline">Edit Profile</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[--color-primary]">
                  {user.stats.savedListings}
                </div>
                <div className="text-sm text-[--color-neutral-600]">Saved Listings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[--color-primary]">
                  {user.stats.purchases}
                </div>
                <div className="text-sm text-[--color-neutral-600]">Purchases</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[--color-primary]">
                  {user.stats.reviews}
                </div>
                <div className="text-sm text-[--color-neutral-600]">Reviews</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/profile/saved/listings">
            <Card hover className="p-6 text-center cursor-pointer">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-semibold text-[--color-neutral-900] mb-2">
                Saved Properties
              </h3>
              <p className="text-sm text-[--color-neutral-600]">
                View your saved property listings
              </p>
            </Card>
          </Link>

          <Link href="/profile/saved/reels">
            <Card hover className="p-6 text-center cursor-pointer">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="font-semibold text-[--color-neutral-900] mb-2">
                Saved Reels
              </h3>
              <p className="text-sm text-[--color-neutral-600]">
                Your favorite property reels
              </p>
            </Card>
          </Link>

          <Link href="/profile/saved/products">
            <Card hover className="p-6 text-center cursor-pointer">
              <div className="text-3xl mb-3">🛍️</div>
              <h3 className="font-semibold text-[--color-neutral-900] mb-2">
                Saved Products
              </h3>
              <p className="text-sm text-[--color-neutral-600]">
                Products you want to buy
              </p>
            </Card>
          </Link>

          <Link href="/profile/settings">
            <Card hover className="p-6 text-center cursor-pointer">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-semibold text-[--color-neutral-900] mb-2">
                Settings
              </h3>
              <p className="text-sm text-[--color-neutral-600]">
                Manage account settings
              </p>
            </Card>
          </Link>

          <Card hover className="p-6 text-center cursor-pointer">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-[--color-neutral-900] mb-2">
              Activity
            </h3>
            <p className="text-sm text-[--color-neutral-600]">
              View your activity history
            </p>
          </Card>

          <Card hover className="p-6 text-center cursor-pointer">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold text-[--color-neutral-900] mb-2">
              Messages
            </h3>
            <p className="text-sm text-[--color-neutral-600]">
              Chat with other users
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}