import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import CircularImage from "../../shared/CircularImage";

const GroupImageBubble = ({ uri, sender }) => {

  const flexDirection = sender == 'me' ? 'row-reverse' : 'row';
  const alignSelf = sender == 'other' ? 'flex-start' : 'flex-end';

  const membersProfilePictures = [
    {'id': "me", 'imageUrl': "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
    {'id': "member1", 'imageUrl': "https://www.corporatephotographylondon.com/wp-content/uploads/2014/10/business-portraits-Mayfiar.jpg" },
    {'id': "member2", 'imageUrl': "https://www.corporatephotographylondon.com/wp-content/uploads/2014/10/West-End-business-headshots.jpg"}
  ];

  const member = membersProfilePictures.find(member => member.id === sender);

  const [imageVisible, setImageVisible] = useState(false);

  return (
    <View style={[ styles.mainContainer, { flexDirection: flexDirection, alignSelf: alignSelf } ]}>
      <View style={ styles.profilePictureContainer }>
        <CircularImage
          imageUrl={member.imageUrl}
        />
      </View>
      <View style={ styles.innerContainer }>
        
        <TouchableOpacity
          onPress={() => setImageVisible(true)}
          style={ styles.imageContainer }
        >
        <Image
          source={{ uri: uri }}
          style={ styles.image }
        />
        </TouchableOpacity>

        <Text style={ styles.timeStampText }>11:59 PM</Text>

        <Modal
          transparent={true}
          animationType="fade"
          visible={imageVisible}
          onRequestClose={() => setImageVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setImageVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Image
                  source={{ uri: uri }}
                  style={styles.modalImage}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

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
    marginHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 10,
    maxWidth: '70%'
  },
  imageContainer: {
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10
  },
  timeStampText: {
    position: 'absolute',
    bottom: 3,
    right: 15,
    fontSize: 9,
    fontWeight: '600',
    color: 'grey'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default GroupImageBubble;
