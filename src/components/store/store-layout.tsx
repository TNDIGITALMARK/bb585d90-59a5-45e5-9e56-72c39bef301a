'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface StoreLayoutProps {
  children: ReactNode;
  cartCount?: number;
}

export function StoreLayout({ children, cartCount = 0 }: StoreLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container-narrow">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/store" className="flex items-center gap-2">
              <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
                S
              </div>
              <span className="text-2xl font-bold font-heading">Shopify</span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 w-full"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Link href="/store/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="cart-badge">{cartCount}</span>
                  )}
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 pb-4 border-t pt-4">
            <Link href="/store" className="font-medium hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/store/products" className="font-medium hover:text-secondary transition-colors">
              All Products
            </Link>
            <Link href="/store/products?category=electronics" className="font-medium hover:text-secondary transition-colors">
              Electronics
            </Link>
            <Link href="/store/products?category=accessories" className="font-medium hover:text-secondary transition-colors">
              Accessories
            </Link>
            <Link href="/store/products?sale=true" className="font-medium hover:text-secondary transition-colors text-sale-color">
              Sale
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-auto">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Your trusted online store for quality products at great prices. We deliver excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/store/products" className="text-white/80 hover:text-white transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/store/cart" className="text-white/80 hover:text-white transition-colors">
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link href="/store/about" className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/store/contact" className="text-white/80 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/store/shipping" className="text-white/80 hover:text-white transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/store/returns" className="text-white/80 hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-white/80 text-sm mb-3">
                Subscribe for exclusive offers
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-secondary hover:bg-secondary/90">
                  Join
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2025 Shopify Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
