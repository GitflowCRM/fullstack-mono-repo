import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSelectSize,
}: SizeSelectorProps) {
  return (
    <View className="mb-6">
      <Text className="text-sm font-medium mb-3 text-white">Size</Text>
      <View className="flex-row flex-wrap gap-2">
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            className={`w-12 h-12 rounded-full border ${
              selectedSize === size
                ? 'border-[#528f65] bg-[#528f65]/10'
                : 'border-gray-600'
            } items-center justify-center`}
            onPress={() => onSelectSize(size)}
          >
            <Text
              className={`text-sm ${
                selectedSize === size ? 'text-[#528f65]' : 'text-white'
              }`}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
