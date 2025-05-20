import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const TextBubble = ({ text, sender }) => {

  const alignSelf = sender == 'other' ? 'flex-start' : 'flex-end';

  return (
    <View style={[ styles.mainContainer, { alignSelf: alignSelf } ]}>
      <Text style={ styles.textStyle }>{ text }</Text>
      <Text style={ styles.timeStampText }>11:59 PM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'black',
    marginBottom: 5,
    paddingTop: 8,
    paddingBottom: 14,
    paddingHorizontal: 15,
    minWidth: 80,
    maxWidth: '75%'
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
    flexWrap: 'wrap',
    //backgroundColor: 'orange'
  },
  timeStampText: {
    position: 'absolute',
    bottom: 3,
    right: 15,
    fontSize: 9,
    fontWeight: '600',
    color: 'grey',
    //backgroundColor: 'yellow'
  }
});

export default TextBubble;
