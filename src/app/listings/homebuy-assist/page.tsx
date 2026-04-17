import React from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'

export default function HomebuyAssistPage() {
  const benefits = [
    {
      icon: '💰',
      title: 'Lower Deposit',
      description: 'Start with as little as 5% deposit instead of the usual 20%'
    },
    {
      icon: '🏛️',
      title: 'Government Support',
      description: 'Access government backed loans and first home buyer grants'
    },
    {
      icon: '📈',
      title: 'Flexible Payments',
      description: 'Graduated payment plans that grow with your income'
    }
  ]

  const eligibilitySteps = [
    {
      number: '1',
      title: 'Income Assessment',
      description: 'We evaluate your current income and employment stability'
    },
    {
      number: '2', 
      title: 'Credit Check',
      description: 'Review your credit history and financial commitments'
    },
    {
      number: '3',
      title: 'Property Match',
      description: 'Find suitable properties within your budget range'
    },
    {
      number: '4',
      title: 'Loan Pre-approval',
      description: 'Get pre-approved before you start house hunting'
    }
  ]

  const faqs = [
    {
      question: 'Who is eligible for HomeBuy Assist?',
      answer: 'First-time home buyers, households earning under $120,000 annually, and those purchasing in designated areas.'
    },
    {
      question: 'What is the maximum loan amount?',
      answer: 'Up to $650,000 depending on location and property type, with government backing available.'
    },
    {
      question: 'How long does the approval process take?',
      answer: 'Pre-approval typically takes 3-5 business days, with full approval within 2-3 weeks of application.'
    },
    {
      question: 'Can I use this with other government programs?',
      answer: 'Yes, HomeBuy Assist can be combined with First Home Owner Grants and other eligible programs.'
    }
  ]

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[--color-primary] to-[--color-primary-dark] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Make Homeownership Possible
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Get the keys to your dream home with lower deposits, government support, and flexible payments
            </p>
            <Button size="lg" variant="secondary">
              Check Your Eligibility
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[--color-neutral-900] mb-4">
              Why Choose HomeBuy Assist?
            </h2>
            <p className="text-lg text-[--color-neutral-600]">
              We've helped over 10,000 families achieve their homeownership dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} hover>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-[--color-neutral-900] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[--color-neutral-600]">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility Checker */}
        <div className="mb-16">
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Check if You Qualify</CardTitle>
              <p className="text-[--color-neutral-600]">
                See if you're eligible for HomeBuy Assist in under 2 minutes
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                    Annual Household Income
                  </label>
                  <select className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg bg-white focus:border-[--color-primary] focus:outline-none">
                    <option>Select income range</option>
                    <option>Under $40,000</option>
                    <option>$40,000 - $60,000</option>
                    <option>$60,000 - $80,000</option>
                    <option>$80,000 - $100,000</option>
                    <option>$100,000 - $120,000</option>
                    <option>Over $120,000</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
                    Preferred Location
                  </label>
                  <Input placeholder="Enter city or suburb" />
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-[--color-neutral-300]" />
                    <span className="text-sm text-[--color-neutral-700]">
                      I am a first-time home buyer
                    </span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-[--color-neutral-300]" />
                    <span className="text-sm text-[--color-neutral-700]">
                      I have a deposit saved
                    </span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  Check Eligibility
                </Button>
                
                {/* Mock Result */}
                <div className="bg-[--color-success]/5 border border-[--color-success]/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-[--color-success] text-2xl">✅</span>
                    <span className="font-semibold text-[--color-success]">
                      Great news! You're likely eligible
                    </span>
                  </div>
                  <p className="text-sm text-[--color-neutral-700] mb-3">
                    Based on your responses, you may qualify for:
                  </p>
                  <ul className="text-sm text-[--color-neutral-700] space-y-1">
                    <li>• Loan amount up to $450,000</li>
                    <li>• Minimum 5% deposit required</li>
                    <li>• First Home Owner Grant eligible</li>
                    <li>• Reduced fees and charges</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[--color-neutral-900] mb-4">
              How HomeBuy Assist Works
            </h2>
            <p className="text-lg text-[--color-neutral-600]">
              Simple steps to get you into your new home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibilitySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[--color-primary] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-[--color-neutral-900] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[--color-neutral-600]">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Line */}
                {index < eligibilitySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[--color-primary]/30 transform -translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[--color-primary] text-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Our Impact</h2>
            <p className="text-blue-100">Helping Australians achieve homeownership dreams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Homes Purchased</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.5B</div>
              <div className="text-blue-100">Loans Approved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">14 Days</div>
              <div className="text-blue-100">Average Approval</div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[--color-neutral-900] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[--color-neutral-900] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[--color-neutral-700]">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[--color-neutral-100] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-[--color-neutral-900] mb-4">
            Ready to Own Your First Home?
          </h2>
          <p className="text-lg text-[--color-neutral-600] mb-8">
            Join thousands of successful homeowners who started with HomeBuy Assist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Apply Now
            </Button>
            <Button variant="outline" size="lg">
              Speak to an Advisor
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}