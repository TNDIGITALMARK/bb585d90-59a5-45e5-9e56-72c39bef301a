'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: 'new' | 'sale' | 'featured';
  rating?: number;
  reviews?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <Card className="product-card overflow-hidden border-0 shadow-md">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link href={`/store/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className={`badge badge-${product.badge}`}>
              {product.badge === 'sale' && hasDiscount ? `-${discountPercent}%` : product.badge}
            </span>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
          {product.category}
        </p>

        {/* Product Name */}
        <Link href={`/store/product/${product.id}`}>
          <h3 className="font-semibold text-base mb-2 hover:text-secondary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            {product.reviews && (
              <span className="text-xs text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            )}
          </div>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="price">
              ${product.price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="price-original text-sm">
                ${product.originalPrice!.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            size="sm"
            className="bg-secondary hover:bg-secondary/90 text-white"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
