'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export default function VerifyPhonePage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const phoneNumber = '+234 XXX XXXX XXX' // This would come from query params or state

  useEffect(() => {
    if (!canResend && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [canResend])

  const handleOtpChange = (value: string, index: number) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    
    // Auto-advance to next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleResend = () => {
    setCountdown(60)
    setCanResend(false)
    // API call to resend OTP
  }

  const isComplete = otp.every(digit => digit.length === 1)

  return (
    <div className="min-h-screen bg-[--color-neutral-50] flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-6">
            <div className="w-16 h-16 bg-[--color-primary]/10 rounded-full flex items-center justify-center text-[--color-primary] text-3xl">
              📱
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[--color-neutral-900]">Verify your phone number</h1>
          <p className="text-[--color-neutral-600]">
            We sent a 6-digit code to <span className="font-medium">{phoneNumber}</span>
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            {/* OTP Input */}
            <div className="flex justify-center space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center text-lg font-semibold rounded-lg border-2 border-[--color-neutral-300] focus:border-[--color-primary] focus:outline-none focus:ring-1 focus:ring-[--color-primary] transition-colors"
                />
              ))}
            </div>

            {/* Resend */}
            <div className="text-center">
              {canResend ? (
                <button
                  onClick={handleResend}
                  className="text-[--color-primary] hover:underline font-medium"
                >
                  Resend code
                </button>
              ) : (
                <p className="text-[--color-neutral-600]">
                  Resend code in <span className="font-medium text-[--color-primary]">{countdown}s</span>
                </p>
              )}
            </div>

            <Button 
              className="w-full" 
              size="lg" 
              disabled={!isComplete}
            >
              Verify Phone Number
            </Button>
          </div>

          <div className="text-center">
            <Link 
              href="/auth/signup" 
              className="text-sm text-[--color-neutral-600] hover:text-[--color-primary]"
            >
              Use a different number
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}