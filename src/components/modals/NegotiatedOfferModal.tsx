'use client';

import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface NegotiatedOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  currentOffer: number;
  offerHistory?: Array<{
    amount: number;
    from: 'client' | 'provider';
    timestamp: string;
    status: 'pending' | 'accepted' | 'declined';
  }>;
}

export const NegotiatedOfferModal: React.FC<NegotiatedOfferModalProps> = ({
  isOpen,
  onClose,
  serviceName,
  currentOffer,
  offerHistory = [],
}) => {
  const [counterOffer, setCounterOffer] = useState('');
  const [message, setMessage] = useState('');

  const handleCounterOffer = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle counter offer logic
    console.log('Counter offer:', { counterOffer, message });
    onClose();
  };

  const handleAcceptOffer = () => {
    // Handle accept offer logic
    console.log('Accept offer:', currentOffer);
    onClose();
  };

  const handleDeclineOffer = () => {
    // Handle decline offer logic
    console.log('Decline offer:', currentOffer);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Negotiate Service Price" className="max-w-lg">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-[--color-neutral-600] mb-2">
            Service: <strong>{serviceName}</strong>
          </p>
          <p className="text-lg font-semibold text-[--color-primary]">
            Current Offer: ${currentOffer}
          </p>
        </div>

        {/* Offer History */}
        {offerHistory.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-[--color-neutral-700] mb-3">
              Negotiation History
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {offerHistory.map((offer, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg text-sm ${
                    offer.from === 'client'
                      ? 'bg-[--color-primary] bg-opacity-10 text-[--color-primary]'
                      : 'bg-[--color-neutral-100] text-[--color-neutral-700]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {offer.from === 'client' ? 'You' : 'Provider'}: ${offer.amount}
                    </span>
                    <span className="text-xs opacity-75">
                      {offer.timestamp}
                    </span>
                  </div>
                  <div className="text-xs opacity-75 mt-1">
                    Status: {offer.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Counter Offer Form */}
        <form onSubmit={handleCounterOffer} className="space-y-4">
          <Input
            label="Your Counter Offer ($)"
            type="number"
            value={counterOffer}
            onChange={(e) => setCounterOffer(e.target.value)}
            placeholder="Enter your offer amount"
          />
          
          <div>
            <label className="block text-sm font-medium text-[--color-neutral-700] mb-1">
              Message (Optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:border-[--color-primary] focus:outline-none focus:ring-1 focus:ring-[--color-primary]"
              placeholder="Explain your counter offer..."
            />
          </div>

          <div className="flex space-x-2">
            <Button type="submit" variant="outline" className="flex-1">
              Send Counter Offer
            </Button>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[--color-neutral-200]">
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={handleDeclineOffer}
              className="flex-1"
            >
              Decline Offer
            </Button>
            <Button 
              onClick={handleAcceptOffer}
              className="flex-1"
            >
              Accept ${currentOffer}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};