import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { setStringAsync } from 'expo-clipboard';
import Toast from 'react-native-root-toast';

const { width: screenWidth } = Dimensions.get('window');

const NormalOptions = ({ visible, onClose, position, onReport }) => {

  const optionsWidth = 130; // Adjust this value based on actual options list width
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

  const handleSavePost = () => {
    // first check if post is already saved
    Toast.show('Post Saved!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM - 75,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    onClose();
  }

  const handleReportPost = () => {
    onClose();
    onReport();
  }

  const handleCopyLink = async () => {
    await setStringAsync('post link');
    Toast.show('Copied Link!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM - 75,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    onClose();
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
        <TouchableOpacity style={styles.option} onPress={handleSavePost}>
          <Text style={styles.optionText}>Save Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleReportPost}>
          <Text style={styles.optionText}>Report Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleCopyLink}>
          <Text style={styles.optionText}>Copy Link</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionText: {
    fontSize: 16,
  },
});

export default NormalOptions;
