import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const EmptyListComponent = ({ navigation }) => {
  
  const handleDiscover = () => {
    navigation.navigate("Newsfeed");
  };

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.imageContainer }>
        <Image
          source={require('../assets/emptySavedPosts.jpg')}
          style={ styles.image }
        />
      </View>
      <View style={ styles.titleContainer }>
        <Text style={ styles.titleText }>No saved posts</Text>
      </View>
      <View style={ styles.descriptionContainer }>
        <Text style={ styles.descriptionText }>To save a post, click on the options menu on its top right corner.</Text>
      </View>
      <View style={ styles.discoverButtonContainer }>
        <TouchableOpacity onPress={handleDiscover} style={ styles.discoverButton }>
          <Text style={ styles.discoverButtonText }>Discover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80
  },
  imageContainer: {
    height: 250,
    width: 250,
    marginBottom: 15
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600'
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    maxWidth: '70%'
  },
  descriptionText: {
    fontWeight: '500',
    color: 'grey',
    textAlign: 'center'
  },
  discoverButtonContainer: {
    justifyContent: 'center'
  },
  discoverButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 60
  },
  discoverButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
});

export default EmptyListComponent;
