import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function SettlementPage({ params }: { params: { id: string } }) {
  const caseRef = `ARB-${params.id}-2024-001`;
  const decisionDate = new Date('2024-04-15').toLocaleDateString();
  
  // Mock settlement data - could be worker favored, employer favored, or split decision
  const settlement = {
    outcome: 'worker', // 'worker', 'employer', 'split'
    jobTotal: 12000,
    disputedAmount: 8000,
    awardedAmount: 6000,
    processingFee: 240, // 4% of awarded amount
    netPayout: 5760,
    reason: 'The arbitrator found that the worker completed 75% of the agreed work before the dispute arose. Payment is awarded proportionally with consideration for materials and time invested.',
    paymentMethod: 'Direct Deposit',
    paymentTimeline: '3-5 business days'
  };

  const getOutcomeColor = () => {
    switch (settlement.outcome) {
      case 'worker':
        return 'text-[--color-success] bg-[--color-success]';
      case 'employer':
        return 'text-[--color-error] bg-[--color-error]';
      case 'split':
        return 'text-[--color-warning] bg-[--color-warning]';
      default:
        return 'text-[--color-neutral-600] bg-[--color-neutral-600]';
    }
  };

  const getOutcomeText = () => {
    switch (settlement.outcome) {
      case 'worker':
        return 'Worker Favored';
      case 'employer':
        return 'Employer Favored';
      case 'split':
        return 'Split Decision';
      default:
        return 'Decision Pending';
    }
  };

  const handleAcceptDecision = () => {
    // In real app, would call API to accept settlement
    alert('Decision accepted. Payment processing will begin within 24 hours.');
  };

  const handleAppealDecision = () => {
    // In real app, would navigate to appeal form
    alert('Appeal process initiated. You will be contacted within 48 hours.');
  };

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[--color-neutral-100] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">⚖️</span>
          </div>
          <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-2">
            Arbitration Decision
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="default" className="font-mono">
              {caseRef}
            </Badge>
            <span className="text-sm text-[--color-neutral-600]">
              Decided: {decisionDate}
            </span>
          </div>
        </div>

        {/* Decision Banner */}
        <div className={`${getOutcomeColor()} bg-opacity-10 border border-opacity-30 rounded-lg p-6 mb-6 text-center`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${getOutcomeColor()} bg-opacity-20 rounded-full mb-4`}>
            <span className="text-2xl">
              {settlement.outcome === 'worker' ? '✅' : settlement.outcome === 'employer' ? '❌' : '⚖️'}
            </span>
            <span className={`font-bold text-lg ${getOutcomeColor().split(' ')[0]}`}>
              {getOutcomeText()}
            </span>
          </div>
        </div>

        {/* Decision Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Arbitrator's Decision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[--color-neutral-700] leading-relaxed">
              {settlement.reason}
            </p>
          </CardContent>
        </Card>

        {/* Payout Breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Financial Settlement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[--color-neutral-600]">Original Job Total</span>
                <span className="font-medium">${settlement.jobTotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[--color-neutral-600]">Disputed Amount</span>
                <span className="font-medium">${settlement.disputedAmount.toLocaleString()}</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold">Awarded Amount</span>
                  <span className="font-bold text-[--color-success]">
                    ${settlement.awardedAmount.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="bg-[--color-neutral-50] p-4 rounded-lg">
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-[--color-neutral-600]">Processing Fee (4%)</span>
                  <span>-${settlement.processingFee.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center font-bold text-lg pt-2 border-t">
                  <span>Net Payout</span>
                  <span className="text-[--color-success]">
                    ${settlement.netPayout.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[--color-neutral-600]">Payment Method</span>
                <span className="font-medium">{settlement.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[--color-neutral-600]">Processing Time</span>
                <span className="font-medium">{settlement.paymentTimeline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[--color-neutral-600]">Status</span>
                <Badge variant="warning">Pending Acceptance</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-4 mb-6">
          <Button
            onClick={handleAcceptDecision}
            className="w-full py-3 text-lg"
            size="lg"
          >
            Accept Decision & Process Payment
          </Button>
          
          <div className="text-center">
            <button
              onClick={handleAppealDecision}
              className="text-[--color-primary] hover:underline font-medium"
            >
              Appeal Decision
            </button>
          </div>
        </div>

        {/* Appeal Information */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[--color-neutral-900] mb-4">
              📋 About Appeals
            </h3>
            <div className="space-y-3 text-sm text-[--color-neutral-700]">
              <div className="flex items-start gap-3">
                <span className="text-[--color-primary] font-bold">•</span>
                <p>You have 7 days from this decision to file an appeal</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[--color-primary] font-bold">•</span>
                <p>Appeals require additional evidence or procedural errors</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[--color-primary] font-bold">•</span>
                <p>Appeal fee: $50 (refunded if appeal is successful)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[--color-primary] font-bold">•</span>
                <p>Final decisions are binding and cannot be further appealed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Contact */}
        <div className="bg-[--color-neutral-100] p-6 rounded-lg text-center">
          <h4 className="font-medium text-[--color-neutral-900] mb-3">
            Questions about this decision?
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="sm">
              📧 Email Support
            </Button>
            <Button variant="outline" size="sm">
              📞 Call (555) 123-4567
            </Button>
            <Button variant="outline" size="sm">
              💬 Live Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}