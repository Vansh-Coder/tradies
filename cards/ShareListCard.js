import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CircularImage from "../shared/CircularImage";

const ShareListCard = ({ name, onPress, isPressed }) => {
  
  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.profilePictureContainer }>
        <CircularImage
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        />
      </View>
      <View style={ styles.nameAndLocationContainer }>
        <View style={ styles.nameContainer }>
          <Text style={ styles.nameText }>{name}</Text>
        </View>
        <View style={ styles.locationContainer }>
          <Text style={ styles.locationText }>User Location</Text>
        </View>
      </View>
      <View style={ styles.sendButtonContainer }>
        <TouchableOpacity
          onPress={isPressed ? null : onPress}
          style={[
            styles.sendButton,
            isPressed && { borderColor: '#d3d3d3', backgroundColor: '#d3d3d3' }
          ]}
          disabled={isPressed}
        >
          <Text style={ styles.sendButtonText }>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20
  },
  profilePictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameAndLocationContainer: {
    flex: 4,
    flexDirection: 'column',
    paddingLeft: 4
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  nameText: {
    fontSize: 15
  },
  locationContainer: {
    flex: 1
  },
  locationText: {
    color: 'grey'
  },
  sendButtonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
});

export default ShareListCard;
