import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CircularImage from '../shared/CircularImage';

const EditProfileScreen = ({ navigation, route }) => {

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (route.params?.selectedLocation) {
      setLocation(route.params.selectedLocation);
    }
  }, [route.params?.selectedLocation]);

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
    <View style={ styles.mainContainer }>
      <View style={ styles.profilePictureContainer }>
        <CircularImage
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          containerStyleOffset={{ height: 70, width: 70, borderRadius: 35 }}
        />
      </View>
      <View style={ styles.editButtonContainer }>
        <TouchableOpacity onPress={() => Alert.alert('Photo edit pressed')} style={ styles.editButton }>
          <Text style={ styles.editButtonText }>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.nameTitleContainer }>
        <Text style={ styles.nameTitleText }>Name</Text>
      </View>
      <View style={ styles.nameFieldContainer }>
        <TextInput
          style={styles.nameField}
          placeholder='Full Name'
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={ styles.bioTitleContainer }>
        <Text style={ styles.bioTitleText }>Bio</Text>
      </View>
      <View style={ styles.bioFieldContainer }>
        <TextInput
          style={styles.bioField}
          placeholder='User Bio'
          onChangeText={setBio}
          value={bio}
        />
      </View>
      <View style={ styles.locationTitleContainer }>
        <Text style={ styles.locationTitleText }>Location</Text>
      </View>
      <View style={ styles.locationFieldContainer }>
        <TouchableOpacity onPress={() => navigation.navigate('EnterLocation')} style={ styles.locationField }>
          <View style={ styles.locationFieldIconContainer }>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>
            <Text
              style={ styles.locationFieldText }
              numberOfLines={2}
              ellipsizeMode='tail'
            >
              {location || 'Enter Location'}
            </Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.topicsTitleContainer }>
        <Text style={ styles.topicsTitleText }>Add Topics</Text>
      </View>
      <View style={ styles.topicsFieldContainer }>
        <TouchableOpacity onPress={() => navigation.navigate('AddTopics')} style={ styles.topicsField }>
          <View style={ styles.topicsFieldIconContainer }>
            <MaterialCommunityIcons name="playlist-plus" size={24} color="black" />
          </View>
          <Text style={ styles.topicsFieldText }>Add Topics</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  profilePictureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    //backgroundColor: 'pink'
  },
  editButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    //backgroundColor: 'yellow'
  },
  editButton: {
    //backgroundColor: 'green'
  },
  editButtonText: {
    fontSize: 18,
    fontWeight: '500',
    //backgroundColor: 'grey'
  },
  nameTitleContainer: {
    marginBottom: 10,
    //backgroundColor: 'pink'
  },
  nameTitleText: {
    fontSize: 18,
    fontWeight: '500',
    //backgroundColor: 'orange'
  },
  nameFieldContainer: {
    marginBottom: 15,
    //backgroundColor: 'green'
  },
  nameField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    //backgroundColor: 'pink'
  },
  bioTitleContainer: {
    marginBottom: 10,
    //backgroundColor: 'yellow'
  },
  bioTitleText: {
    fontSize: 18,
    fontWeight: '500',
    //backgroundColor: 'green'
  },
  bioFieldContainer: {
    marginBottom: 15,
    //backgroundColor: 'grey'
  },
  bioField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    //backgroundColor: 'pink'
  },
  locationTitleContainer: {
    marginBottom: 10,
    //backgroundColor: 'green'
  },
  locationTitleText: {
    fontSize: 18,
    fontWeight: '500',
    //backgroundColor: 'grey'
  },
  locationFieldContainer: {
    marginBottom: 15,
    //backgroundColor: 'pink'
  },
  locationField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    //backgroundColor: 'yellow'
  },
  locationFieldIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green'
  },
  locationFieldText: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    //backgroundColor: 'grey'
  },
  topicsTitleContainer: {
    marginBottom: 10,
    //backgroundColor: 'pink'
  },
  topicsTitleText: {
    fontSize: 18,
    fontWeight: '500',
    //backgroundColor: 'orange'
  },
  topicsFieldContainer: {
    marginBottom: 15,
    //backgroundColor: 'green'
  },
  topicsField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    //backgroundColor: 'grey'
  },
  topicsFieldIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  topicsFieldText: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    //backgroundColor: 'yellow'
  }
});

export default EditProfileScreen;
