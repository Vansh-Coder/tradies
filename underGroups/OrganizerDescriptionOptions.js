import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native';
import { setStringAsync } from 'expo-clipboard';
import Toast from 'react-native-root-toast';

const { width: screenWidth } = Dimensions.get('window');

const OrganizerDescriptionOptions = ({ visible, onClose, position, navigation, onJoinAccess, onLeave }) => {

  const optionsWidth = 195; // Adjust this value based on actual options list width
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

  const handleEditDetails = () => {
    onClose();
    navigation.navigate('EditGroup');
  };

  const handleJoinAccess = () => {
    onClose();
    onJoinAccess();
  };

  const handleCopyInvitation = async () => {
    await setStringAsync('Group Invitation Link');
    Toast.show('Copied Invitation Link!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM - 75,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    onClose();
  };

  const handleLeaveGroup = () => {
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
        <TouchableOpacity style={styles.option} onPress={handleEditDetails}>
          <Text style={styles.optionText}>Edit Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleJoinAccess}>
          <Text style={styles.optionText}>Join Access</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleCopyInvitation}>
          <Text style={styles.optionText}>Copy Invitation Link</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleLeaveGroup}>
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

export default OrganizerDescriptionOptions;
