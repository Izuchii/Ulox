'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

type KYCStep = 'id_upload' | 'selfie' | 'review'

export default function KYCPage() {
  const [currentStep, setCurrentStep] = useState<KYCStep>('id_upload')
  const [idType, setIdType] = useState('')
  const [frontUploaded, setFrontUploaded] = useState(false)
  const [backUploaded, setBackUploaded] = useState(false)
  const [selfieUploaded, setSelfieUploaded] = useState(false)

  const steps = [
    { id: 'id_upload', label: 'ID Upload', number: 1 },
    { id: 'selfie', label: 'Selfie', number: 2 },
    { id: 'review', label: 'Review', number: 3 }
  ]

  const idTypes = [
    { value: 'national_id', label: 'National ID Card' },
    { value: 'passport', label: 'International Passport' },
    { value: 'drivers_license', label: "Driver's License" }
  ]

  const handleFileUpload = (type: 'front' | 'back' | 'selfie') => {
    // Simulate file upload
    if (type === 'front') setFrontUploaded(true)
    if (type === 'back') setBackUploaded(true)
    if (type === 'selfie') setSelfieUploaded(true)
  }

  const canProceed = () => {
    if (currentStep === 'id_upload') return idType && frontUploaded && backUploaded
    if (currentStep === 'selfie') return selfieUploaded
    return true
  }

  return (
    <div className="min-h-screen bg-[--color-neutral-50] flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-6">
            <div className="w-16 h-16 bg-[--color-primary]/10 rounded-full flex items-center justify-center text-[--color-primary] text-3xl">
              🛡️
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[--color-neutral-900]">Identity Verification</h1>
          <p className="text-[--color-neutral-600]">
            Help us verify your identity to keep Ulox safe and secure
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  currentStep === step.id
                    ? 'bg-[--color-primary] text-white'
                    : steps.findIndex(s => s.id === currentStep) > index
                    ? 'bg-[--color-success] text-white'
                    : 'bg-[--color-neutral-300] text-[--color-neutral-600]'
                }`}>
                  {steps.findIndex(s => s.id === currentStep) > index ? '✓' : step.number}
                </div>
                <span className="ml-2 text-sm text-[--color-neutral-600]">{step.label}</span>
                {index < steps.length - 1 && <div className="w-8 h-0.5 bg-[--color-neutral-300] mx-4" />}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {currentStep === 'id_upload' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-[--color-neutral-900] mb-4">Upload Government ID</h2>
                
                {/* ID Type Selection */}
                <div className="space-y-3 mb-6">
                  <label className="text-sm font-medium text-[--color-neutral-700]">Select ID Type</label>
                  <div className="space-y-2">
                    {idTypes.map((type) => (
                      <label key={type.value} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="idType"
                          value={type.value}
                          checked={idType === type.value}
                          onChange={(e) => setIdType(e.target.value)}
                          className="text-[--color-primary]"
                        />
                        <span className="text-[--color-neutral-700]">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Upload Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                    frontUploaded ? 'border-[--color-success] bg-[--color-success]/5' : 'border-[--color-neutral-300] hover:border-[--color-primary]'
                  }`}>
                    <div className="text-4xl mb-2">{frontUploaded ? '✅' : '📷'}</div>
                    <p className="font-medium text-[--color-neutral-700] mb-1">
                      {frontUploaded ? 'Front Uploaded' : 'Upload Front'}
                    </p>
                    <p className="text-sm text-[--color-neutral-600] mb-3">
                      Clear photo of the front of your ID
                    </p>
                    <Button
                      variant={frontUploaded ? 'secondary' : 'outline'}
                      size="sm"
                      onClick={() => handleFileUpload('front')}
                    >
                      {frontUploaded ? 'Change Photo' : 'Upload Photo'}
                    </Button>
                  </div>

                  <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                    backUploaded ? 'border-[--color-success] bg-[--color-success]/5' : 'border-[--color-neutral-300] hover:border-[--color-primary]'
                  }`}>
                    <div className="text-4xl mb-2">{backUploaded ? '✅' : '📷'}</div>
                    <p className="font-medium text-[--color-neutral-700] mb-1">
                      {backUploaded ? 'Back Uploaded' : 'Upload Back'}
                    </p>
                    <p className="text-sm text-[--color-neutral-600] mb-3">
                      Clear photo of the back of your ID
                    </p>
                    <Button
                      variant={backUploaded ? 'secondary' : 'outline'}
                      size="sm"
                      onClick={() => handleFileUpload('back')}
                    >
                      {backUploaded ? 'Change Photo' : 'Upload Photo'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'selfie' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-[--color-neutral-900] mb-4">Take a Selfie</h2>
                
                <div className="text-center space-y-6">
                  <div className={`mx-auto w-48 h-48 rounded-full border-4 border-dashed flex items-center justify-center transition-colors ${
                    selfieUploaded ? 'border-[--color-success] bg-[--color-success]/5' : 'border-[--color-neutral-300]'
                  }`}>
                    <div className="text-6xl">{selfieUploaded ? '✅' : '📸'}</div>
                  </div>
                  
                  <div>
                    <Button
                      variant={selfieUploaded ? 'secondary' : 'primary'}
                      size="lg"
                      onClick={() => handleFileUpload('selfie')}
                    >
                      {selfieUploaded ? 'Retake Selfie' : 'Open Camera'}
                    </Button>
                  </div>

                  <div className="bg-[--color-neutral-100] rounded-lg p-4">
                    <h3 className="font-medium text-[--color-neutral-900] mb-2">Selfie Tips</h3>
                    <ul className="text-sm text-[--color-neutral-600] space-y-1 text-left">
                      <li>• Ensure good lighting</li>
                      <li>• Look directly at the camera</li>
                      <li>• Remove sunglasses or hats</li>
                      <li>• Keep a neutral expression</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'review' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-[--color-neutral-900] mb-4">Review Your Documents</h2>
                
                <div className="space-y-4">
                  <div className="bg-[--color-neutral-50] rounded-lg p-4">
                    <h3 className="font-medium text-[--color-neutral-900] mb-2">Documents Submitted</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[--color-neutral-600]">ID Type:</span>
                        <span className="text-sm font-medium">{idTypes.find(t => t.value === idType)?.label}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[--color-neutral-600]">Front Photo:</span>
                        <span className="text-sm font-medium text-[--color-success]">✓ Uploaded</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[--color-neutral-600]">Back Photo:</span>
                        <span className="text-sm font-medium text-[--color-success]">✓ Uploaded</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[--color-neutral-600]">Selfie:</span>
                        <span className="text-sm font-medium text-[--color-success]">✓ Uploaded</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[--color-warning]/10 border border-[--color-warning]/20 rounded-lg p-4">
                    <p className="text-sm text-[--color-neutral-700]">
                      <strong>Note:</strong> Verification typically takes 1-2 business days. 
                      You'll receive a notification when your identity has been verified.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            {currentStep !== 'id_upload' && (
              <Button
                variant="outline"
                onClick={() => {
                  if (currentStep === 'selfie') setCurrentStep('id_upload')
                  if (currentStep === 'review') setCurrentStep('selfie')
                }}
              >
                Previous
              </Button>
            )}
            
            <div className="ml-auto">
              {currentStep === 'review' ? (
                <Button size="lg">
                  Submit for Verification
                </Button>
              ) : (
                <Button
                  disabled={!canProceed()}
                  onClick={() => {
                    if (currentStep === 'id_upload') setCurrentStep('selfie')
                    if (currentStep === 'selfie') setCurrentStep('review')
                  }}
                >
                  {currentStep === 'id_upload' ? 'Next: Take Selfie' : 'Next: Review'}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}