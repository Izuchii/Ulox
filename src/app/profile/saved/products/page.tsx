'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';
import { products } from '@/lib/sample-data';

export default function SavedProductsPage() {
  // Mock saved products data - extending from sample data
  const savedProducts = [
    {
      id: '1',
      name: 'Modern Coffee Table',
      price: 299,
      currency: 'USD',
      image: 'https://picsum.photos/seed/product1/300/300',
      rating: 4.8,
      reviews: 124,
      category: 'Furniture',
      inStock: true,
      description: 'Sleek modern coffee table perfect for any living room.',
      savedDate: '2024-04-15',
      originalPrice: 399,
      discount: 25
    },
    {
      id: '2',
      name: 'Smart Home Security System',
      price: 199,
      currency: 'USD',
      image: 'https://picsum.photos/seed/product2/300/300',
      rating: 4.6,
      reviews: 89,
      category: 'Security',
      inStock: true,
      description: 'Complete home security system with mobile app control.',
      savedDate: '2024-04-12',
      originalPrice: 249,
      discount: 20
    },
    {
      id: '3',
      name: 'LED Ceiling Light',
      price: 89,
      currency: 'USD',
      image: 'https://picsum.photos/seed/product3/300/300',
      rating: 4.4,
      reviews: 67,
      category: 'Lighting',
      inStock: true,
      description: 'Energy-efficient LED ceiling light with dimmer.',
      savedDate: '2024-04-10',
      originalPrice: 89,
      discount: 0
    },
    {
      id: '4',
      name: 'Kitchen Appliance Set',
      price: 899,
      currency: 'USD',
      image: 'https://picsum.photos/seed/product4/300/300',
      rating: 4.9,
      reviews: 203,
      category: 'Appliances',
      inStock: false,
      description: 'Complete kitchen appliance set for modern homes.',
      savedDate: '2024-04-08',
      originalPrice: 1199,
      discount: 25
    },
    {
      id: '5',
      name: 'Ergonomic Office Chair',
      price: 459,
      currency: 'USD',
      image: 'https://picsum.photos/seed/product5/300/300',
      rating: 4.7,
      reviews: 156,
      category: 'Furniture',
      inStock: true,
      description: 'Professional ergonomic chair for home office.',
      savedDate: '2024-04-05',
      originalPrice: 459,
      discount: 0
    },
    {
      id: '6',
      name: 'Wireless Speaker Set',
      price: 149,
      currency: 'USD',
      image: 'https://picsum.photos/seed/product6/300/300',
      rating: 4.5,
      reviews: 98,
      category: 'Electronics',
      inStock: true,
      description: 'Premium wireless speakers with surround sound.',
      savedDate: '2024-04-03',
      originalPrice: 199,
      discount: 25
    }
  ];

  const formatSavedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const ProductCard = ({ product, onRemove }: { product: any; onRemove: (id: string) => void }) => (
    <Card hover className="group h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover rounded-t-lg"
        />
        
        {/* Remove Button Overlay */}
        <button 
          onClick={() => onRemove(product.id)}
          className="absolute top-2 right-2 w-8 h-8 bg-[--color-error] bg-opacity-80 hover:bg-opacity-100 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <span className="text-sm">✕</span>
        </button>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg flex items-center justify-center">
            <Badge variant="error">Out of Stock</Badge>
          </div>
        )}

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-2 left-2">
            <Badge variant="sale">-{product.discount}%</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="default" className="text-xs">
            {product.category}
          </Badge>
          <span className="text-xs text-[--color-neutral-500]">
            Saved {formatSavedDate(product.savedDate)}
          </span>
        </div>

        <h3 className="font-semibold text-[--color-neutral-900] mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          {renderStars(product.rating)}
          <span className="text-sm text-[--color-neutral-600]">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-[--color-primary]">
            ${product.price}
          </span>
          {product.discount > 0 && (
            <span className="text-sm text-[--color-neutral-500] line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="flex-1"
            disabled={!product.inStock}
          >
            Add to Cart
          </Button>
          <Button variant="outline" size="sm">
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const handleRemoveProduct = (productId: string) => {
    // In real app, would call API to remove from saved
    console.log('Removing product:', productId);
    alert('Product removed from saved items');
  };

  const EmptyState = () => (
    <div className="text-center py-16">
      <div className="text-6xl mb-4">🛒</div>
      <h3 className="text-xl font-semibold text-[--color-neutral-900] mb-2">
        No Saved Products Yet
      </h3>
      <p className="text-[--color-neutral-600] mb-6 max-w-md mx-auto">
        Save products you're interested in to easily find them later and track price changes.
      </p>
      <Link href="/dwellhub/goods">
        <Button>Browse Products</Button>
      </Link>
    </div>
  );

  if (savedProducts.length === 0) {
    return (
      <div className="min-h-screen bg-[--color-neutral-50] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <Link href="/profile" className="text-[--color-primary] hover:underline mb-4 inline-block">
              ← Back to Profile
            </Link>
            <h1 className="text-2xl font-bold text-[--color-neutral-900]">
              Saved Products (0)
            </h1>
          </div>
          <Card>
            <CardContent>
              <EmptyState />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/profile" className="text-[--color-primary] hover:underline mb-4 inline-block">
            ← Back to Profile
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[--color-neutral-900]">
              Saved Products ({savedProducts.length})
            </h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Sort by Date
              </Button>
              <Button variant="outline" size="sm">
                Filter by Category
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[--color-success] mb-1">
                {savedProducts.filter(p => p.discount > 0).length}
              </div>
              <div className="text-sm text-[--color-neutral-600]">
                On Sale
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[--color-primary] mb-1">
                ${savedProducts.reduce((total, p) => total + (p.originalPrice - p.price), 0)}
              </div>
              <div className="text-sm text-[--color-neutral-600]">
                Total Savings
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[--color-warning] mb-1">
                {savedProducts.filter(p => !p.inStock).length}
              </div>
              <div className="text-sm text-[--color-neutral-600]">
                Out of Stock
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {savedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRemove={handleRemoveProduct}
            />
          ))}
        </div>

        {/* Bulk Actions */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Select All</span>
                </label>
                <span className="text-sm text-[--color-neutral-600]">
                  0 selected
                </span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Add Selected to Cart
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Remove Selected
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Create Wishlist
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}