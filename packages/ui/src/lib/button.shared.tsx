import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  View,
} from 'react-native';

type SharedButtonProps = {
  title: string;
  onPress: () => void;
};

const SharedButton: React.FC<SharedButtonProps> = ({ title, onPress }) => {
  return (
    <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
      <TouchableOpacity
        style={[styles.button, Platform.OS === 'web' && styles.webButton]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  webButton: {
    cursor: 'pointer',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default SharedButton;
