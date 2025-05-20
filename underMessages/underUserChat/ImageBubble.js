import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';

const ImageBubble = ({ uri, sender }) => {

  const alignSelf = sender == 'other' ? 'flex-start' : 'flex-end';

  const [imageVisible, setImageVisible] = useState(false);

  return (
    <View>
      
      <TouchableOpacity
        onPress={() => setImageVisible(true)}
        style={[ styles.mainContainer, { alignSelf: alignSelf } ]}
      >
        <Image
          source={{ uri: uri }}
          style={ styles.image }
        />
        <Text style={ styles.timeStampText }>11:59 PM</Text>
      </TouchableOpacity>

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
    paddingBottom: 15,
    paddingHorizontal: 10,
    maxWidth: '75%'
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

export default ImageBubble;
