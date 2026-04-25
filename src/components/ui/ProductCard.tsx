'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import { Badge } from './Badge';
import { StarRating } from './StarRating';
import { Button } from './Button';

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (id: string) => void;
  onSave?: (id: string) => void;
  saved?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onSave,
  saved = false,
}) => {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative">
        <div
          className="h-48 bg-[--color-neutral-200] bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        
        <div className="absolute top-2 left-2">
          {!product.inStock && (
            <Badge variant="error">Out of Stock</Badge>
          )}
        </div>
        
        <button
          onClick={() => onSave?.(product.id)}
          className={`absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all ${
            saved ? 'text-red-500' : 'text-[--color-neutral-500]'
          }`}
        >
          {saved ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <Badge variant="default" className="text-xs mb-2">
            {product.category}
          </Badge>
          <h3 className="font-semibold text-[--color-neutral-900] mb-1 line-clamp-2">
            {product.name}
          </h3>
        </div>
        
        <div className="flex items-center space-x-2 mb-3">
          <StarRating rating={product.rating} size="sm" />
          <span className="text-xs text-[--color-neutral-500]">
            ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-[--color-primary]">
              ${product.price}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Link href={`/dwellhub/goods/${product.id}`}>
              <Button variant="outline" size="sm">
                View
              </Button>
            </Link>
            {product.inStock && (
              <Button
                size="sm"
                onClick={() => onAddToCart?.(product.id)}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};