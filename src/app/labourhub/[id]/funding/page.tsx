import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function JobFundingPage({ params }: { params: { id: string } }) {
  const job = {
    id: params.id,
    title: 'Construction Laborer',
    employer: 'BuildCorp Inc.',
    totalValue: 15000,
    workerShare: 12000,
    duration: '3 months',
    location: 'Manhattan, NYC'
  };

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[--color-success] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🛡️</span>
          </div>
          <h1 className="text-3xl font-bold text-[--color-success] mb-2">
            Job Funding Confirmed
          </h1>
          <p className="text-[--color-neutral-600]">
            This job is fully funded and secured through escrow
          </p>
        </div>

        {/* Funding Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-center">Escrow Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[--color-neutral-600]">Total Job Value</span>
                <span className="font-semibold text-lg">${job.totalValue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[--color-neutral-600]">Your Share</span>
                <span className="font-semibold text-lg text-[--color-success]">
                  ${job.workerShare.toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[--color-neutral-600]">Escrow Provider</span>
                  <Badge variant="verified">Ulox Escrow</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[--color-neutral-600]">Release Condition</span>
                  <span className="text-sm">Job completion + 7 days</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Job Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-[--color-neutral-900]">Position:</span>
                <span className="ml-2">{job.title}</span>
              </div>
              <div>
                <span className="font-semibold text-[--color-neutral-900]">Employer:</span>
                <span className="ml-2">{job.employer}</span>
              </div>
              <div>
                <span className="font-semibold text-[--color-neutral-900]">Duration:</span>
                <span className="ml-2">{job.duration}</span>
              </div>
              <div>
                <span className="font-semibold text-[--color-neutral-900]">Location:</span>
                <span className="ml-2">{job.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Agreement */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[--color-neutral-900] mb-4">
              Escrow Protection Terms
            </h3>
            <div className="space-y-3 text-sm text-[--color-neutral-700] mb-6">
              <div className="flex items-start gap-3">
                <span className="text-[--color-success] font-bold">✓</span>
                <p>Your payment is secured in escrow and will be released upon successful job completion</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[--color-success] font-bold">✓</span>
                <p>Dispute resolution available through Ulox arbitration system</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[--color-success] font-bold">✓</span>
                <p>Payment protected against employer default or non-payment</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[--color-success] font-bold">✓</span>
                <p>Funds released within 7 days of job completion verification</p>
              </div>
            </div>

            <label className="flex items-start gap-3 mb-6">
              <input type="checkbox" className="mt-1" required />
              <span className="text-sm text-[--color-neutral-700]">
                I understand and agree to the escrow terms and conditions. I confirm that all job details are accurate and I am ready to begin work.
              </span>
            </label>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          <Button 
            size="lg" 
            className="w-full py-4 text-lg"
          >
            Accept Job & Start Working
          </Button>
          
          <div className="flex gap-4">
            <Link href={`/labourhub/${params.id}`} className="flex-1">
              <Button variant="outline" className="w-full">
                Review Job Details
              </Button>
            </Link>
            <Button variant="ghost" className="flex-1">
              Contact Support
            </Button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 p-4 bg-[--color-neutral-100] rounded-lg">
          <p className="text-xs text-[--color-neutral-600] text-center">
            <strong>Secure Payment:</strong> Your payment is protected by Ulox Escrow. 
            Funds are only released when both parties confirm job completion or through arbitration resolution.
          </p>
        </div>
      </div>
    </div>
  );
}