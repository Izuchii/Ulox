'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import { Badge } from './Badge';
import { StarRating } from './StarRating';
import { Button } from './Button';

interface Service {
  id: string;
  provider: string;
  service: string;
  image: string;
  rating: number;
  reviews: number;
  priceFrom: number;
  category: string;
  description: string;
  availability: string;
}

interface ServiceCardProps {
  service: Service;
  onBook?: (id: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onBook,
}) => {
  const getAvailabilityBadge = (availability: string) => {
    if (availability.includes('Emergency')) return 'error';
    if (availability.includes('Today')) return 'success';
    if (availability.includes('Next Day')) return 'warning';
    return 'default';
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div
            className="w-16 h-16 rounded-lg bg-[--color-neutral-200] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-[--color-neutral-900] mb-1">
                  {service.provider}
                </h3>
                <p className="text-sm text-[--color-neutral-600]">
                  {service.service}
                </p>
              </div>
              <Badge variant={getAvailabilityBadge(service.availability) as any}>
                {service.availability}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-2 mb-2">
              <StarRating rating={service.rating} size="sm" />
              <span className="text-xs text-[--color-neutral-500]">
                ({service.reviews} reviews)
              </span>
            </div>
            
            <Badge variant="default" className="text-xs">
              {service.category}
            </Badge>
          </div>
        </div>
        
        <p className="text-sm text-[--color-neutral-700] mb-4 line-clamp-2">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-[--color-primary]">
              From ${service.priceFrom}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Link href={`/dwellhub/services/${service.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            <Link href={`/dwellhub/services/${service.id}/book`}>
              <Button size="sm">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};