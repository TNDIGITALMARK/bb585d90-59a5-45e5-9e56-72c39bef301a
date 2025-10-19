'use client';

import { AppLayout } from '@/components/app-layout';
import { MetricCard } from '@/components/metric-card';
import { OrderRow } from '@/components/order-row';
import { PlatformIcon } from '@/components/platform-icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DollarSign,
  ShoppingCart,
  Package,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock data from specifications
const mockData = {
  totalRevenue: 24750,
  pendingOrders: 47,
  activeProducts: 312,
  conversionRate: 3.2,
  amazonSales: 14200,
  shopifySales: 10550,
  aliexpressOrders: 89,
};

const salesData = [
  { name: 'Mon', sales: 3200 },
  { name: 'Tue', sales: 2800 },
  { name: 'Wed', sales: 4100 },
  { name: 'Thu', sales: 3600 },
  { name: 'Fri', sales: 4800 },
  { name: 'Sat', sales: 3900 },
  { name: 'Sun', sales: 2300 },
];

const platformData = [
  { name: 'Amazon', value: mockData.amazonSales, color: 'hsl(213 94% 68%)' },
  { name: 'Shopify', value: mockData.shopifySales, color: 'hsl(158 64% 52%)' },
  { name: 'AliExpress', value: mockData.aliexpressOrders * 50, color: 'hsl(14 100% 60%)' },
];

const recentOrders = [
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
];

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Unified view of your multi-platform e-commerce business
            </p>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Sync All Platforms
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Revenue"
            value={`$${mockData.totalRevenue.toLocaleString()}`}
            subtitle="Last 30 days"
            icon={DollarSign}
            trend={{ value: 12.5, isPositive: true }}
          />
          <MetricCard
            title="Pending Orders"
            value={mockData.pendingOrders}
            subtitle="Require action"
            icon={ShoppingCart}
          />
          <MetricCard
            title="Active Products"
            value={mockData.activeProducts}
            subtitle="Across all platforms"
            icon={Package}
          />
          <MetricCard
            title="Conversion Rate"
            value={`${mockData.conversionRate}%`}
            subtitle="Average across platforms"
            icon={TrendingUp}
            trend={{ value: 0.8, isPositive: true }}
          />
        </div>

        {/* Platform Overview & Sales Chart */}
        <div className="grid gap-4 lg:grid-cols-7">
          {/* Sales Overview Chart */}
          <Card className="card-shadow lg:col-span-4">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Platform Breakdown */}
          <Card className="card-shadow lg:col-span-3">
            <CardHeader>
              <CardTitle>Platform Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-4">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PlatformIcon platform="amazon" size={24} />
                    <span className="text-sm font-medium">Amazon</span>
                  </div>
                  <span className="font-semibold">${mockData.amazonSales.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PlatformIcon platform="shopify" size={24} />
                    <span className="text-sm font-medium">Shopify</span>
                  </div>
                  <span className="font-semibold">${mockData.shopifySales.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PlatformIcon platform="aliexpress" size={24} />
                    <span className="text-sm font-medium">AliExpress</span>
                  </div>
                  <span className="font-semibold">{mockData.aliexpressOrders} orders</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="card-shadow">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>
            <Link href="/orders">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentOrders.map((order) => (
              <OrderRow
                key={order.orderId}
                {...order}
                onViewDetails={() => console.log('View order:', order.orderId)}
              />
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="card-shadow card-shadow-hover cursor-pointer">
            <CardHeader>
              <CardTitle className="text-base">Import Products</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Discover and import products from AliExpress to your stores
              </p>
              <Link href="/products">
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Browse Products
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="card-shadow card-shadow-hover cursor-pointer">
            <CardHeader>
              <CardTitle className="text-base">Sync Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Update inventory levels across all connected platforms
              </p>
              <Button variant="outline" className="w-full">
                Run Sync
              </Button>
            </CardContent>
          </Card>

          <Card className="card-shadow card-shadow-hover cursor-pointer">
            <CardHeader>
              <CardTitle className="text-base">Manage Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Process pending orders and manage fulfillment
              </p>
              <Link href="/orders">
                <Button variant="outline" className="w-full">
                  View Orders
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
