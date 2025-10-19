'use client';

import { AppLayout } from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlatformIcon } from '@/components/platform-icons';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your platform connections and preferences
          </p>
        </div>

        <Tabs defaultValue="platforms" className="space-y-4">
          <TabsList>
            <TabsTrigger value="platforms">Platform Connections</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="platforms" className="space-y-4">
            {/* AliExpress Connection */}
            <Card className="card-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PlatformIcon platform="aliexpress" size={40} />
                    <div>
                      <CardTitle>AliExpress</CardTitle>
                      <CardDescription>Source products for dropshipping</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Connected</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="ali-api-key">API Key</Label>
                    <Input
                      id="ali-api-key"
                      type="password"
                      placeholder="••••••••••••••••"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ali-secret">API Secret</Label>
                    <Input
                      id="ali-secret"
                      type="password"
                      placeholder="••••••••••••••••"
                      className="mt-1.5"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Test Connection</Button>
                  <Button>Update Credentials</Button>
                </div>
              </CardContent>
            </Card>

            {/* Amazon Connection */}
            <Card className="card-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PlatformIcon platform="amazon" size={40} />
                    <div>
                      <CardTitle>Amazon</CardTitle>
                      <CardDescription>Sell on Amazon marketplace</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Connected</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="amz-seller-id">Seller ID</Label>
                    <Input
                      id="amz-seller-id"
                      placeholder="Enter your Amazon Seller ID"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="amz-mws-token">MWS Auth Token</Label>
                    <Input
                      id="amz-mws-token"
                      type="password"
                      placeholder="••••••••••••••••"
                      className="mt-1.5"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Test Connection</Button>
                  <Button>Update Credentials</Button>
                </div>
              </CardContent>
            </Card>

            {/* Shopify Connection */}
            <Card className="card-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PlatformIcon platform="shopify" size={40} />
                    <div>
                      <CardTitle>Shopify</CardTitle>
                      <CardDescription>Manage your Shopify store</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Connected</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="shopify-store">Store URL</Label>
                    <Input
                      id="shopify-store"
                      placeholder="yourstore.myshopify.com"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="shopify-token">Access Token</Label>
                    <Input
                      id="shopify-token"
                      type="password"
                      placeholder="••••••••••••••••"
                      className="mt-1.5"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Test Connection</Button>
                  <Button>Update Credentials</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation" className="space-y-4">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Sync Settings</CardTitle>
                <CardDescription>Configure automatic synchronization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-sync">Auto-sync products</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically sync product updates every hour
                    </p>
                  </div>
                  <Switch id="auto-sync" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-fulfill">Auto-fulfill orders</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically route orders to AliExpress suppliers
                    </p>
                  </div>
                  <Switch id="auto-fulfill" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="inventory-sync">Inventory synchronization</Label>
                    <p className="text-sm text-muted-foreground">
                      Keep stock levels updated across all platforms
                    </p>
                  </div>
                  <Switch id="inventory-sync" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="price-update">Auto price updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Update prices when supplier costs change
                    </p>
                  </div>
                  <Switch id="price-update" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Pricing Rules</CardTitle>
                <CardDescription>Set markup percentages for products</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="markup-amazon">Amazon Markup %</Label>
                    <Input
                      id="markup-amazon"
                      type="number"
                      placeholder="30"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="markup-shopify">Shopify Markup %</Label>
                    <Input
                      id="markup-shopify"
                      type="number"
                      placeholder="35"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="min-profit">Min Profit $</Label>
                    <Input
                      id="min-profit"
                      type="number"
                      placeholder="5.00"
                      className="mt-1.5"
                    />
                  </div>
                </div>
                <Button>Save Pricing Rules</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Manage your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-orders">New orders</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when new orders are received
                    </p>
                  </div>
                  <Switch id="notify-orders" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-low-stock">Low stock alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Alert when product inventory is running low
                    </p>
                  </div>
                  <Switch id="notify-low-stock" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-sync">Sync status updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Notifications about sync successes and failures
                    </p>
                  </div>
                  <Switch id="notify-sync" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-reports">Daily reports</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive daily performance summaries
                    </p>
                  </div>
                  <Switch id="notify-reports" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-4">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input
                      id="full-name"
                      placeholder="John Doe"
                      defaultValue="User Account"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@example.com"
                      defaultValue="user@example.com"
                      className="mt-1.5"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="mt-1.5"
                  />
                </div>
                <Button>Update Account</Button>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="mt-1.5"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      className="mt-1.5"
                    />
                  </div>
                </div>
                <Button>Change Password</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
