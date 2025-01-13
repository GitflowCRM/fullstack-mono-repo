'use client';

import {
  Frame,
  Page,
  Grid,
  Text,
  Button,
  TextField,
  Select,
} from '@shopify/polaris';
import { ImageIcon, PaintbrushIcon, Search } from 'lucide-react';

export default function SparkBuilder() {
  return (
    <Frame>
      <Page fullWidth>
        <Grid>
          {/* Left Sidebar */}
          <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
            <div className="flex flex-col items-center space-y-6 py-4 h-screen bg-white border-r">
              <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                <PaintbrushIcon className="w-5 h-5" />
              </div>
            </div>
          </Grid.Cell>

          {/* Main Content Area */}
          <Grid.Cell columnSpan={{ xs: 11, sm: 7, md: 7, lg: 8, xl: 8 }}>
            {/* Header */}
            <div className="flex justify-between items-center h-14 bg-white border-b px-4">
              <Text variant="headingMd">Spark Builder (Stage)</Text>
              <div className="flex space-x-2">
                <Button>Preview on mobile</Button>
                <Button>Draft</Button>
                <Button primary>Upgrade to Publish</Button>
              </div>
            </div>

            {/* Editor Content */}
            <div className="p-4 bg-gray-50">
              <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 8, xl: 8 }}>
                  <TextField
                    label="Search Component"
                    prefix={<Search className="w-4 h-4" />}
                  />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 4, xl: 4 }}>
                  <Select
                    label="Screen"
                    options={[{ label: 'Home', value: 'home' }]}
                  />
                </Grid.Cell>
              </Grid>

              {/* Component List */}
              <div className="mt-4">
                <Grid>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 4, xl: 4 }}>
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                      <div className="aspect-video bg-gray-100 rounded flex items-center justify-center mb-4">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                      <Text variant="headingSm">Banner Slider</Text>
                      <Text variant="bodySm" color="subdued">
                        Show a list of sliders with banners
                      </Text>
                    </div>
                  </Grid.Cell>
                  {/* More component cells would go here */}
                </Grid>
              </div>
            </div>
          </Grid.Cell>

          {/* Right Sidebar */}
          <Grid.Cell columnSpan={{ xs: 12, sm: 4, md: 4, lg: 3, xl: 3 }}>
            <div className="p-4 bg-white border-l h-screen">
              <Text variant="headingMd">Product Slider</Text>
              <Text variant="bodySm" color="subdued">
                Drag & Drop to your Design
              </Text>

              <div className="space-y-4 mt-4">
                <TextField label="Grid Title" />
                <TextField label="Search for a collection" />
                <Select
                  label="Number Of Products"
                  options={[
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                    { label: '4', value: '4' },
                  ]}
                />
                {/* Image resizing options would go here */}
                <Button primary fullWidth>
                  Save
                </Button>
              </div>
            </div>
          </Grid.Cell>
        </Grid>
      </Page>
    </Frame>
  );
}
