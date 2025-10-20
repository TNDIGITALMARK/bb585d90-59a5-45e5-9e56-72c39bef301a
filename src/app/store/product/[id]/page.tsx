'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { StoreLayout } from '@/components/store/store-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ShoppingCart, Heart, Share2, Truck, ShieldCheck, RefreshCcw, MinusCircle, PlusCircle } from 'lucide-react';
import { ProductCard } from '@/components/store/product-card';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'High-quality sound with active noise cancellation',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80',
    ],
    category: 'Electronics',
    badge: 'sale' as const,
    rating: 4.8,
    reviews: 342,
    inStock: true,
    sku: 'WH-PRE-001',
    features: [
      'Active Noise Cancellation',
      '40-hour battery life',
      'Premium sound quality',
      'Comfortable over-ear design',
      'Bluetooth 5.0 connectivity',
      'Foldable with carrying case',
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 Ohms',
      'Battery Life': '40 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
    },
  },
];

const relatedProducts = [
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof speaker with 20-hour battery life',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    category: 'Audio',
    rating: 4.7,
    reviews: 456,
  },
  {
    id: 8,
    name: 'Wireless Mouse',
    description: 'Ergonomic design with precision tracking',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
    category: 'Electronics',
    badge: 'sale' as const,
    rating: 4.6,
    reviews: 789,
  },
  {
    id: 10,
    name: 'Noise Cancelling Earbuds',
    description: 'True wireless with premium sound quality',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1590658165737-15a047b7a7a5?w=800&q=80',
    category: 'Audio',
    badge: 'sale' as const,
    rating: 4.7,
    reviews: 612,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  // In a real app, fetch product based on params.id
  const product = products[0];

  const handleAddToCart = () => {
    setCartCount((prev) => prev + quantity);
  };

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <StoreLayout cartCount={cartCount}>
      <div className="container-narrow py-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className={`badge badge-${product.badge}`}>
                    {product.badge === 'sale' && hasDiscount ? `-${discountPercent}%` : product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category & SKU */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="uppercase tracking-wide">{product.category}</span>
              <span>•</span>
              <span>SKU: {product.sku}</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold price">
                ${product.price.toFixed(2)}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-2xl price-original">
                    ${product.originalPrice!.toFixed(2)}
                  </span>
                  <span className="badge badge-sale text-base">
                    Save {discountPercent}%
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div>
              {product.inStock ? (
                <p className="text-success font-semibold">✓ In Stock - Ships within 24 hours</p>
              ) : (
                <p className="text-destructive font-semibold">Out of Stock</p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label className="font-semibold">Quantity:</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <MinusCircle className="h-5 w-5" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <PlusCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg py-6"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="px-6">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-6">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <Card className="bg-muted/30">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Free Shipping</p>
                    <p className="text-sm text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">2 Year Warranty</p>
                    <p className="text-sm text-muted-foreground">Full manufacturer warranty</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCcw className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">30-Day Returns</p>
                    <p className="text-sm text-muted-foreground">Easy returns and exchanges</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="features" className="mb-16">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b last:border-0">
                      <span className="font-semibold">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
                <p className="text-muted-foreground">Reviews coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={() => setCartCount((prev) => prev + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}
