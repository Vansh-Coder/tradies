import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import CircularImage from "../shared/CircularImage";
import EditImageCard from "../cards/EditImageCard";
import * as ImagePicker from 'expo-image-picker';

const EditPostScreen = () => {

  // temporary function, change in future
  const randomID = () => {
    return Math.floor(Math.random() * 1e6).toString();
  };

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasCameraRollPermission, setHasCameraRollPermission] = useState(null);

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const cameraRollStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraRollPermission(cameraRollStatus.status === 'granted');
    };

    requestPermissions();
  }, []);

  const handleAddPhoto = async () => {
    if (!hasCameraRollPermission) {
      Alert.alert('Permission required', 'We need your permission to access your photos.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const image = result.assets[0];
      const newImage = {
        id: randomID(),
        url: image.uri,
      };
      setImages([newImage, ...images]);
    }else{
      Alert.alert('Error selecting image');
    }
  };

  const handleAddCamera = async () => {
    if (!hasCameraPermission) {
      Alert.alert('Permission required', 'We need your permission to use your camera.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const image = result.assets[0];
      const newImage = {
        id: randomID(),
        url: image.uri,
      };
      setImages([newImage, ...images]);
    }else{
      Alert.alert('Error capturing image');
    }
  };

  const handleAddLocation = () => {
    Alert.alert('Location added!');
  };

  // make sure to trim caption before sending
  const [caption, setCaption] = useState('Life is good! Make sure you are living it everyday!');

  const [images, setImages] = useState([
    {'id': randomID(), 'url': "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
    {'id': randomID(), 'url': "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
    {'id': randomID(), 'url': "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
    {'id': randomID(), 'url': "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
  ]);

  const removeImage = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.profileHeaderContainer }>
        <View style={ styles.profilePictureContainer }>
          <CircularImage
            imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          />
        </View>
        <View style={ styles.nameAndBioContainer }>
          <View style={ styles.nameContainer }>
            <Text style={ styles.nameText }>Full Name</Text>
          </View>
          <View style={ styles.bioContainer }>
            <Text style={ styles.bioText }>User Bio</Text>
          </View>
        </View>
        <View style={ styles.iconsContainer }>
          <TouchableOpacity onPress={handleAddPhoto} style={ styles.photoIconContainer }>
            <MaterialIcons name="add-photo-alternate" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddCamera} style={ styles.musicIconContainer }>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddLocation} style={ styles.locationIconContainer }>
            <Ionicons name="location-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={ styles.postCaptionContainer }>
        <TextInput
          style={ styles.captionField }
          placeholder='Write here...'
          onChangeText={setCaption}
          value={caption}
          multiline={true}
          numberOfLines={4}
          textAlignVertical='top'
        />
      </View>
      <View style={ styles.postImageContainer }>
        <FlatList
          data={images}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <EditImageCard
              imageUrl={ item.url }
              id={ item.id }
              onRemoveImage={removeImage}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text style={ styles.emptyListComponent }>Images added will appear here!</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  profileHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'pink'
  },
  profilePictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'grey'
  },
  nameAndBioContainer: {
    flex: 3,
    flexDirection: 'column',
    //backgroundColor: 'yellow'
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  nameText: {
    fontSize: 15,
    fontWeight: '600',
    //backgroundColor: 'orange'
  },
  bioContainer: {
    flex: 1
  },
  bioText: {
    fontWeight: '400',
    color: 'grey',
    //backgroundColor: 'blue'
  },
  iconsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'grey'
  },
  photoIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  locationIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'orange'
  },
  musicIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  postCaptionContainer: {
    flex: 1.5,
    //backgroundColor: 'orange'
  },
  captionField: {
    flex: 1,
    fontSize: 16,
    //borderWidth: 1,
    //borderColor: 'grey',
    //borderRadius: 10,
    padding: 10,
    //backgroundColor: 'yellow'
  },
  postImageContainer: {
    flex: 8,
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  emptyListComponent: {
    fontSize: 15,
    fontWeight: '600',
    color: 'grey'
  }
});

export default EditPostScreen;
