'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { Input } from './Input';

interface FilterPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen = true,
  onClose,
  className,
}) => {
  return (
    <div className={cn(
      'bg-white rounded-xl border border-[--color-neutral-200] p-6 space-y-6',
      !isOpen && 'hidden',
      className
    )}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[--color-neutral-800]">Filters</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[--color-neutral-500] hover:text-[--color-neutral-700]"
          >
            ×
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-[--color-neutral-700] mb-2 block">
            Price Range
          </label>
          <div className="flex space-x-2">
            <Input placeholder="Min" />
            <Input placeholder="Max" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[--color-neutral-700] mb-2 block">
            Property Type
          </label>
          <div className="space-y-2">
            {['Apartment', 'House', 'Studio', 'Townhouse'].map((type) => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="mr-2 rounded border-[--color-neutral-300]" />
                <span className="text-sm text-[--color-neutral-700]">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[--color-neutral-700] mb-2 block">
            Bedrooms
          </label>
          <div className="flex space-x-2">
            {['Any', '1+', '2+', '3+', '4+'].map((beds) => (
              <button
                key={beds}
                className="px-3 py-1 text-sm border border-[--color-neutral-300] rounded-lg hover:border-[--color-primary] hover:text-[--color-primary]"
              >
                {beds}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[--color-neutral-700] mb-2 block">
            Amenities
          </label>
          <div className="space-y-2">
            {['Parking', 'Pet Friendly', 'Gym', 'Pool', 'Laundry'].map((amenity) => (
              <label key={amenity} className="flex items-center">
                <input type="checkbox" className="mr-2 rounded border-[--color-neutral-300]" />
                <span className="text-sm text-[--color-neutral-700]">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[--color-neutral-200]">
          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1">
              Clear All
            </Button>
            <Button className="flex-1">
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};