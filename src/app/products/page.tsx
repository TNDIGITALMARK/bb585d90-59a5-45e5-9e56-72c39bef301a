'use client';

import { AppLayout } from '@/components/app-layout';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Download, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock product data from specifications
const mockProducts = [
  {
    id: 'prod-001',
    name: 'Bluetooth Headphones Wireless Over-Ear',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    sourcePlatform: 'aliexpress' as const,
    syncedTo: ['amazon', 'shopify'] as const,
    stock: 45,
  },
  {
    id: 'prod-002',
    name: 'Phone Case Set - Protective & Stylish (3 Pack)',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
    sourcePlatform: 'aliexpress' as const,
    syncedTo: ['shopify'] as const,
    stock: 120,
  },
  {
    id: 'prod-003',
    name: 'LED Strip Lights RGB Color Changing 16ft Smart',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    sourcePlatform: 'aliexpress' as const,
    syncedTo: ['amazon'] as const,
    stock: 8,
  },
  {
    id: 'prod-004',
    name: 'Wireless Charging Pad Fast Charge Station',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1591290619762-c588f0e8d3b7?w=400&h=400&fit=crop',
    sourcePlatform: 'aliexpress' as const,
    syncedTo: [],
    stock: 67,
  },
  {
    id: 'prod-005',
    name: 'Smart Watch Fitness Tracker Heart Rate Monitor',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    sourcePlatform: 'aliexpress' as const,
    syncedTo: ['amazon', 'shopify'] as const,
    stock: 28,
  },
  {
    id: 'prod-006',
    name: 'Portable Bluetooth Speaker Waterproof IPX7',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    sourcePlatform: 'aliexpress' as const,
    syncedTo: ['amazon'] as const,
    stock: 92,
  },
  {
    id: 'prod-007',
    name: 'USB-C Cable 3-Pack Fast Charging 6ft Braided',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop',
    sourcePlatform: 'aliexpress' as const,
    syncedTo: ['shopify'] as const,
    stock: 200,
  },
  {
    id: 'prod-008',
    name: 'Camera Tripod Adjustable Phone Holder Stand',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1606986628032-eb0e43e2b8f5?w=400&h=400&fit=crop',
    sourcePlatform: 'aliexpress' as const,
    syncedTo: [],
    stock: 55,
  },
];

export default function ProductsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Product Sync Center</h1>
            <p className="text-muted-foreground mt-1">
              Discover, import, and sync products across all platforms
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Bulk Import
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync All
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">312</div>
              <p className="text-xs text-muted-foreground mt-1">
                Across all platforms
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Not Synced
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground mt-1">
                Require action
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Low Stock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-1">
                Need restock
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Last Sync
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2h ago</div>
              <p className="text-xs text-muted-foreground mt-1">
                All platforms
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="card-shadow">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products by name, SKU, or category..."
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Platforms</SelectItem>
                    <SelectItem value="aliexpress">AliExpress</SelectItem>
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="shopify">Shopify</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="synced">Synced</SelectItem>
                    <SelectItem value="not-synced">Not Synced</SelectItem>
                    <SelectItem value="low-stock">Low Stock</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different views */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">
              All Products
              <Badge variant="secondary" className="ml-2">
                {mockProducts.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="synced">
              Synced
              <Badge variant="secondary" className="ml-2">
                {mockProducts.filter(p => p.syncedTo.length > 0).length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="not-synced">
              Not Synced
              <Badge variant="secondary" className="ml-2">
                {mockProducts.filter(p => p.syncedTo.length === 0).length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="low-stock">
              Low Stock
              <Badge variant="secondary" className="ml-2">
                {mockProducts.filter(p => p.stock < 10).length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mockProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onSync={() => console.log('Sync product:', product.id)}
                  onView={() => console.log('View product:', product.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="synced" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mockProducts
                .filter(p => p.syncedTo.length > 0)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onSync={() => console.log('Sync product:', product.id)}
                    onView={() => console.log('View product:', product.id)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="not-synced" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mockProducts
                .filter(p => p.syncedTo.length === 0)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onSync={() => console.log('Sync product:', product.id)}
                    onView={() => console.log('View product:', product.id)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="low-stock" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mockProducts
                .filter(p => p.stock < 10)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onSync={() => console.log('Sync product:', product.id)}
                    onView={() => console.log('View product:', product.id)}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
