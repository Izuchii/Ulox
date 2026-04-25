'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import { Badge } from './Badge';
import { Avatar } from './Avatar';
import { Button } from './Button';

interface Roommate {
  id: string;
  name: string;
  age: number;
  budget: number;
  location: string;
  image: string;
  bio: string;
  lifestyle: string[];
  compatibility: number;
}

interface RoommateCardProps {
  roommate: Roommate;
  onConnect?: (id: string) => void;
}

export const RoommateCard: React.FC<RoommateCardProps> = ({
  roommate,
  onConnect,
}) => {
  const getCompatibilityColor = (score: number) => {
    if (score >= 90) return 'success';
    if (score >= 75) return 'warning';
    return 'default';
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar 
            src={roommate.image} 
            alt={roommate.name} 
            size="lg" 
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-[--color-neutral-900]">
                {roommate.name}, {roommate.age}
              </h3>
              <Badge variant={getCompatibilityColor(roommate.compatibility) as any}>
                {roommate.compatibility}% match
              </Badge>
            </div>
            <p className="text-sm text-[--color-neutral-600] mb-2">
              📍 {roommate.location}
            </p>
            <p className="text-sm font-medium text-[--color-primary]">
              Budget: ${roommate.budget}/month
            </p>
          </div>
        </div>
        
        <p className="text-sm text-[--color-neutral-700] mb-3 line-clamp-2">
          {roommate.bio}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {roommate.lifestyle.slice(0, 3).map((trait, index) => (
            <Badge key={index} variant="default" className="text-xs">
              {trait}
            </Badge>
          ))}
          {roommate.lifestyle.length > 3 && (
            <Badge variant="default" className="text-xs">
              +{roommate.lifestyle.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex space-x-2">
          <Link href={`/listings/rent/roommates/${roommate.id}`} className="flex-1">
            <Button variant="outline" className="w-full" size="sm">
              View Profile
            </Button>
          </Link>
          <Button 
            className="flex-1" 
            size="sm"
            onClick={() => onConnect?.(roommate.id)}
          >
            Connect
          </Button>
        </div>
      </div>
    </Card>
  );
};