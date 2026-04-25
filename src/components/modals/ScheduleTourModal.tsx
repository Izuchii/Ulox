'use client';

import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface ScheduleTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
}

export const ScheduleTourModal: React.FC<ScheduleTourModalProps> = ({
  isOpen,
  onClose,
  propertyTitle,
}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tour scheduling logic
    console.log('Schedule tour:', { selectedDate, selectedTime, ...formData });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule Property Tour" className="max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <p className="text-sm text-[--color-neutral-600] mb-4">
            Schedule a tour for <strong>{propertyTitle}</strong>
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:border-[--color-primary] focus:outline-none focus:ring-1 focus:ring-[--color-primary]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[--color-neutral-700] mb-2">
            Select Time
          </label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`px-3 py-2 text-sm border rounded-lg transition-colors ${
                  selectedTime === time
                    ? 'border-[--color-primary] bg-[--color-primary] text-white'
                    : 'border-[--color-neutral-300] hover:border-[--color-primary] hover:text-[--color-primary]'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          
          <Input
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          
          <div>
            <label className="block text-sm font-medium text-[--color-neutral-700] mb-1">
              Message (Optional)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:border-[--color-primary] focus:outline-none focus:ring-1 focus:ring-[--color-primary]"
              placeholder="Any specific requests or questions..."
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <Button type="button" variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="flex-1"
            disabled={!selectedDate || !selectedTime}
          >
            Schedule Tour
          </Button>
        </div>
      </form>
    </Modal>
  );
};