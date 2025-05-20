import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import CircularImage from "../shared/CircularImage";

const RequestCard = ({ name }) => {

  return (
    <View style={ styles.mainContainer }>
      <TouchableOpacity onPress={() => Alert.alert('Profile pressed')} style={ styles.mainInnerContainer }>
        <View style={ styles.profilePictureContainer }>
          <CircularImage
            imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          />
        </View>
        <View style={ styles.profileHeaderContainer }>
          <View style={ styles.profileNameContainer }>
            <Text style={ styles.profileNameText }>{ name }</Text>
          </View>
          <View style={ styles.profileBioContainer }>
            <Text style={ styles.profileBioText }>User Bio</Text>
          </View>
        </View>
        <View style={ styles.buttonsContainer }>
          <TouchableOpacity onPress={() => Alert.alert('Confirm pressed')} style={ styles.confirmButton }>
            <Text style={ styles.confirmButtonText }>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Delete pressed')} style={ styles.deleteButton }>
            <Text style={ styles.deleteButtonText }>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 15
  },
  mainInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  profilePictureContainer: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileHeaderContainer: {
    flex: 2.5,
    flexDirection: 'column',
    paddingLeft: 3
  },
  profileNameContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  profileNameText: {
    fontSize: 16,
    fontWeight: '500'
  },
  profileBioContainer: {
    flex: 1,
  },
  profileBioText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'grey'
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  confirmButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  confirmButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white'
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff3f4'
  },
  deleteButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'grey'
  }
});

export default RequestCard;
