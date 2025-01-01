import React from 'react';
import { View, Text } from 'react-native';

interface RatingBarsProps {
  ratings: { rating: number; count: number }[];
  totalRatings: number;
}

export function RatingBars({ ratings, totalRatings }: RatingBarsProps) {
  return (
    <View className="space-y-1">
      {ratings.map(({ rating, count }) => (
        <View key={rating} className="flex-row items-center gap-2">
          <Text className="w-3 text-sm text-white">{rating}</Text>
          <View className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
            <View
              className="h-full bg-[#528f65] rounded-full"
              style={{ width: `${(count / totalRatings) * 100}%` }}
            />
          </View>
        </View>
      ))}
    </View>
  );
}
