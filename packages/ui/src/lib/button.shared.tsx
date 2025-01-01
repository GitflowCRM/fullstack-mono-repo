import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

type SharedButtonProps = {
  title: string;
  onPress: () => void;
};

const SharedButton: React.FC<SharedButtonProps> = ({ title, onPress }) => {
  return (
    <View className="px-10 py-5">
      <TouchableOpacity
        className="bg-blue-700 rounded-md p-2"
        onPress={onPress}
      >
        <Text className="text-white text-center">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SharedButton;
