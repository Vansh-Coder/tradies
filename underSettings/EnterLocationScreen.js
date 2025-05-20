import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';

const EnterLocationScreen = ({ navigation }) => {

  const googleApiKey = Config.GOOGLE_API_KEY;

  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      //fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        const selectedLocation = data.description;
        navigation.navigate('EditProfile', { selectedLocation });
      }}
      onFail={(error) => {
        console.error("Google Places Autocomplete failed:", error);
      }}
      query={{
        key: googleApiKey,
        language: 'en',
        components: 'country:us',
      }}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  text: {
    fontSize: 15
  }
});

export default EnterLocationScreen;
