import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EmptyGroupsList = ({ navigation }) => {

  handleGroupfeedButton = () => {
    navigation.navigate('Groups');
  };

  return (
    <View style={ styles.titleContainer }>
      <Text style={ styles.titleText}>Joined Groups will appear here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'grey'
  },
});

export default EmptyGroupsList;
