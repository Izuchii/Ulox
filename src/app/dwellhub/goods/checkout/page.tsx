'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    city: '',
    state: '',
    landmark: ''
  });
  const [selectedDeliverySpeed, setSelectedDeliverySpeed] = useState('standard');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [otpTimer, setOtpTimer] = useState(300); // 5 minutes
  const [showOTP] = useState('4827');

  const savedAddresses = [
    {
      id: '1',
      label: 'Home',
      address: '123 Main Street, Downtown, Lagos State',
      isDefault: true
    },
    {
      id: '2',
      label: 'Office',
      address: '456 Business Ave, Victoria Island, Lagos State',
      isDefault: false
    }
  ];

  const deliveryOptions = [
    { id: 'express', label: 'Express (1-2 hours)', price: 1500, description: 'Get it today' },
    { id: 'fast', label: 'Fast (2-4 hours)', price: 800, description: 'Same day delivery' },
    { id: 'standard', label: 'Standard (24 hours)', price: 300, description: 'Next day delivery' }
  ];

  const paymentMethods = [
    { id: 'card', label: 'Debit/Credit Card', icon: '💳' },
    { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
    { id: 'ussd', label: 'USSD', icon: '📱' },
    { id: 'wallet', label: 'Digital Wallet', icon: '💰' }
  ];

  const orderTotal = 12450;
  const deliveryFee = deliveryOptions.find(opt => opt.id === selectedDeliverySpeed)?.price || 300;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  React.useEffect(() => {
    if (currentStep === 3 && otpTimer > 0) {
      const interval = setInterval(() => {
        setOtpTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentStep, otpTimer]);

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep
                ? 'bg-[--color-primary] text-white'
                : 'bg-[--color-neutral-200] text-[--color-neutral-600]'
            }`}
          >
            {step}
          </div>
          {step < 4 && (
            <div
              className={`w-12 h-0.5 mx-2 ${
                step < currentStep ? 'bg-[--color-primary]' : 'bg-[--color-neutral-200]'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[--color-neutral-900]">Delivery Address</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Saved Addresses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {savedAddresses.map((address) => (
            <div
              key={address.id}
              className="flex items-start justify-between p-4 border border-[--color-neutral-200] rounded-lg cursor-pointer hover:border-[--color-primary]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{address.label}</span>
                  {address.isDefault && <Badge variant="featured">Default</Badge>}
                </div>
                <p className="text-sm text-[--color-neutral-600] mt-1">{address.address}</p>
              </div>
              <input type="radio" name="address" defaultChecked={address.isDefault} />
            </div>
          ))}
          
          <div className="border border-dashed border-[--color-neutral-300] rounded-lg p-4">
            <h4 className="font-medium mb-3">Add New Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street Address"
                className="px-3 py-2 border border-[--color-neutral-300] rounded-lg"
                value={deliveryAddress.street}
                onChange={(e) => setDeliveryAddress({...deliveryAddress, street: e.target.value})}
              />
              <input
                type="text"
                placeholder="City"
                className="px-3 py-2 border border-[--color-neutral-300] rounded-lg"
                value={deliveryAddress.city}
                onChange={(e) => setDeliveryAddress({...deliveryAddress, city: e.target.value})}
              />
              <input
                type="text"
                placeholder="State"
                className="px-3 py-2 border border-[--color-neutral-300] rounded-lg"
                value={deliveryAddress.state}
                onChange={(e) => setDeliveryAddress({...deliveryAddress, state: e.target.value})}
              />
              <input
                type="text"
                placeholder="Landmark"
                className="px-3 py-2 border border-[--color-neutral-300] rounded-lg"
                value={deliveryAddress.landmark}
                onChange={(e) => setDeliveryAddress({...deliveryAddress, landmark: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Delivery Speed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {deliveryOptions.map((option) => (
            <div
              key={option.id}
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                selectedDeliverySpeed === option.id
                  ? 'border-[--color-primary] bg-[--color-primary] bg-opacity-5'
                  : 'border-[--color-neutral-200] hover:border-[--color-primary]'
              }`}
              onClick={() => setSelectedDeliverySpeed(option.id)}
            >
              <div>
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-[--color-neutral-600]">{option.description}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">₦{option.price.toLocaleString()}</div>
                <input
                  type="radio"
                  name="delivery"
                  checked={selectedDeliverySpeed === option.id}
                  onChange={() => {}}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button onClick={() => setCurrentStep(2)} className="w-full">
        Continue to Payment
      </Button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[--color-neutral-900]">Payment</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₦{orderTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>₦{(orderTotal + deliveryFee).toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer ${
                selectedPaymentMethod === method.id
                  ? 'border-[--color-primary] bg-[--color-primary] bg-opacity-5'
                  : 'border-[--color-neutral-200] hover:border-[--color-primary]'
              }`}
              onClick={() => setSelectedPaymentMethod(method.id)}
            >
              <span className="text-2xl">{method.icon}</span>
              <span className="font-medium">{method.label}</span>
              <input
                type="radio"
                name="payment"
                checked={selectedPaymentMethod === method.id}
                onChange={() => {}}
                className="ml-auto"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
          Back
        </Button>
        <Button 
          onClick={() => setCurrentStep(3)} 
          className="flex-1"
          disabled={!selectedPaymentMethod}
        >
          Place Order
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[--color-neutral-900]">Delivery OTP</h2>
      
      <Card>
        <CardContent className="text-center py-8">
          <div className="mb-4">
            <span className="text-4xl">📦</span>
          </div>
          <h3 className="text-xl font-bold mb-4">Your Delivery OTP</h3>
          <div className="text-6xl font-mono font-bold text-[--color-primary] mb-4">
            {showOTP}
          </div>
          <p className="text-[--color-neutral-600] mb-6">
            Show this code to your delivery person
          </p>
          <div className="text-lg font-medium text-[--color-warning]">
            Expires in: {formatTime(otpTimer)}
          </div>
        </CardContent>
      </Card>

      <div className="bg-[--color-neutral-50] p-4 rounded-lg">
        <h4 className="font-medium mb-2">⚠️ Important:</h4>
        <ul className="text-sm text-[--color-neutral-600] space-y-1">
          <li>• Only share this OTP with your delivery person</li>
          <li>• Verify the delivery person's identity before sharing</li>
          <li>• OTP will expire automatically after delivery time</li>
        </ul>
      </div>

      <Button onClick={() => setCurrentStep(4)} className="w-full">
        Delivery Completed
      </Button>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6 text-center">
      <div className="text-6xl mb-4">✅</div>
      <h2 className="text-2xl font-bold text-[--color-success]">Order Confirmed!</h2>
      
      <Card>
        <CardContent className="py-6">
          <div className="space-y-3">
            <div className="text-lg font-medium">Order #DH-20240417-0156</div>
            <Badge variant="success">Confirmed</Badge>
            <div className="text-sm text-[--color-neutral-600]">
              Estimated delivery: Tomorrow, 2:00 PM - 6:00 PM
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="outline" className="flex-1">
          Track Order
        </Button>
        <Button className="flex-1">
          Continue Shopping
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-2xl mx-auto px-4">
        {renderStepIndicator()}
        
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
      </div>
    </div>
  );
}