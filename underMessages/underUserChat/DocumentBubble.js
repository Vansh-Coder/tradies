import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DocumentBubble = ({ fileName, fileUri, sender }) => {

  const alignSelf = sender == 'other' ? 'flex-start' : 'flex-end';

  const truncateFileName = (fileName) => {
    if (fileName.length > 30){
      const start = fileName.substring(0, 6);
      const end = fileName.substring(fileName.length - 7);
      return start + '...' + end;
    }else{
      return fileName;
    }
  };

  const truncatedFileName = truncateFileName(fileName);

  const handleDownloadAndOpen = () => {
    // file download and open logic here
    Alert.alert('File downloaded and opened!');
  };

  return (
    <TouchableOpacity
      onPress={handleDownloadAndOpen}
      style={[ styles.mainContainer, { alignSelf: alignSelf } ]}
    >
      <View style={ styles.iconContainer }>
        <Ionicons name="document" size={24} color="white" />
      </View>
      <View style={ styles.fileNameContainer }>
        <Text style={ styles.fileNameText }>{ truncatedFileName }</Text>
      </View>
      <Text style={ styles.timeStampText }>11:59 PM</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: 'black',
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 15,
    maxWidth: '75%'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  fileNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  fileNameText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
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

export default DocumentBubble;
