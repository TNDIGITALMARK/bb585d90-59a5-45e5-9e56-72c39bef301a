'use client';

import { useState } from 'react';
import { StoreLayout } from '@/components/store/store-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { CreditCard, Lock, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [formData, setFormData] = useState({
    // Contact Info
    email: '',
    phone: '',

    // Billing Address
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingApt: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: 'US',

    // Shipping Address
    shippingFirstName: '',
    shippingLastName: '',
    shippingAddress: '',
    shippingApt: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: 'US',

    // Payment
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvc: '',
  });

  // Mock cart items
  const cartItems = [
    { id: 1, name: 'Premium Wireless Headphones', price: 199.99, quantity: 1 },
    { id: 2, name: 'Smart Fitness Watch', price: 149.99, quantity: 2 },
    { id: 3, name: 'Portable Bluetooth Speaker', price: 79.99, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, process payment and create order
    alert('Order placed successfully!');
    router.push('/store');
  };

  return (
    <StoreLayout cartCount={cartItems.length}>
      <div className="container-narrow py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground text-lg">Complete your purchase securely</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Billing Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="billingFirstName">First Name *</Label>
                      <Input
                        id="billingFirstName"
                        value={formData.billingFirstName}
                        onChange={(e) => handleInputChange('billingFirstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="billingLastName">Last Name *</Label>
                      <Input
                        id="billingLastName"
                        value={formData.billingLastName}
                        onChange={(e) => handleInputChange('billingLastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="billingAddress">Street Address *</Label>
                    <Input
                      id="billingAddress"
                      placeholder="123 Main St"
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="billingApt">Apt, Suite (Optional)</Label>
                    <Input
                      id="billingApt"
                      placeholder="Apt 4B"
                      value={formData.billingApt}
                      onChange={(e) => handleInputChange('billingApt', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="billingCity">City *</Label>
                      <Input
                        id="billingCity"
                        value={formData.billingCity}
                        onChange={(e) => handleInputChange('billingCity', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="billingState">State *</Label>
                      <Select
                        value={formData.billingState}
                        onValueChange={(value) => handleInputChange('billingState', value)}
                        required
                      >
                        <SelectTrigger id="billingState">
                          <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="billingZip">ZIP Code *</Label>
                      <Input
                        id="billingZip"
                        placeholder="12345"
                        value={formData.billingZip}
                        onChange={(e) => handleInputChange('billingZip', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sameAsBilling"
                      checked={sameAsBilling}
                      onCheckedChange={(checked) => setSameAsBilling(checked as boolean)}
                    />
                    <label
                      htmlFor="sameAsBilling"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Same as billing address
                    </label>
                  </div>

                  {!sameAsBilling && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="shippingFirstName">First Name *</Label>
                          <Input
                            id="shippingFirstName"
                            value={formData.shippingFirstName}
                            onChange={(e) => handleInputChange('shippingFirstName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="shippingLastName">Last Name *</Label>
                          <Input
                            id="shippingLastName"
                            value={formData.shippingLastName}
                            onChange={(e) => handleInputChange('shippingLastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="shippingAddress">Street Address *</Label>
                        <Input
                          id="shippingAddress"
                          value={formData.shippingAddress}
                          onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="shippingApt">Apt, Suite (Optional)</Label>
                        <Input
                          id="shippingApt"
                          value={formData.shippingApt}
                          onChange={(e) => handleInputChange('shippingApt', e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="shippingCity">City *</Label>
                          <Input
                            id="shippingCity"
                            value={formData.shippingCity}
                            onChange={(e) => handleInputChange('shippingCity', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="shippingState">State *</Label>
                          <Select
                            value={formData.shippingState}
                            onValueChange={(value) => handleInputChange('shippingState', value)}
                          >
                            <SelectTrigger id="shippingState">
                              <SelectValue placeholder="State" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CA">California</SelectItem>
                              <SelectItem value="NY">New York</SelectItem>
                              <SelectItem value="TX">Texas</SelectItem>
                              <SelectItem value="FL">Florida</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="shippingZip">ZIP Code *</Label>
                          <Input
                            id="shippingZip"
                            value={formData.shippingZip}
                            onChange={(e) => handleInputChange('shippingZip', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cardName">Cardholder Name *</Label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      value={formData.cardName}
                      onChange={(e) => handleInputChange('cardName', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cardExpiry">Expiry Date *</Label>
                      <Input
                        id="cardExpiry"
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardCvc">CVC *</Label>
                      <Input
                        id="cardCvc"
                        placeholder="123"
                        value={formData.cardCvc}
                        onChange={(e) => handleInputChange('cardCvc', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Lock className="h-4 w-4" />
                    <span>Your payment information is encrypted and secure</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-success">FREE</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-2xl">${total.toFixed(2)}</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Place Order
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By placing this order, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </StoreLayout>
  );
}
