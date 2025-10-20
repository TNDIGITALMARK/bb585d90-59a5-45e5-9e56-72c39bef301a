'use client';

import { useState } from 'react';
import { StoreLayout } from '@/components/store/store-layout';
import { ProductCard } from '@/components/store/product-card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, TrendingUp, Sparkles } from 'lucide-react';

// Mock product data for the store
const featuredProducts = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'High-quality sound with active noise cancellation',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics',
    badge: 'sale' as const,
    rating: 4.8,
    reviews: 342,
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    description: 'Track your health and fitness goals',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Wearables',
    badge: 'new' as const,
    rating: 4.6,
    reviews: 218,
  },
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
    id: 4,
    name: 'Professional Camera Lens',
    description: '50mm f/1.8 prime lens for stunning portraits',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1606980624994-0d8e3b66dc96?w=800&q=80',
    category: 'Photography',
    badge: 'featured' as const,
    rating: 4.9,
    reviews: 189,
  },
  {
    id: 5,
    name: 'Minimalist Backpack',
    description: 'Perfect for daily commute and travel',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    category: 'Accessories',
    badge: 'sale' as const,
    rating: 4.5,
    reviews: 523,
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    description: 'RGB backlit with custom switches',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviews: 391,
  },
  {
    id: 7,
    name: 'Leather Wallet',
    description: 'Handcrafted genuine leather bifold wallet',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    category: 'Accessories',
    badge: 'new' as const,
    rating: 4.4,
    reviews: 167,
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
];

export default function StorePage() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
    // In real app, this would add to cart context/state
  };

  return (
    <StoreLayout cartCount={cartCount}>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Premium Collection</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover Amazing Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Shop the latest electronics, accessories, and more. Curated for quality, delivered with care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold px-8 py-6 text-lg"
              >
                View Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Audio', 'Photography', 'Accessories'].map((category) => (
              <button
                key={category}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-semibold text-lg">{category}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-narrow">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground text-lg">Handpicked items just for you</p>
            </div>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-8 w-8 text-secondary" />
            <h2 className="text-3xl md:text-4xl font-bold">Best Sellers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={`bestseller-${product.id}`}
                product={product}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container-narrow text-center">
          <Star className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our VIP Club</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get exclusive access to early sales, special discounts, and member-only products
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8"
          >
            Sign Up Now
          </Button>
        </div>
      </section>
    </StoreLayout>
  );
}
