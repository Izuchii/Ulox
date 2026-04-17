'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

type UserRole = 'tenant' | 'buyer' | 'seller' | 'service_provider' | 'worker' | 'landlord'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    countryCode: '+234'
  })
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const roles = [
    { id: 'tenant' as const, label: 'Tenant', icon: '🏠', description: 'Find rental properties' },
    { id: 'buyer' as const, label: 'Buyer', icon: '🏡', description: 'Buy properties' },
    { id: 'seller' as const, label: 'Seller', icon: '💼', description: 'Sell properties' },
    { id: 'service_provider' as const, label: 'Service Provider', icon: '🔧', description: 'Offer services' },
    { id: 'worker' as const, label: 'Worker', icon: '👷', description: 'Find labor jobs' },
    { id: 'landlord' as const, label: 'Landlord', icon: '🏢', description: 'Rent out properties' }
  ]

  const countryCodes = [
    { code: '+234', country: 'Nigeria' },
    { code: '+1', country: 'US' },
    { code: '+44', country: 'UK' },
    { code: '+27', country: 'South Africa' }
  ]

  return (
    <div className="min-h-screen bg-[--color-neutral-50] flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-6">
            <div className="w-16 h-16 bg-[--color-primary] rounded-xl flex items-center justify-center text-white text-2xl font-bold">
              U
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[--color-neutral-900]">Create your Ulox account</h1>
          <p className="text-[--color-neutral-600]">Join thousands of users on Nigeria's super-platform</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="space-y-4">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              <Input
                label="Last Name"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>

            {/* Email */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            {/* Phone */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-[--color-neutral-700]">Phone Number</label>
              <div className="flex space-x-2">
                <select 
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="flex h-10 rounded-lg border border-[--color-neutral-300] bg-white px-3 py-2 text-sm focus:border-[--color-primary] focus:outline-none focus:ring-1 focus:ring-[--color-primary]"
                >
                  {countryCodes.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.code} {item.country}
                    </option>
                  ))}
                </select>
                <Input
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Password fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Password"
                type="password"
                placeholder="Create password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>

            {/* Role selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-[--color-neutral-700]">I am a...</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedRole === role.id
                        ? 'border-[--color-primary] bg-[--color-primary]/5'
                        : 'border-[--color-neutral-200] hover:border-[--color-neutral-300]'
                    }`}
                  >
                    <div className="text-2xl mb-1">{role.icon}</div>
                    <div className="font-medium text-sm text-[--color-neutral-900]">{role.label}</div>
                    <div className="text-xs text-[--color-neutral-600]">{role.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-0.5 rounded border-[--color-neutral-300]"
              />
              <label htmlFor="terms" className="text-sm text-[--color-neutral-600]">
                I agree to Ulox's{' '}
                <Link href="/terms" className="text-[--color-primary] hover:underline">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-[--color-primary] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button className="w-full" size="lg" disabled={!acceptedTerms || !selectedRole}>
              Create Account
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-[--color-neutral-600]">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-[--color-primary] hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}