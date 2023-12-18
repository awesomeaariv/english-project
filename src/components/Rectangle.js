import React from 'react';
import { View, StyleSheet } from 'react-native';

const Rectangle = () => {
  return (
    <View style={styles.rectangle} />
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 350,      // Adjust the width as needed
    height: 80,     // Adjust the height as needed
    backgroundColor: '#FF9A00', // Example background color
    alignSelf: 'center',
    borderRadius: 10,
    zIndex: 1
  },
});

export default Rectangle;