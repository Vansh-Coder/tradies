import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TagCard = ({ name, containerStyleOffset, textStyleOffset }) => {

  return (
    <View style={[ styles.tagContainer, containerStyleOffset ]}>
      <Text style={[ styles.tagText, textStyleOffset ]}>{ name }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eff3f4',
    borderRadius: 10,
    backgroundColor: '#eff3f4',
    marginRight: 5,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  tagText: {
    fontWeight: '600'
  }
});

export default TagCard;
