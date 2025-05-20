import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const ImageCarousel = () => {

  const images = [
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  ];

  const IMAGE_WIDTH = 350;
  const IMAGE_HEIGHT = 350;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSnapToItem = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <Carousel
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        data={images}
        loop={false}
        onSnapToItem={handleSnapToItem}
        renderItem={({ index }) => (
          <Image
            key={index}
            source={{ uri: images[index]}}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      />
      {images.length > 1 && (
        <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === currentIndex ? 'black' : 'white',
                width: index === currentIndex ? 8 : 6,
                height: index === currentIndex ? 8 : 6
              }
            ]}
          />
        ))}
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  dot: {
    borderRadius: 6,
    margin: 4
  }
});

export default ImageCarousel;
