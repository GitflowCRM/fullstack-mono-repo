import { Card, Button, Text } from '@shopify/polaris';
import Image from 'next/image';

interface FeaturedThemeProps {
  name: string;
  lastSaved: string;
  imageUrl: string;
}

export function FeaturedTheme({
  name,
  lastSaved,
  imageUrl,
}: FeaturedThemeProps) {
  return (
    <Card>
      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${name} theme preview`}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <div>
            <Text as="h2" variant="headingLg">
              {name}
            </Text>
            <Text as="p" color="subdued">
              Built on Airy theme
            </Text>
            <Text as="p" color="subdued">
              Last saved: {lastSaved}
            </Text>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Continue editing</Button>
            <Button variant="secondary" icon="MobileMajor">
              Preview on mobile
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
