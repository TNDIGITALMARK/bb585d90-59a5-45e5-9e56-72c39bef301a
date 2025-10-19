import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlatformBadge } from './platform-icons';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image?: string;
  sourcePlatform: 'aliexpress' | 'amazon' | 'shopify';
  syncedTo?: ('amazon' | 'shopify')[];
  stock?: number;
  onSync?: () => void;
  onView?: () => void;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  sourcePlatform,
  syncedTo = [],
  stock,
  onSync,
  onView,
}: ProductCardProps) {
  return (
    <Card className="card-shadow card-shadow-hover overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square bg-muted">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">No image</span>
            </div>
          )}
          {stock !== undefined && stock < 10 && (
            <Badge
              variant="destructive"
              className="absolute top-2 right-2"
            >
              Low Stock: {stock}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-base mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          <PlatformBadge platform={sourcePlatform} label="" />
        </div>
        {syncedTo.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            <span className="text-xs text-muted-foreground">Synced to:</span>
            {syncedTo.map((platform) => (
              <PlatformBadge key={platform} platform={platform} label="" />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="default"
          size="sm"
          className="flex-1 bg-secondary hover:bg-secondary/90"
          onClick={onSync}
        >
          Sync Product
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onView}
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
