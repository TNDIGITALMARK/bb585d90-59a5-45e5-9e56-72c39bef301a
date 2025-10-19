'use client';

import { AppLayout } from '@/components/app-layout';
import { OrderRow } from '@/components/order-row';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Download, RefreshCw, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock order data from specifications
const mockOrders = [
  {
    orderId: 'AMZ-12345',
    platform: 'amazon' as const,
    productName: 'Bluetooth Speaker Wireless Portable',
    customerName: 'John Smith',
    amount: 45.99,
    status: 'shipped' as const,
    orderDate: '2025-10-18',
    trackingNumber: 'TRK-789456123',
  },
  {
    orderId: 'SHOP-67890',
    platform: 'shopify' as const,
    productName: 'Phone Accessories Bundle (Case + Screen Protector)',
    customerName: 'Sarah Johnson',
    amount: 29.99,
    status: 'processing' as const,
    orderDate: '2025-10-18',
  },
  {
    orderId: 'AMZ-54321',
    platform: 'amazon' as const,
    productName: 'LED Strip Lights 16ft RGB Color Changing',
    customerName: 'Mike Davis',
    amount: 24.99,
    status: 'delivered' as const,
    orderDate: '2025-10-17',
    trackingNumber: 'TRK-456789123',
  },
  {
    orderId: 'SHOP-11223',
    platform: 'shopify' as const,
    productName: 'Wireless Charging Pad Fast Charge Station',
    customerName: 'Emily Brown',
    amount: 16.99,
    status: 'pending' as const,
    orderDate: '2025-10-19',
  },
  {
    orderId: 'AMZ-99887',
    platform: 'amazon' as const,
    productName: 'Smart Watch Fitness Tracker Heart Rate Monitor',
    customerName: 'David Wilson',
    amount: 34.99,
    status: 'processing' as const,
    orderDate: '2025-10-19',
  },
  {
    orderId: 'SHOP-44556',
    platform: 'shopify' as const,
    productName: 'Portable Bluetooth Speaker Waterproof IPX7',
    customerName: 'Lisa Anderson',
    amount: 29.99,
    status: 'shipped' as const,
    orderDate: '2025-10-18',
    trackingNumber: 'TRK-123789456',
  },
  {
    orderId: 'AMZ-77889',
    platform: 'amazon' as const,
    productName: 'USB-C Cable 3-Pack Fast Charging 6ft Braided',
    customerName: 'Robert Taylor',
    amount: 14.99,
    status: 'delivered' as const,
    orderDate: '2025-10-16',
    trackingNumber: 'TRK-987654321',
  },
  {
    orderId: 'SHOP-33445',
    platform: 'shopify' as const,
    productName: 'Camera Tripod Adjustable Phone Holder Stand',
    customerName: 'Jennifer White',
    amount: 22.99,
    status: 'pending' as const,
    orderDate: '2025-10-19',
  },
  {
    orderId: 'AMZ-66778',
    platform: 'amazon' as const,
    productName: 'Bluetooth Headphones Wireless Over-Ear',
    customerName: 'Michael Garcia',
    amount: 19.99,
    status: 'shipped' as const,
    orderDate: '2025-10-17',
    trackingNumber: 'TRK-654987321',
  },
  {
    orderId: 'SHOP-22334',
    platform: 'shopify' as const,
    productName: 'Phone Case Set - Protective & Stylish (3 Pack)',
    customerName: 'Amanda Martinez',
    amount: 12.99,
    status: 'processing' as const,
    orderDate: '2025-10-18',
  },
];

const statusCounts = {
  all: mockOrders.length,
  pending: mockOrders.filter(o => o.status === 'pending').length,
  processing: mockOrders.filter(o => o.status === 'processing').length,
  shipped: mockOrders.filter(o => o.status === 'shipped').length,
  delivered: mockOrders.filter(o => o.status === 'delivered').length,
};

export default function OrdersPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Order Management Hub</h1>
            <p className="text-muted-foreground mt-1">
              Centralized order processing and fulfillment across all platforms
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Orders
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-5">
          <Card className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statusCounts.all}</div>
              <p className="text-xs text-muted-foreground mt-1">
                This month
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {statusCounts.pending}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Need action
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {statusCounts.processing}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                In progress
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Shipped
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {statusCounts.shipped}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                In transit
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Delivered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {statusCounts.delivered}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Completed
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
                  placeholder="Search orders by ID, customer name, or product..."
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
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="shopify">Shopify</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="date-desc">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">Newest First</SelectItem>
                    <SelectItem value="date-asc">Oldest First</SelectItem>
                    <SelectItem value="amount-desc">Highest Amount</SelectItem>
                    <SelectItem value="amount-asc">Lowest Amount</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Tabs */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">
              All Orders
              <Badge variant="secondary" className="ml-2">
                {statusCounts.all}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              <Badge variant="secondary" className="ml-2">
                {statusCounts.pending}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="processing">
              Processing
              <Badge variant="secondary" className="ml-2">
                {statusCounts.processing}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="shipped">
              Shipped
              <Badge variant="secondary" className="ml-2">
                {statusCounts.shipped}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="delivered">
              Delivered
              <Badge variant="secondary" className="ml-2">
                {statusCounts.delivered}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {mockOrders.map((order) => (
              <OrderRow
                key={order.orderId}
                {...order}
                onViewDetails={() => console.log('View order:', order.orderId)}
              />
            ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-3">
            {mockOrders
              .filter(o => o.status === 'pending')
              .map((order) => (
                <OrderRow
                  key={order.orderId}
                  {...order}
                  onViewDetails={() => console.log('View order:', order.orderId)}
                />
              ))}
          </TabsContent>

          <TabsContent value="processing" className="space-y-3">
            {mockOrders
              .filter(o => o.status === 'processing')
              .map((order) => (
                <OrderRow
                  key={order.orderId}
                  {...order}
                  onViewDetails={() => console.log('View order:', order.orderId)}
                />
              ))}
          </TabsContent>

          <TabsContent value="shipped" className="space-y-3">
            {mockOrders
              .filter(o => o.status === 'shipped')
              .map((order) => (
                <OrderRow
                  key={order.orderId}
                  {...order}
                  onViewDetails={() => console.log('View order:', order.orderId)}
                />
              ))}
          </TabsContent>

          <TabsContent value="delivered" className="space-y-3">
            {mockOrders
              .filter(o => o.status === 'delivered')
              .map((order) => (
                <OrderRow
                  key={order.orderId}
                  {...order}
                  onViewDetails={() => console.log('View order:', order.orderId)}
                />
              ))}
          </TabsContent>
        </Tabs>

        {/* Bulk Actions */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-base">Automated Fulfillment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">
                  Automatically route pending orders to the best AliExpress suppliers
                  based on price, shipping time, and reliability.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-medium">
                    Auto-fulfillment enabled for {statusCounts.pending} pending orders
                  </span>
                </div>
              </div>
              <Button className="bg-secondary hover:bg-secondary/90">
                Process All Pending
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
