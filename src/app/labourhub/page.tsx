'use client';

import React from 'react';
import { SearchBar } from '@/components/ui/SearchBar';
import { JobCard } from '@/components/ui/JobCard';
import { jobs } from '@/lib/sample-data';

export default function LabourHubPage() {
  return (
    <div className="min-h-screen bg-[--background]">
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-4">
            LabourHub - Available Jobs
          </h1>
          <SearchBar placeholder="Search by job title, location, or trade..." />
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[--color-neutral-600]">
            Showing {jobs.length} available jobs
          </p>
          <select className="px-4 py-2 border border-[--color-neutral-300] rounded-lg text-sm">
            <option>Sort by: Newest</option>
            <option>Pay: High to Low</option>
            <option>Pay: Low to High</option>
            <option>Duration: Shortest</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={(id) => console.log('Apply for job:', id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}