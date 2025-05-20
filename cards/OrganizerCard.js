import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CircularImage from "../shared/CircularImage";

const OrganizerCard = ({ name, onRemove }) => {

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.profileImageContainer }>
        <CircularImage
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        />
      </View>
      <View style={ styles.nameAndBioContainer }>
        <View style={ styles.nameContainer }>
          <Text style={ styles.nameText }>{ name }</Text>
        </View>
        <View style={ styles.bioContainer }>
          <Text style={ styles.bioText }>BS Business Data Analytics</Text>
        </View>
      </View>
      <View style={ styles.removeButtonContainer }>
        <TouchableOpacity onPress={onRemove} style={ styles.removeButton }>
          <Text style={ styles.removeButtonText }>Remove</Text>
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
    padding: 10
  },
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameAndBioContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  nameText: {
    fontSize: 15,
    fontWeight: '600'
  },
  bioContainer: {
    flex: 1,
  },
  bioText: {
    fontWeight: '500',
    color: 'grey'
  },
  removeButtonContainer: {
    justifyContent: 'center'
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeButtonText: {
    fontSize: '15',
    fontWeight: '500',
    color: 'grey'
  }
});

export default OrganizerCard;
