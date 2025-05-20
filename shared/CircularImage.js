import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CircularImage = ({ imageUrl, containerStyleOffset }) => {
  return (
    <View style={[ styles.container, containerStyleOffset ]}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 23,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CircularImage;
