'use client';

import { useState } from 'react';
import { StoreLayout } from '@/components/store/store-layout';
import { ProductCard } from '@/components/store/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, SlidersHorizontal } from 'lucide-react';

// Extended product catalog
const allProducts = [
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
  {
    id: 9,
    name: 'USB-C Hub Adapter',
    description: 'Multi-port hub with HDMI and USB 3.0',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80',
    category: 'Electronics',
    rating: 4.3,
    reviews: 234,
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
  {
    id: 11,
    name: 'Smartphone Stand',
    description: 'Adjustable aluminum desk stand',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80',
    category: 'Accessories',
    rating: 4.5,
    reviews: 445,
  },
  {
    id: 12,
    name: 'Wireless Charging Pad',
    description: 'Fast charging for all Qi-enabled devices',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1591290619762-cbe9bf5e0a58?w=800&q=80',
    category: 'Electronics',
    badge: 'new' as const,
    rating: 4.4,
    reviews: 298,
  },
];

const categories = ['All', 'Electronics', 'Audio', 'Photography', 'Accessories', 'Wearables'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: 'Over $200', min: 200, max: Infinity },
];

export default function ProductsPage() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const handleAddToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
  };

  // Filter products
  let filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  return (
    <StoreLayout cartCount={cartCount}>
      <div className="container-narrow py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          <p className="text-muted-foreground text-lg">
            Browse our complete collection of {allProducts.length} products
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-muted/30 p-6 rounded-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Category</Label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox
                          id={category}
                          checked={selectedCategory === category}
                          onCheckedChange={() => setSelectedCategory(category)}
                        />
                        <label
                          htmlFor={category}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Price Range</Label>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div key={range.label} className="flex items-center">
                        <Checkbox
                          id={range.label}
                          checked={selectedPriceRange.label === range.label}
                          onCheckedChange={() => setSelectedPriceRange(range)}
                        />
                        <label
                          htmlFor={range.label}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <Label htmlFor="sort" className="text-base font-semibold mb-3 block">
                    Sort By
                  </Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger id="sort">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">No products found</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedPriceRange(priceRanges[0]);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </StoreLayout>
  );
}
