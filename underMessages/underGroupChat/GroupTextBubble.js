import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import CircularImage from "../../shared/CircularImage";
import { SafeAreaView } from "react-native-safe-area-context";

const GroupTextBubble = ({ text, sender }) => {

  const flexDirection = sender == 'me' ? 'row-reverse' : 'row';
  const alignSelf = sender == 'me' ? 'flex-end' : 'flex-start';

  const membersProfilePictures = [
    {'id': "me", 'imageUrl': "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
    {'id': "member1", 'imageUrl': "https://www.corporatephotographylondon.com/wp-content/uploads/2014/10/business-portraits-Mayfiar.jpg" },
    {'id': "member2", 'imageUrl': "https://www.corporatephotographylondon.com/wp-content/uploads/2014/10/West-End-business-headshots.jpg"}
  ];

  const member = membersProfilePictures.find(member => member.id === sender);

  return (
    <View style={[ styles.mainContainer, { flexDirection: flexDirection, alignSelf: alignSelf } ]}>
      <View style={ styles.profilePictureContainer }>
        <CircularImage
          imageUrl={member.imageUrl}
        />
      </View>
      <View style={ styles.textContainer }>
        <Text style={ styles.textStyle }>{ text }</Text>
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
  textContainer: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'black',
    paddingTop: 8,
    paddingBottom: 14,
    paddingHorizontal: 15,
    marginHorizontal: 5,
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

export default GroupTextBubble;
