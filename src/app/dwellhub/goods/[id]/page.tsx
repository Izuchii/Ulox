'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { StarRating } from '@/components/ui/StarRating'
import { Tabs } from '@/components/ui/Tabs'
import { products } from '@/lib/sample-data'

export default function ProductDetailPage() {
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('Black')

  const product = products.find(p => p.id === params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[--color-neutral-900] mb-2">Product Not Found</h1>
          <p className="text-[--color-neutral-600] mb-4">The product you're looking for doesn't exist.</p>
          <Link href="/dwellhub/goods">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Mock additional images and data
  const images = [
    product.image,
    'https://picsum.photos/seed/prod' + product.id + 'a/600/600',
    'https://picsum.photos/seed/prod' + product.id + 'b/600/600',
    'https://picsum.photos/seed/prod' + product.id + 'c/600/600'
  ]

  const colors = ['Black', 'White', 'Brown', 'Gray']
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id)

  const tabs = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div className="space-y-4">
          <p className="text-[--color-neutral-700] leading-relaxed">
            {product.description}
          </p>
          <p className="text-[--color-neutral-700] leading-relaxed">
            This premium {product.name.toLowerCase()} is crafted with attention to detail and built to last. 
            Perfect for modern homes, it combines functionality with elegant design. Made from high-quality 
            materials with a durable finish that resists everyday wear and tear.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h4 className="font-semibold text-[--color-neutral-900] mb-2">Features</h4>
              <ul className="text-sm text-[--color-neutral-700] space-y-1">
                <li>• Premium materials</li>
                <li>• Easy assembly</li>
                <li>• Scratch resistant</li>
                <li>• Modern design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[--color-neutral-900] mb-2">Care Instructions</h4>
              <ul className="text-sm text-[--color-neutral-700] space-y-1">
                <li>• Clean with damp cloth</li>
                <li>• Avoid harsh chemicals</li>
                <li>• Keep away from direct sunlight</li>
                <li>• Regular maintenance recommended</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      label: 'Specifications',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-[--color-neutral-200]">
                <span className="text-[--color-neutral-600]">Brand:</span>
                <span className="font-medium">ModernHome</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[--color-neutral-200]">
                <span className="text-[--color-neutral-600]">Material:</span>
                <span className="font-medium">Wood & Metal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[--color-neutral-200]">
                <span className="text-[--color-neutral-600]">Dimensions:</span>
                <span className="font-medium">48" x 24" x 18"</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[--color-neutral-200]">
                <span className="text-[--color-neutral-600]">Weight:</span>
                <span className="font-medium">25 lbs</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-[--color-neutral-200]">
                <span className="text-[--color-neutral-600]">Color Options:</span>
                <span className="font-medium">4 colors</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[--color-neutral-200]">
                <span className="text-[--color-neutral-600]">Warranty:</span>
                <span className="font-medium">2 years</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[--color-neutral-200]">
                <span className="text-[--color-neutral-600]">Assembly:</span>
                <span className="font-medium">Required</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[--color-neutral-200]">
                <span className="text-[--color-neutral-600]">Origin:</span>
                <span className="font-medium">Made in USA</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reviews',
      label: 'Reviews',
      content: (
        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[--color-neutral-900]">{product.rating}</div>
              <StarRating rating={product.rating} />
              <div className="text-sm text-[--color-neutral-600] mt-1">
                Based on {product.reviews} reviews
              </div>
            </div>
            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-3 mb-2">
                  <span className="text-sm w-8">{stars}★</span>
                  <div className="flex-1 h-2 bg-[--color-neutral-200] rounded-full">
                    <div 
                      className="h-2 bg-[--color-warning] rounded-full"
                      style={{ width: `${Math.random() * 80 + 20}%` }}
                    />
                  </div>
                  <span className="text-sm text-[--color-neutral-600] w-8">{Math.floor(Math.random() * 50)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Sarah K.', rating: 5, comment: 'Excellent quality and fast delivery. Exactly as described!', date: '2 days ago' },
              { name: 'Mike R.', rating: 4, comment: 'Great product, minor issue with assembly but overall very happy.', date: '1 week ago' },
              { name: 'Lisa M.', rating: 5, comment: 'Perfect for my living room. Looks even better in person.', date: '2 weeks ago' }
            ].map((review, index) => (
              <div key={index} className="border-b border-[--color-neutral-200] pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium">{review.name}</span>
                    <StarRating rating={review.rating} size="sm" />
                  </div>
                  <span className="text-sm text-[--color-neutral-500]">{review.date}</span>
                </div>
                <p className="text-[--color-neutral-700]">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="min-h-screen bg-[--color-neutral-50]">
      {/* Back Button */}
      <div className="bg-white border-b border-[--color-neutral-200]">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Link href="/dwellhub/goods" className="inline-flex items-center text-[--color-primary] hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <div
                className="w-full h-96 bg-cover bg-center rounded-lg border border-[--color-neutral-200]"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`w-full h-20 bg-cover bg-center rounded-lg border-2 cursor-pointer ${
                    currentImageIndex === index ? 'border-[--color-primary]' : 'border-[--color-neutral-200]'
                  }`}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="default" className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-[--color-neutral-900] mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <StarRating rating={product.rating} />
                <span className="text-sm text-[--color-neutral-600]">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="text-3xl font-bold text-[--color-primary] mb-4">
                ${product.price}
                {!product.inStock && (
                  <span className="text-base font-normal text-[--color-error] ml-2">Out of Stock</span>
                )}
              </div>
              <p className="text-[--color-neutral-700] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-[--color-neutral-900] mb-2">Color</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg text-sm ${
                      selectedColor === color
                        ? 'border-[--color-primary] bg-[--color-primary] text-white'
                        : 'border-[--color-neutral-300] hover:border-[--color-primary]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-[--color-neutral-900] mb-2">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-10 h-10 border border-[--color-neutral-300] rounded-lg flex items-center justify-center hover:border-[--color-primary]"
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="px-4 py-2 border border-[--color-neutral-300] rounded-lg min-w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[--color-neutral-300] rounded-lg flex items-center justify-center hover:border-[--color-primary]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full" 
                size="lg"
                disabled={!product.inStock}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Buy Now
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="bg-[--color-neutral-50] rounded-lg p-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span>🚚</span>
                  <span className="text-sm text-[--color-neutral-700]">
                    <strong>Free delivery</strong> on orders over $500
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📦</span>
                  <span className="text-sm text-[--color-neutral-700]">
                    Standard delivery in 3-5 business days
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🔄</span>
                  <span className="text-sm text-[--color-neutral-700]">
                    30-day return policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[--color-neutral-900] mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg border border-[--color-neutral-200] p-4 hover:shadow-md transition-shadow">
                  <Link href={`/dwellhub/goods/${relatedProduct.id}`}>
                    <div
                      className="w-full h-32 bg-cover bg-center rounded-lg mb-3"
                      style={{ backgroundImage: `url(${relatedProduct.image})` }}
                    />
                    <h3 className="font-medium text-[--color-neutral-900] mb-1 text-sm">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[--color-primary]">
                        ${relatedProduct.price}
                      </span>
                      <StarRating rating={relatedProduct.rating} size="sm" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}