import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <View className="relative">
      <View className="aspect-[4/5] bg-white rounded-lg items-center justify-center overflow-hidden">
        <Image
          source={{ uri: image }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/10 items-center justify-center">
        <Heart color="white" size={16} />
      </TouchableOpacity>
      <View className="mt-2">
        <Text className="text-sm font-medium text-white" numberOfLines={1}>
          {title}
        </Text>
        <Text className="text-sm text-[#528f65]">${price.toFixed(2)}</Text>
      </View>
    </View>
  );
} 