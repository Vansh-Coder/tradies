import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Toast from 'react-native-root-toast';

const MuteModal = ({ visible, onClose }) => {

  const handlePressOutside = () => {
    onClose();
  };

  const handle8Hours = () => {
    Toast.show('Muted for 8 hours!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM - 75,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    onClose();
  }

  const handle24Hours = () => {
    Toast.show('Muted for 24 hours!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM - 75,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    onClose();
  }

  const handleAlways = () => {
    Toast.show('Muted chat!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM - 75,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    onClose();
  }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.modalContent}>
          
          <View style={ styles.modalTitleContainer }>
            <Text style={ styles.modalTitleText }>Mute</Text>
          </View>

          <TouchableOpacity onPress={handle8Hours} style={ styles.optionsContainer }>
            <Text style={ styles.optionsText }>8 hours</Text>
          </TouchableOpacity>

          <View style={ styles.optionsDivider }></View>

          <TouchableOpacity onPress={handle24Hours} style={ styles.optionsContainer }>
            <Text style={ styles.optionsText }>24 hours</Text>
          </TouchableOpacity>

          <View style={ styles.optionsDivider }></View>

          <TouchableOpacity onPress={handleAlways} style={ styles.optionsContainer }>
            <Text style={ styles.optionsText }>Always</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  modalTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionsContainer: {
    padding: 20
  },
  optionsText: {
    fontSize: 16,
    fontWeight: '600'
  },
  optionsDivider: {
    height: 2,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
});

export default MuteModal;
