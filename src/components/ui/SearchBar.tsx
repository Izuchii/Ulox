'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onFilterClick?: () => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search properties...",
  onSearch,
  onFilterClick,
  className,
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className={cn('flex gap-2', className)}>
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-[--color-neutral-500]">🔍</span>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full h-10 pl-10 pr-4 rounded-lg border border-[--color-neutral-300] bg-white text-sm placeholder:text-[--color-neutral-500] focus:border-[--color-primary] focus:outline-none focus:ring-1 focus:ring-[--color-primary]"
        />
      </div>
      {onFilterClick && (
        <Button
          type="button"
          variant="outline"
          onClick={onFilterClick}
          className="px-4"
        >
          <span className="mr-1">⚙️</span>
          Filters
        </Button>
      )}
      <Button type="submit">
        Search
      </Button>
    </form>
  );
};