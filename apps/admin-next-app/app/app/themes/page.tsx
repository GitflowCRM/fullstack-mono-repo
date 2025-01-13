'use client';

import { Page, Layout, Text } from '@shopify/polaris';
import { ThemeCard } from '@/components/theme-card';
import { FeaturedTheme } from '@/components/featured-theme';

export default function ThemesPage() {
  const themes = [
    {
      name: 'Airy',
      category: 'Clothing',
      description:
        'Minimal and versatile, plenty of fresh air for scalability and customization.',
      imageUrl:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20at%2012.37.06%E2%80%AFAM-ZiK08UExL7dn2XUz88mbolvTElCFoO.png',
    },
    {
      name: 'Ascend',
      category: 'Clothing',
      description:
        'Minimal and versatile, plenty of fresh air for scalability and customization.',
      imageUrl:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20at%2012.37.06%E2%80%AFAM-ZiK08UExL7dn2XUz88mbolvTElCFoO.png',
    },
    {
      name: 'Breeze',
      category: 'Clothing',
      description:
        'Sleek and stylish, ideal for fashion brands looking for scalability and elegance.',
      imageUrl:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20at%2012.37.06%E2%80%AFAM-ZiK08UExL7dn2XUz88mbolvTElCFoO.png',
    },
    {
      name: 'TechHub',
      category: 'Electronics',
      description:
        'Designed for modern electronics stores, showcasing products with precision and innovation.',
      imageUrl:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20at%2012.37.06%E2%80%AFAM-ZiK08UExL7dn2XUz88mbolvTElCFoO.png',
    },
    {
      name: 'GlowUp',
      category: 'Beauty',
      description:
        'Sophisticated and versatile, designed for beauty and skincare products.',
      imageUrl:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20at%2012.37.06%E2%80%AFAM-ZiK08UExL7dn2XUz88mbolvTElCFoO.png',
    },
    {
      name: 'Drift',
      category: 'Perfumes',
      description:
        'Elegant and refined, perfect for luxury perfume and fragrance brands.',
      imageUrl:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20at%2012.37.06%E2%80%AFAM-ZiK08UExL7dn2XUz88mbolvTElCFoO.png',
      hasCustomize: true,
    },
  ];

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <div className="space-y-4">
            <Text as="h1" variant="headingXl">
              Themes
            </Text>
            <Text as="p" variant="bodyMd" tone="subdued">
              Customize your app&apos;s appearance with our pre-built themes or
              create your own.
            </Text>
          </div>
        </Layout.Section>

        <Layout.Section>
          <FeaturedTheme
            name="Airy"
            lastSaved="Nov 27, 2024 at 10:58 pm"
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20at%2012.37.06%E2%80%AFAM-ZiK08UExL7dn2XUz88mbolvTElCFoO.png"
          />
        </Layout.Section>

        <Layout.Section>
          <div className="space-y-4">
            <Text as="h2" variant="headingLg">
              App design
            </Text>
            <Text as="p" variant="bodyMd" tone="subdued">
              Customize layouts, colors, and navigation to create a seamless
              shopping experience.
            </Text>
          </div>
        </Layout.Section>

        <Layout.Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <ThemeCard
                key={theme.name}
                name={theme.name}
                category={theme.category}
                description={theme.description}
                imageUrl={theme.imageUrl}
                hasCustomize={theme.hasCustomize}
              />
            ))}
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
