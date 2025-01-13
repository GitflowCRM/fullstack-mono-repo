import { Card, Button, Text, Badge } from '@shopify/polaris';
import Image from 'next/image';

interface ThemeCardProps {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  hasCustomize?: boolean;
}

export function ThemeCard({
  name,
  category,
  description,
  imageUrl,
  hasCustomize = false,
}: ThemeCardProps) {
  return (
    <Card>
      <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={`${name} theme preview`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Badge>{category}</Badge>
          <Text as="h3" variant="headingMd">
            {name}
          </Text>
        </div>
        <Text as="p" color="subdued">
          {description}
        </Text>
        <div className="flex gap-2 pt-2">
          {hasCustomize && <Button variant="secondary">Customize</Button>}
          <Button variant="primary">Publish</Button>
        </div>
      </div>
    </Card>
  );
}
