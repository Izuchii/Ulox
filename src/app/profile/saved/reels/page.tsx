import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';
import { reels } from '@/lib/sample-data';

export default function SavedReelsPage() {
  // Mock saved reels data
  const savedReels = [
    {
      id: '1',
      title: 'Amazing Downtown Loft Tour',
      creator: 'PropertyTours',
      thumbnail: 'https://picsum.photos/seed/reel1/300/400',
      likes: 1234,
      duration: 45,
      savedDate: '2024-04-15',
      propertyTag: 'Modern Apartment'
    },
    {
      id: '2',
      title: 'Kitchen Renovation Before/After',
      creator: 'RenovationPro',
      thumbnail: 'https://picsum.photos/seed/reel3/300/400',
      likes: 2156,
      duration: 28,
      savedDate: '2024-04-12',
      propertyTag: 'Renovation Tips'
    },
    {
      id: '3',
      title: 'Home Staging Secrets',
      creator: 'StageItRight',
      thumbnail: 'https://picsum.photos/seed/reel2/300/400',
      likes: 987,
      duration: 32,
      savedDate: '2024-04-10',
      propertyTag: 'Staging Tips'
    },
    {
      id: '4',
      title: 'Luxury Penthouse Walkthrough',
      creator: 'LuxuryHomes',
      thumbnail: 'https://picsum.photos/seed/reel4/300/400',
      likes: 3421,
      duration: 56,
      savedDate: '2024-04-08',
      propertyTag: 'Luxury Property'
    },
    {
      id: '5',
      title: 'Budget Apartment Makeover',
      creator: 'BudgetDesign',
      thumbnail: 'https://picsum.photos/seed/reel5/300/400',
      likes: 678,
      duration: 41,
      savedDate: '2024-04-05',
      propertyTag: 'Budget Tips'
    },
    {
      id: '6',
      title: 'Garden Apartment Tour',
      creator: 'GreenSpaces',
      thumbnail: 'https://picsum.photos/seed/reel6/300/400',
      likes: 892,
      duration: 38,
      savedDate: '2024-04-03',
      propertyTag: 'Garden Property'
    }
  ];

  const formatSavedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const EmptyState = () => (
    <div className="text-center py-16">
      <div className="text-6xl mb-4">🎬</div>
      <h3 className="text-xl font-semibold text-[--color-neutral-900] mb-2">
        No Saved Reels Yet
      </h3>
      <p className="text-[--color-neutral-600] mb-6 max-w-md mx-auto">
        Start saving interesting property tours and real estate content to watch later.
      </p>
      <Link href="/reels">
        <Button>Browse Reels</Button>
      </Link>
    </div>
  );

  if (savedReels.length === 0) {
    return (
      <div className="min-h-screen bg-[--color-neutral-50] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <Link href="/profile" className="text-[--color-primary] hover:underline mb-4 inline-block">
              ← Back to Profile
            </Link>
            <h1 className="text-2xl font-bold text-[--color-neutral-900]">
              Saved Reels (0)
            </h1>
          </div>
          <Card>
            <CardContent>
              <EmptyState />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/profile" className="text-[--color-primary] hover:underline mb-4 inline-block">
            ← Back to Profile
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[--color-neutral-900]">
              Saved Reels ({savedReels.length})
            </h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Sort by Date
              </Button>
              <Button variant="outline" size="sm">
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {savedReels.map((reel) => (
            <Card key={reel.id} hover className="group cursor-pointer">
              <div className="relative">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full aspect-[3/4] object-cover rounded-t-lg"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-t-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-2xl text-[--color-neutral-900]">▶️</span>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {formatDuration(reel.duration)}
                </div>

                {/* Remove Button */}
                <button className="absolute top-2 right-2 w-8 h-8 bg-[--color-error] bg-opacity-80 hover:bg-opacity-100 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <span className="text-sm">✕</span>
                </button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-[--color-neutral-900] mb-2 line-clamp-2">
                  {reel.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-[--color-neutral-600]">
                    by {reel.creator}
                  </span>
                  <Badge variant="default" className="text-xs">
                    {reel.propertyTag}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm text-[--color-neutral-500]">
                  <div className="flex items-center gap-1">
                    <span>❤️</span>
                    <span>{reel.likes.toLocaleString()}</span>
                  </div>
                  <span>Saved {formatSavedDate(reel.savedDate)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button variant="outline">
            Load More Reels
          </Button>
        </div>

        {/* Actions Bar */}
        <div className="mt-8 flex items-center justify-between bg-white p-4 rounded-lg border border-[--color-neutral-200]">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Select All</span>
            </label>
            <span className="text-sm text-[--color-neutral-600]">
              0 selected
            </span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Remove Selected
            </Button>
            <Button variant="outline" size="sm" disabled>
              Create Playlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}