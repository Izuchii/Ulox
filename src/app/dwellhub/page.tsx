import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function DwellHubPage() {
  return (
    <div className="min-h-screen bg-[--background]">
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[--color-neutral-900] mb-4">
            Welcome to DwellHub
          </h1>
          <p className="text-xl text-[--color-neutral-600] mb-8">
            Everything you need to make your space perfect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/dwellhub/goods">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[--color-neutral-200] hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-4">🛍️</div>
                <h2 className="text-2xl font-bold text-[--color-neutral-900] mb-2">
                  Goods & Products
                </h2>
                <p className="text-[--color-neutral-600] mb-4">
                  Shop furniture, appliances, decor, and everything for your home
                </p>
                <Button>Browse Products</Button>
              </div>
            </div>
          </Link>

          <Link href="/dwellhub/services">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[--color-neutral-200] hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-4">🔧</div>
                <h2 className="text-2xl font-bold text-[--color-neutral-900] mb-2">
                  Services
                </h2>
                <p className="text-[--color-neutral-600] mb-4">
                  Find trusted professionals for cleaning, repairs, and maintenance
                </p>
                <Button>Find Services</Button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}