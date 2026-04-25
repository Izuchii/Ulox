'use client';

import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';

interface ContactRevealModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactName: string;
  contactImage: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  onReveal: () => void;
}

export const ContactRevealModal: React.FC<ContactRevealModalProps> = ({
  isOpen,
  onClose,
  contactName,
  contactImage,
  contactInfo,
  onReveal,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reveal Contact Information">
      <div className="space-y-6">
        <div className="text-center">
          <Avatar src={contactImage} alt={contactName} size="xl" className="mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-[--color-neutral-900] mb-2">
            {contactName}
          </h3>
          <p className="text-sm text-[--color-neutral-600]">
            Ready to connect? Reveal their contact information to get in touch.
          </p>
        </div>

        <div className="bg-[--color-neutral-50] rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[--color-neutral-700]">Phone:</span>
            <span className="text-sm text-[--color-neutral-500]">••• ••• ••••</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[--color-neutral-700]">Email:</span>
            <span className="text-sm text-[--color-neutral-500]">•••••@••••.com</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <span className="text-blue-500 text-sm">ℹ️</span>
            <div>
              <p className="text-sm font-medium text-blue-900 mb-1">
                Contact Reveal Policy
              </p>
              <p className="text-xs text-blue-700">
                Once you reveal contact information, the other party will be notified. 
                Please be respectful and follow our community guidelines.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={onReveal} className="flex-1">
            Reveal Contact Info
          </Button>
        </div>
      </div>
    </Modal>
  );
};