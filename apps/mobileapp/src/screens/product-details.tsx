import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import {
  Share2,
  MoreVertical,
  Star,
  ChevronRight,
  ShoppingCart,
} from 'lucide-react-native';
import { ImageGallery } from '../ui/image-gallery';
import { SizeSelector } from '../ui/size-selector';
import { ColorSelector } from '../ui/color-selector';
import { RatingBars } from '../ui/rating-bars';
import { ProductCard } from '../ui/product-card';

const productImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7lF73yPvTUHp8DN1zXeCPOzlIpoUMz.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7lF73yPvTUHp8DN1zXeCPOzlIpoUMz.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7lF73yPvTUHp8DN1zXeCPOzlIpoUMz.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7lF73yPvTUHp8DN1zXeCPOzlIpoUMz.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7lF73yPvTUHp8DN1zXeCPOzlIpoUMz.png',
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = [
  '#4500ff',
  '#dedede',
  '#f5f4f4',
  '#f3f3f3',
  '#dadada',
  '#c4c4c4',
];

const ratings = [
  { rating: 5, count: 150 },
  { rating: 4, count: 50 },
  { rating: 3, count: 20 },
  { rating: 2, count: 5 },
  { rating: 1, count: 2 },
];

const similarProducts = [
  {
    title: 'Moda Chic Luxurious Shirt',
    price: 200.0,
    image: 'https://via.placeholder.com/200x250',
  },
  {
    title: 'Trend Craft Fleece Shirt',
    price: 210.0,
    image: 'https://via.placeholder.com/200x250',
  },
  {
    title: 'Street Style Comfort Shirt',
    price: 190.0,
    image: 'https://via.placeholder.com/200x250',
  },
];

export default function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <View className="flex-1 justify-center bg-gray-100">
      <View className="w-full overflow-hidden rounded-xl bg-[#181a20]">
        <View className="relative h-[844px] overflow-hidden">
          {/* Header */}
          <View className="flex-row items-center justify-between p-4 absolute top-0 left-0 right-0 z-10">
            <TouchableOpacity className="p-2">
              <ChevronRight
                color="white"
                size={24}
                style={{ transform: [{ rotate: '180deg' }] }}
              />
            </TouchableOpacity>
            <Text className="text-lg font-medium text-white">Product</Text>
            <View className="flex-row gap-4">
              <TouchableOpacity className="p-2">
                <Share2 color="white" size={24} />
              </TouchableOpacity>
              <TouchableOpacity className="p-2">
                <MoreVertical color="white" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView className="h-[844px]">
            <View className="px-3 pt-16">
              <ImageGallery images={productImages} />

              {/* Product Info */}
              <View className="mt-6">
                <Text className="text-xl font-semibold mb-2 text-white">
                  Urban Blend Long Sleeve Shirt
                </Text>
                <View className="flex-row items-center justify-between mb-6">
                  <Text className="text-xl font-bold text-[#528f65]">
                    $185.00
                  </Text>
                  <Text className="text-sm text-gray-400 line-through">
                    $75 off
                  </Text>
                </View>

                <SizeSelector
                  sizes={sizes}
                  selectedSize={selectedSize}
                  onSelectSize={setSelectedSize}
                />

                <ColorSelector
                  colors={colors}
                  selectedColor={selectedColor}
                  onSelectColor={setSelectedColor}
                />

                <TouchableOpacity className="w-full bg-[#528f65] py-6 rounded-lg mb-6 flex-row items-center justify-center">
                  <ShoppingCart
                    color="white"
                    size={20}
                    style={{ marginRight: 8 }}
                  />
                  <Text className="text-white font-semibold">Add to Cart</Text>
                </TouchableOpacity>

                {/* Product Information */}
                <View className="space-y-4 mb-6">
                  <Text className="text-lg font-semibold text-white">
                    Product Information
                  </Text>
                  <View className="flex-row flex-wrap">
                    {[
                      { label: 'Material', value: '100% Acrylic' },
                      { label: 'Care Label', value: 'Machine Washable' },
                      { label: 'SKU', value: 'UBL-SS-55-C6-245' },
                      { label: 'Color', value: 'Vary' },
                      { label: 'Neck', value: 'High Neck' },
                      { label: 'Pattern', value: 'Solid' },
                    ].map((item, index) => (
                      <View key={index} className="w-1/2 mb-2">
                        <Text className="text-gray-400 text-sm">
                          {item.label}
                        </Text>
                        <Text className="text-white text-sm">{item.value}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* Description */}
                <Text className="text-sm text-gray-300 mb-6">
                  Elevate your style with the Urban Blend Long Sleeve Shirt, a
                  perfect blend of urban sophistication and contemporary
                  comfort. Crafted with meticulous attention to detail, this
                  shirt is designed to make a statement in any setting.{' '}
                  <Text className="text-[#528f65]">read more...</Text>
                </Text>

                {/* Ratings & Reviews */}
                <View className="mb-6">
                  <View className="flex-row items-center justify-between mb-4">
                    <Text className="text-lg font-semibold text-white">
                      Rating & Reviews
                    </Text>
                    <TouchableOpacity className="flex-row items-center">
                      <Text className="text-sm text-[#528f65] mr-1">
                        View All
                      </Text>
                      <ChevronRight color="#528f65" size={16} />
                    </TouchableOpacity>
                  </View>
                  <View className="flex-row gap-6 mb-4">
                    <View>
                      <Text className="text-4xl font-bold text-white">4.8</Text>
                      <View className="flex-row items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            color="#528f65"
                            fill="#528f65"
                            size={16}
                          />
                        ))}
                      </View>
                      <Text className="text-sm text-gray-400">
                        2,238 ratings
                      </Text>
                    </View>
                    <RatingBars ratings={ratings} totalRatings={227} />
                  </View>

                  {/* Review Examples */}
                  <View className="space-y-4">
                    <View className="p-4 rounded-lg bg-[#1a1f24]">
                      <View className="flex-row items-center gap-3 mb-2">
                        <Image
                          source={{ uri: 'https://via.placeholder.com/40' }}
                          className="w-10 h-10 rounded-full"
                        />
                        <View>
                          <Text className="font-medium text-white">
                            Amelia Williams
                          </Text>
                          <Text className="text-sm text-gray-400">
                            2 weeks ago
                          </Text>
                        </View>
                      </View>
                      <View className="flex-row items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            color="#528f65"
                            fill="#528f65"
                            size={16}
                          />
                        ))}
                      </View>
                      <Text className="text-sm mb-2 text-white">
                        <Text className="text-gray-400">Variant: </Text>L Black
                      </Text>
                      <Text className="text-sm text-white">
                        The item just arrived! Can't wait to try it this week,
                        hope it suits my style! 🔥
                      </Text>
                      <View className="flex-row gap-2 mt-3">
                        {[1, 2, 3].map((index) => (
                          <Image
                            key={index}
                            source={{
                              uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Auto%20Layout%20Horizontal-lDDzzgSM1ekCYcnHuuUkBnuFpq2BnC.png',
                            }}
                            className="w-[100px] h-[100px] rounded-lg"
                          />
                        ))}
                      </View>
                    </View>
                  </View>
                </View>

                {/* You May Also Like */}
                <View className="mb-6">
                  <View className="flex-row items-center justify-between mb-4">
                    <Text className="text-lg font-semibold text-white">
                      You May Also Like
                    </Text>
                    <TouchableOpacity className="flex-row items-center">
                      <Text className="text-sm text-[#528f65] mr-1">
                        View All
                      </Text>
                      <ChevronRight color="#528f65" size={16} />
                    </TouchableOpacity>
                  </View>
                  <View className="flex-row justify-between">
                    {similarProducts.map((product) => (
                      <ProductCard key={product.title} {...product} />
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
