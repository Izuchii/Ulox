import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export default function KYCPendingPage() {
  const statusSteps = [
    { label: 'Documents Submitted', status: 'completed', icon: '✓' },
    { label: 'Under Review', status: 'in-progress', icon: '⏳' },
    { label: 'Decision', status: 'pending', icon: '○' },
    { label: 'Verified', status: 'pending', icon: '○' },
  ]

  return (
    <div className="min-h-screen bg-[--color-neutral-50] flex items-center justify-center px-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-6">
            <div className="w-24 h-24 bg-[--color-warning]/10 rounded-full flex items-center justify-center text-6xl">
              ⏳
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[--color-neutral-900]">Verification Under Review</h1>
          <p className="text-[--color-neutral-600]">
            Your documents are being reviewed. This typically takes 1-2 business days.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Status Tracker */}
          <div className="space-y-4">
            <h3 className="font-medium text-[--color-neutral-900]">Verification Status</h3>
            <div className="space-y-3">
              {statusSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                    step.status === 'completed'
                      ? 'bg-[--color-success] text-white'
                      : step.status === 'in-progress'
                      ? 'bg-[--color-warning] text-white'
                      : 'border-2 border-[--color-neutral-300] text-[--color-neutral-500]'
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`${
                    step.status === 'in-progress' 
                      ? 'font-medium text-[--color-neutral-900]' 
                      : 'text-[--color-neutral-600]'
                  }`}>
                    {step.label}
                  </span>
                  {step.status === 'in-progress' && (
                    <div className="ml-auto">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-[--color-warning] border-t-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Information Card */}
          <div className="bg-[--color-neutral-50] rounded-lg p-4">
            <h4 className="font-medium text-[--color-neutral-900] mb-2">What happens next?</h4>
            <ul className="text-sm text-[--color-neutral-600] space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-[--color-primary] mt-1">•</span>
                <span>Our verification team is reviewing your documents</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[--color-primary] mt-1">•</span>
                <span>You'll receive a notification when the review is complete</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[--color-primary] mt-1">•</span>
                <span>If approved, you'll get access to verified features</span>
              </li>
            </ul>
          </div>

          {/* Estimated Time */}
          <div className="text-center p-4 bg-[--color-primary]/5 rounded-lg">
            <p className="text-sm text-[--color-primary] font-medium">
              ⏱️ Estimated completion: 1-2 business days
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button className="w-full" size="lg">
              <Link href="/" className="flex items-center justify-center w-full">
                Return to Home
              </Link>
            </Button>
            
            <div className="text-center">
              <Link 
                href="/support" 
                className="text-sm text-[--color-primary] hover:underline"
              >
                Need help? Contact support
              </Link>
            </div>
          </div>

          {/* Reference Number */}
          <div className="text-center pt-4 border-t border-[--color-neutral-200]">
            <p className="text-xs text-[--color-neutral-500]">
              Reference: KYC-{new Date().getFullYear()}-{String(Math.random()).slice(2, 8)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}