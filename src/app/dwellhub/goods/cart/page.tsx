'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { products } from '@/lib/sample-data'

export default function CartPage() {
  // Constants for pricing (values in USD)
  const FREE_DELIVERY_THRESHOLD = 50000 // $500.00
  const STANDARD_DELIVERY_FEE = 2500 // $25.00

  // Mock cart items
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 2, selectedColor: 'Black' },
    { ...products[1], quantity: 1, selectedColor: 'White' }
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const deliveryFee = subtotal > FREE_DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE
  const discount = 0
  const total = subtotal + deliveryFee - discount

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[--color-neutral-50]">
        <div className="bg-white border-b border-[--color-neutral-200]">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-[--color-neutral-900]">My Cart</h1>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-[--color-neutral-900] mb-2">
              Your cart is empty
            </h2>
            <p className="text-[--color-neutral-600] mb-8">
              Add some products to get started
            </p>
            <Link href="/dwellhub/goods">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Header */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 mb-2">
            <Link href="/dwellhub/goods" className="text-[--color-primary] hover:underline">
              ← Continue Shopping
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-[--color-neutral-900]">
            My Cart ({cartItems.length} items)
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border border-[--color-neutral-200]"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-[--color-neutral-900] mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-[--color-neutral-600] mb-1">
                            Color: {item.selectedColor}
                          </p>
                          <p className="text-sm text-[--color-neutral-600]">
                            Category: {item.category}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[--color-error] hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-[--color-neutral-300] rounded-lg flex items-center justify-center hover:border-[--color-primary]"
                          >
                            −
                          </button>
                          <span className="px-3 py-1 border border-[--color-neutral-300] rounded-lg text-center min-w-12">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-[--color-neutral-300] rounded-lg flex items-center justify-center hover:border-[--color-primary]"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-lg font-bold text-[--color-primary]">
                            ${(item.price * item.quantity).toLocaleString()}</p>
                          <p className="text-sm text-[--color-neutral-600]">
                            ${item.price} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[--color-neutral-700]">Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-[--color-neutral-700]">Delivery fee</span>
                    <span className={`font-medium ${deliveryFee === 0 ? 'text-[--color-success]' : ''}`}>
                      {deliveryFee === 0 ? 'FREE' : `$${(deliveryFee / 100).toLocaleString()}`}
                    </span>
                  </div>
                  
                  {deliveryFee > 0 && (
                    <p className="text-xs text-[--color-neutral-600]">
                      Free delivery on orders over $500
                    </p>
                  )}
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-[--color-neutral-700]">Discount</span>
                      <span className="font-medium text-[--color-success]">
                        -${discount.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="border-t border-[--color-neutral-200] pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[--color-primary]">${total.toLocaleString()}</span>
                  </div>
                </div>
                
                <Link href="/dwellhub/goods/checkout">
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <Link href="/dwellhub/goods">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>

                {/* Promo Code */}
                <div className="pt-4 border-t border-[--color-neutral-200]">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:border-[--color-primary] focus:outline-none"
                    />
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="mt-4 p-4 bg-[--color-success]/5 border border-[--color-success]/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <span className="text-[--color-success] text-lg">🔒</span>
                <div>
                  <p className="text-sm font-medium text-[--color-success]">Secure Checkout</p>
                  <p className="text-xs text-[--color-neutral-700]">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}