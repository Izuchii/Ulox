import React from 'react';
import { ProgressTracker } from './ui/ProgressTracker';

interface ConveyancingStep {
  id: string;
  label: string;
  status: 'completed' | 'current' | 'pending';
  description?: string;
  date?: string;
}

interface ConveyancingTrackerProps {
  steps: ConveyancingStep[];
  className?: string;
}

export const ConveyancingTracker: React.FC<ConveyancingTrackerProps> = ({
  steps,
  className,
}) => {
  return (
    <div className={className}>
      <div className="bg-white rounded-xl border border-[--color-neutral-200] p-6">
        <h3 className="text-lg font-semibold text-[--color-neutral-900] mb-6">
          Property Purchase Progress
        </h3>
        
        <ProgressTracker steps={steps} />
        
        <div className="mt-6 p-4 bg-[--color-neutral-50] rounded-lg">
          <div className="flex items-start space-x-3">
            <span className="text-[--color-primary] text-lg">ℹ️</span>
            <div>
              <p className="text-sm font-medium text-[--color-neutral-800] mb-1">
                Purchase Process Guide
              </p>
              <p className="text-xs text-[--color-neutral-600]">
                Your property purchase is being processed through our secure escrow system. 
                Each step is verified and tracked for your protection. You'll be notified 
                when action is required from your side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default steps for property purchase
export const defaultConveyancingSteps: ConveyancingStep[] = [
  {
    id: 'offer-accepted',
    label: 'Offer Accepted',
    status: 'completed',
    description: 'Your offer has been accepted by the seller',
    date: '2024-12-10',
  },
  {
    id: 'deposit-paid',
    label: 'Deposit Paid',
    status: 'completed',
    description: 'Initial deposit secured in escrow',
    date: '2024-12-11',
  },
  {
    id: 'title-verification',
    label: 'Title Verification',
    status: 'current',
    description: 'Property title is being verified',
    date: '2024-12-15',
  },
  {
    id: 'conveyancing',
    label: 'Conveyancing Process',
    status: 'pending',
    description: 'Legal transfer of property ownership',
  },
  {
    id: 'registry-lodged',
    label: 'Registry Lodged',
    status: 'pending',
    description: 'Property registration with authorities',
  },
  {
    id: 'settlement',
    label: 'Settlement Complete',
    status: 'pending',
    description: 'Final settlement and key handover',
  },
];