'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';
import { jobs } from '@/lib/sample-data';

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock job data - in real app would fetch based on params.id
  const job = {
    id: params.id,
    title: 'Construction Laborer',
    employer: 'BuildCorp Inc.',
    location: 'Manhattan, NYC',
    payRate: 25,
    payPeriod: 'hour',
    duration: '3 months',
    funded: true,
    status: 'open' as const,
    skills: ['Construction', 'Physical Labor', 'Safety'],
    description: 'Join our construction team for a major downtown project. We are looking for reliable workers with construction experience.',
    posted: '2 days ago',
    spotsTotal: 10,
    spotsFilled: 7,
    requirements: [
      'Minimum 1 year construction experience',
      'Physical fitness for manual labor',
      'Safety certification preferred',
      'Reliable transportation',
      'Ability to work in weather conditions'
    ],
    responsibilities: [
      'Assist with general construction tasks',
      'Move and carry building materials',
      'Operate basic construction tools',
      'Maintain clean and safe work environment',
      'Follow safety protocols at all times'
    ],
    benefits: [
      'Health insurance after 90 days',
      'Weekly pay',
      'Overtime opportunities',
      'Safety equipment provided'
    ],
    startDate: '2024-04-20',
    endDate: '2024-07-20',
    workHours: '7:00 AM - 4:00 PM',
    contactInfo: {
      supervisor: 'Mike Johnson',
      phone: '+1 (555) 123-4567'
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[--color-neutral-700] mb-4">{job.description}</p>
                
                <h4 className="font-semibold text-[--color-neutral-900] mb-3">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1 text-[--color-neutral-700] mb-6">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>

                <h4 className="font-semibold text-[--color-neutral-900] mb-3">Benefits</h4>
                <ul className="list-disc list-inside space-y-1 text-[--color-neutral-700]">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-[--color-neutral-500]">Start Date</span>
                    <div className="font-medium">{new Date(job.startDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <span className="text-sm text-[--color-neutral-500]">End Date</span>
                    <div className="font-medium">{new Date(job.endDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <span className="text-sm text-[--color-neutral-500]">Working Hours</span>
                    <div className="font-medium">{job.workHours}</div>
                  </div>
                  <div>
                    <span className="text-sm text-[--color-neutral-500]">Supervisor</span>
                    <div className="font-medium">{job.contactInfo.supervisor}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'requirements':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Job Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-[--color-neutral-900] mb-3">Required Skills</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="default">{skill}</Badge>
                ))}
              </div>

              <h4 className="font-semibold text-[--color-neutral-900] mb-3">Requirements</h4>
              <ul className="list-disc list-inside space-y-2 text-[--color-neutral-700]">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );

      case 'terms':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-[--color-neutral-900] mb-2">Payment Terms</h4>
                <p className="text-[--color-neutral-700]">
                  Payment is made weekly via direct deposit. Overtime rates apply for hours worked beyond 40 hours per week.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[--color-neutral-900] mb-2">Termination</h4>
                <p className="text-[--color-neutral-700]">
                  Either party may terminate employment with 24-hour notice. Final payment will be processed within 5 business days.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[--color-neutral-900] mb-2">Safety Requirements</h4>
                <p className="text-[--color-neutral-700]">
                  All workers must follow OSHA safety guidelines. Safety equipment will be provided. Failure to comply with safety protocols may result in immediate termination.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[--color-neutral-900] mb-2">Dispute Resolution</h4>
                <p className="text-[--color-neutral-700]">
                  Any disputes will be resolved through Ulox's arbitration system. Both parties agree to binding arbitration for any work-related disputes.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/labourhub" className="text-[--color-primary] hover:underline mb-4 inline-block">
            ← Back to Jobs
          </Link>
        </div>

        {/* Job Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-3">
                  {job.title}
                </h1>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg font-medium">{job.employer}</span>
                  <Badge variant="verified">Verified</Badge>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-[--color-neutral-600] mb-4">
                  <div className="flex items-center gap-1">
                    <span>📍</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⏰</span>
                    <span>Posted {job.posted}</span>
                  </div>
                </div>

                <Badge variant="success" className="text-lg px-4 py-2">
                  ${job.payRate}/{job.payPeriod}
                </Badge>
              </div>
              
              <div className="lg:text-right">
                <div className="mb-4">
                  {job.funded ? (
                    <div className="bg-[--color-success] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                      <span>🛡️</span>
                      <span className="font-medium">Funding: Confirmed</span>
                    </div>
                  ) : (
                    <div className="bg-[--color-warning] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                      <span>⏳</span>
                      <span className="font-medium">Funding: Pending</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm text-[--color-neutral-600] mb-2">
                <span>{job.spotsFilled} of {job.spotsTotal} spots filled</span>
                <span>{Math.round((job.spotsFilled / job.spotsTotal) * 100)}%</span>
              </div>
              <div className="w-full bg-[--color-neutral-200] rounded-full h-2">
                <div 
                  className="bg-[--color-primary] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(job.spotsFilled / job.spotsTotal) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex border-b border-[--color-neutral-200] mb-6">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'requirements', label: 'Requirements' },
            { id: 'terms', label: 'Terms' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-[--color-primary] border-[--color-primary]'
                  : 'text-[--color-neutral-600] border-transparent hover:text-[--color-primary]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="pb-8">
          {renderTabContent()}
        </div>
      </div>

      {/* Sticky Apply Button - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[--color-neutral-200] p-4 lg:hidden">
        <Button className="w-full py-3 text-lg">
          Apply for Job
        </Button>
      </div>

      {/* Desktop Apply Button */}
      <div className="hidden lg:block fixed bottom-6 right-6">
        <Button size="lg" className="px-8 py-3">
          Apply for Job
        </Button>
      </div>
    </div>
  );
}