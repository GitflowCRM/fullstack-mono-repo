import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

export function ColorSelector({
  colors,
  selectedColor,
  onSelectColor,
}: ColorSelectorProps) {
  return (
    <View className="mb-6">
      <Text className="text-sm font-medium mb-3 text-white">Color</Text>
      <View className="flex-row flex-wrap gap-2">
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            className={`w-12 h-12 rounded-full border ${
              selectedColor === color
                ? 'border-[#528f65] ring-2 ring-[#528f65]/20'
                : 'border-gray-600'
            }`}
            style={{ backgroundColor: color }}
            onPress={() => onSelectColor(color)}
          />
        ))}
      </View>
    </View>
  );
}
