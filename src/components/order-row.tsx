import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlatformBadge } from './platform-icons';
import { ChevronRight, Package, Truck, CheckCircle, Clock } from 'lucide-react';

type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'confirmed';

interface OrderRowProps {
  orderId: string;
  platform: 'amazon' | 'shopify';
  productName: string;
  customerName?: string;
  amount: number;
  status: OrderStatus;
  orderDate: string;
  trackingNumber?: string;
  onViewDetails?: () => void;
}

const statusConfig: Record<OrderStatus, { label: string; icon: any; color: string }> = {
  pending: { label: 'Pending', icon: Clock, color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  processing: { label: 'Processing', icon: Package, color: 'bg-blue-100 text-blue-800 border-blue-200' },
  shipped: { label: 'Shipped', icon: Truck, color: 'bg-purple-100 text-purple-800 border-purple-200' },
  delivered: { label: 'Delivered', icon: CheckCircle, color: 'bg-green-100 text-green-800 border-green-200' },
  confirmed: { label: 'Confirmed', icon: CheckCircle, color: 'bg-green-100 text-green-800 border-green-200' },
};

export function OrderRow({
  orderId,
  platform,
  productName,
  customerName,
  amount,
  status,
  orderDate,
  trackingNumber,
  onViewDetails,
}: OrderRowProps) {
  const StatusIcon = statusConfig[status].icon;

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="flex-shrink-0">
          <StatusIcon className="h-5 w-5 text-muted-foreground" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-sm">{orderId}</span>
            <PlatformBadge platform={platform} label="" />
          </div>
          <p className="text-sm text-muted-foreground truncate">{productName}</p>
          {customerName && (
            <p className="text-xs text-muted-foreground mt-0.5">{customerName}</p>
          )}
        </div>

        <div className="hidden md:flex flex-col items-end gap-1 flex-shrink-0">
          <span className="font-semibold">${amount.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground">{orderDate}</span>
        </div>

        <div className="hidden md:block flex-shrink-0 min-w-[120px]">
          <Badge
            variant="outline"
            className={`${statusConfig[status].color} border`}
          >
            {statusConfig[status].label}
          </Badge>
          {trackingNumber && (
            <p className="text-xs text-muted-foreground mt-1 truncate">
              {trackingNumber}
            </p>
          )}
        </div>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={onViewDetails}
        className="flex-shrink-0 ml-2"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
