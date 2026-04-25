'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import { Badge } from './Badge';
import { Avatar } from './Avatar';
import { Button } from './Button';

interface Property {
  id: string;
  title: string;
  price: number;
  currency: string;
  type: 'rent' | 'buy';
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  verified: boolean;
  featured: boolean;
  agent: {
    name: string;
    company: string;
    image: string;
  };
}

interface PropertyCardProps {
  property: Property;
  onSave?: (id: string) => void;
  saved?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSave,
  saved = false,
}) => {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative">
        <div
          className="h-48 bg-[--color-neutral-200] bg-cover bg-center"
          style={{ backgroundImage: `url(${property.image})` }}
        />
        
        <div className="absolute top-2 left-2 flex gap-1">
          {property.featured && <Badge variant="featured">Featured</Badge>}
          {property.verified && <Badge variant="verified">✓ Verified</Badge>}
        </div>
        
        <button
          onClick={() => onSave?.(property.id)}
          className={`absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all ${
            saved ? 'text-red-500' : 'text-[--color-neutral-500]'
          }`}
        >
          {saved ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-[--color-neutral-900] mb-1">
              {property.title}
            </h3>
            <p className="text-sm text-[--color-neutral-600]">{property.location}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-[--color-primary]">
              ${property.price.toLocaleString()}
              {property.type === 'rent' && <span className="text-sm font-normal">/mo</span>}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-[--color-neutral-600] mb-3">
          <span>🛏️ {property.beds} beds</span>
          <span>🚿 {property.baths} baths</span>
          <span>📐 {property.sqft} sqft</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar src={property.agent.image} alt={property.agent.name} size="sm" />
            <div>
              <p className="text-xs font-medium text-[--color-neutral-700]">{property.agent.name}</p>
              <p className="text-xs text-[--color-neutral-500]">{property.agent.company}</p>
            </div>
          </div>
          
          <Link href={`/listings/${property.id}`}>
            <Button size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};