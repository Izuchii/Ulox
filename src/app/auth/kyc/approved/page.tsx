import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function KYCApprovedPage() {
  const verificationLevels = [
    { 
      level: 'Basic', 
      achieved: true, 
      description: 'Phone & email verified',
      benefits: ['Basic platform access', 'Limited transactions']
    },
    { 
      level: 'Standard', 
      achieved: true, 
      description: 'Identity documents verified',
      benefits: ['Higher transaction limits', 'Verified badge']
    },
    { 
      level: 'Full', 
      achieved: true, 
      description: 'Full KYC complete',
      benefits: ['Premium features', 'Maximum limits', 'Priority support']
    }
  ]

  const benefits = [
    'Access premium listings',
    'Verified seller badge',
    'Increased transaction limits', 
    'Priority customer support',
    'Advanced security features',
    'Exclusive marketplace access'
  ]

  return (
    <div className="min-h-screen bg-[--color-neutral-50] flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-6">
            <div className="w-24 h-24 bg-[--color-success]/10 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-[--color-success] rounded-full flex items-center justify-center text-white text-3xl">
                ✓
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[--color-success]">Identity Verified!</h1>
          <p className="text-[--color-neutral-600] mt-2">
            Congratulations! Your identity has been successfully verified.
          </p>
          
          {/* KYC Badge */}
          <div className="mt-4 flex justify-center">
            <Badge variant="success" className="text-lg px-4 py-2">
              🛡️ KYC Verified
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Verification Levels */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[--color-neutral-900]">Verification Level</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {verificationLevels.map((level, index) => (
                <div
                  key={level.level}
                  className={`p-4 rounded-lg border-2 ${
                    level.achieved
                      ? 'border-[--color-success] bg-[--color-success]/5'
                      : 'border-[--color-neutral-200]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-[--color-neutral-900]">{level.level}</h4>
                    {level.achieved && (
                      <div className="w-6 h-6 bg-[--color-success] rounded-full flex items-center justify-center text-white text-sm">
                        ✓
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-[--color-neutral-600] mb-3">{level.description}</p>
                  <div className="space-y-1">
                    {level.benefits.map((benefit, idx) => (
                      <p key={idx} className="text-xs text-[--color-neutral-500]">• {benefit}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Unlocked */}
          <div className="bg-gradient-to-r from-[--color-primary]/5 to-[--color-success]/5 rounded-lg p-6">
            <h3 className="font-semibold text-[--color-neutral-900] mb-4 flex items-center">
              <span className="text-2xl mr-2">🎉</span>
              Benefits Unlocked
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-[--color-success] rounded-full flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <span className="text-sm text-[--color-neutral-700]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Note */}
          <div className="bg-[--color-neutral-100] rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🔒</div>
              <div>
                <h4 className="font-medium text-[--color-neutral-900] mb-1">Your Data is Secure</h4>
                <p className="text-sm text-[--color-neutral-600]">
                  Your verification documents are encrypted and stored securely. We never share your personal information with third parties without your consent.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full" size="lg">
              <Link href="/profile" className="flex items-center justify-center w-full">
                Go to Dashboard
              </Link>
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <Link href="/listings" className="flex items-center justify-center w-full">
                  Browse Listings
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                Share Status
              </Button>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center pt-4 border-t border-[--color-neutral-200]">
            <h4 className="font-medium text-[--color-neutral-900] mb-2">What's Next?</h4>
            <p className="text-sm text-[--color-neutral-600] mb-4">
              Explore the platform with your new verified status and enjoy premium features!
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <Link href="/dwellhub" className="text-[--color-primary] hover:underline">
                DwellHub Services
              </Link>
              <Link href="/labourhub" className="text-[--color-primary] hover:underline">
                LabourHub Jobs
              </Link>
              <Link href="/reels" className="text-[--color-primary] hover:underline">
                Property Reels
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}