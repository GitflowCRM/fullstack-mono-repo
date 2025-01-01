import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const screenWidth = Dimensions.get('window').width;

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollViewRef.current) {
      const newIndex =
        direction === 'left' ? currentImage - 1 : currentImage + 1;
      if (newIndex >= 0 && newIndex < images.length) {
        scrollViewRef.current.scrollTo({
          x: newIndex * screenWidth,
          animated: true,
        });
        setCurrentImage(newIndex);
      }
    }
  };

  return (
    <View className="relative">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / screenWidth
          );
          setCurrentImage(newIndex);
        }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            className="w-[390px] h-[390px]"
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        className="absolute left-2 top-1/2 -mt-4 bg-black/50 rounded-full p-2"
        onPress={() => scrollTo('left')}
      >
        <ChevronLeft color="white" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        className="absolute right-2 top-1/2 -mt-4 bg-black/50 rounded-full p-2"
        onPress={() => scrollTo('right')}
      >
        <ChevronRight color="white" size={24} />
      </TouchableOpacity>
      <View className="flex-row justify-center mt-4">
        {images.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              currentImage === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </View>
    </View>
  );
}
