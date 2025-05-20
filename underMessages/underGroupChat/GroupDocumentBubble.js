import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CircularImage from "../../shared/CircularImage";

const GroupDocumentBubble = ({ fileName, fileUri, sender }) => {

  const flexDirection = sender == 'me' ? 'row-reverse' : 'row';
  const alignSelf = sender == 'other' ? 'flex-start' : 'flex-end';

  const membersProfilePictures = [
    {'id': "me", 'imageUrl': "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
    {'id': "member1", 'imageUrl': "https://www.corporatephotographylondon.com/wp-content/uploads/2014/10/business-portraits-Mayfiar.jpg" },
    {'id': "member2", 'imageUrl': "https://www.corporatephotographylondon.com/wp-content/uploads/2014/10/West-End-business-headshots.jpg"}
  ];

  const member = membersProfilePictures.find(member => member.id === sender);

  const truncateFileName = (fileName) => {
    if (fileName.length > 26){
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
    <View style={[ styles.mainContainer, { flexDirection: flexDirection, alignSelf: alignSelf } ]}>
      <View style={ styles.profilePictureContainer }>
        <CircularImage
          imageUrl={member.imageUrl}
        />
      </View>
      <View style={ styles.innerContainer }>
        <TouchableOpacity onPress={handleDownloadAndOpen} style={ styles.documentContainer }>
          <View style={ styles.iconContainer }>
            <Ionicons name="document" size={24} color="white" />
          </View>
          <View style={ styles.fileNameContainer }>
            <Text style={ styles.fileNameText }>{ truncatedFileName }</Text>
          </View>
        </TouchableOpacity>
      <Text style={ styles.timeStampText }>11:59 PM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 5,
    marginHorizontal: 5
  },
  profilePictureContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: 'black',
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    maxWidth: '70%'
  },
  documentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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

export default GroupDocumentBubble;
