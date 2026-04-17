'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';

interface Job {
  id: string;
  title: string;
  employer: string;
  location: string;
  payRate: number;
  payPeriod: string;
  duration: string;
  funded: boolean;
  status: 'open' | 'closed' | 'in-progress';
  skills: string[];
  description: string;
  posted: string;
}

interface JobCardProps {
  job: Job;
  onApply?: (id: string) => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  onApply,
}) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'closed':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold text-[--color-neutral-900]">
                {job.title}
              </h3>
              <Badge variant={getStatusBadge(job.status) as any}>
                {job.status}
              </Badge>
              {job.funded && (
                <Badge variant="verified">✓ Funded</Badge>
              )}
            </div>
            
            <p className="text-sm text-[--color-neutral-600] mb-1">
              {job.employer}
            </p>
            <p className="text-sm text-[--color-neutral-600]">
              📍 {job.location}
            </p>
          </div>
          
          <div className="text-right">
            <p className="text-lg font-bold text-[--color-primary]">
              ${job.payRate}/{job.payPeriod}
            </p>
            <p className="text-sm text-[--color-neutral-500]">
              {job.duration}
            </p>
          </div>
        </div>
        
        <p className="text-sm text-[--color-neutral-700] mb-3 line-clamp-2">
          {job.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {job.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="default" className="text-xs">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge variant="default" className="text-xs">
              +{job.skills.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs text-[--color-neutral-500]">
          <span>Posted {job.posted}</span>
          
          <div className="flex space-x-2">
            <Link href={`/labourhub/${job.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            {job.status === 'open' && (
              <Button
                size="sm"
                onClick={() => onApply?.(job.id)}
              >
                Apply Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};