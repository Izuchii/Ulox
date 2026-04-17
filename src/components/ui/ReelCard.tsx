'use client';

import React from 'react';
import { Card } from './Card';

interface Reel {
  id: string;
  title: string;
  creator: string;
  thumbnail: string;
  likes: number;
  comments: number;
  shares: number;
  propertyId?: string | null;
  duration: number;
}

interface ReelCardProps {
  reel: Reel;
  onPlay?: (id: string) => void;
  onLike?: (id: string) => void;
  onComment?: (id: string) => void;
  onShare?: (id: string) => void;
  isLiked?: boolean;
}

export const ReelCard: React.FC<ReelCardProps> = ({
  reel,
  onPlay,
  onLike,
  onComment,
  onShare,
  isLiked = false,
}) => {
  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <Card className="overflow-hidden aspect-[9/16] relative group">
      {/* Video Thumbnail */}
      <div
        className="absolute inset-0 bg-black bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${reel.thumbnail})` }}
        onClick={() => onPlay?.(reel.id)}
      >
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
          <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
            <span className="text-2xl">▶️</span>
          </div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {reel.duration}s
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
        <div className="flex justify-between items-end">
          <div className="flex-1">
            <p className="font-semibold text-sm mb-1 line-clamp-2">
              {reel.title}
            </p>
            <p className="text-xs text-gray-300">
              @{reel.creator}
            </p>
          </div>
          
          {/* Engagement actions */}
          <div className="flex flex-col space-y-3 ml-3">
            <button
              onClick={() => onLike?.(reel.id)}
              className={`flex flex-col items-center transition-colors ${
                isLiked ? 'text-red-500' : 'text-white hover:text-red-500'
              }`}
            >
              <span className="text-xl">{isLiked ? '❤️' : '🤍'}</span>
              <span className="text-xs">{formatCount(reel.likes)}</span>
            </button>
            
            <button
              onClick={() => onComment?.(reel.id)}
              className="flex flex-col items-center text-white hover:text-blue-400 transition-colors"
            >
              <span className="text-xl">💬</span>
              <span className="text-xs">{formatCount(reel.comments)}</span>
            </button>
            
            <button
              onClick={() => onShare?.(reel.id)}
              className="flex flex-col items-center text-white hover:text-green-400 transition-colors"
            >
              <span className="text-xl">📤</span>
              <span className="text-xs">{formatCount(reel.shares)}</span>
            </button>
          </div>
        </div>
        
        {/* Property CTA if linked */}
        {reel.propertyId && (
          <div className="mt-3 pt-3 border-t border-white border-opacity-30">
            <button className="bg-[--color-primary] text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-[--color-primary-dark] transition-colors">
              View Property
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};