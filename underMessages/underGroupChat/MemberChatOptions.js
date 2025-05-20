import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const MemberChatOptions = ({ visible, onClose, position, navigation, onMute, onLeave }) => {

  const optionsWidth = 185; // Adjust this value based on actual options list width
  const optionsHeight = 120; // Adjust this value based on actual options list height

  let adjustedLeft = position.left;
  let adjustedTop = position.top;

  // Ensure the options list is within the screen bounds
  if (adjustedLeft + optionsWidth > screenWidth) {
    adjustedLeft = screenWidth - optionsWidth;
  }

  // Adjust the vertical position if it's too close to the bottom
  if (adjustedTop + optionsHeight > Dimensions.get('window').height) {
    adjustedTop = position.top - optionsHeight;
  }

  const handleMedia = () => {
    onClose();
    navigation.navigate('MediaDocsLinks');
  };

  const handleMute = () => {
    onClose();
    onMute();
  };

  const handleLeave = () => {
    onClose();
    onLeave();
  };
  
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={[ styles.optionsContainer, { top: adjustedTop, left: adjustedLeft } ]}>
        <TouchableOpacity style={styles.option} onPress={handleMedia}>
          <Text style={styles.optionText}>Media, Docs, Links</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleMute}>
          <Text style={styles.optionText}>Mute Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleLeave}>
          <Text style={styles.optionText}>Leave Group</Text>
        </TouchableOpacity>
      </View>
    
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionsContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 5,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center'
  },
});

export default MemberChatOptions;
