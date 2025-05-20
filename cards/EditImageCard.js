import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const EditImageCard = ({ imageUrl, id, onRemoveImage, imageContainerOffset }) => {

  handleCancelImage = () => {
    onRemoveImage(id);
  };

  return (
    <View style={ styles.mainContainer }>
      <View style={[ styles.imageContainer, imageContainerOffset ]}>
        <Image
          source={{ uri: imageUrl }}
          style={ styles.image }
        />
      </View>
      <TouchableOpacity onPress={handleCancelImage} style={ styles.iconContainer }>
        <Entypo name="cross" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 5
  },
  imageContainer: {
    height: 350,
    width: 350
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 25,
    borderRadius: 13,
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});

export default EditImageCard;
