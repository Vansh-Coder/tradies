import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Toast from 'react-native-root-toast';

const DeleteOption = ({ visible, onClose }) => {

  const handlePressOutside = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  }

  const handleDelete = () => {
    Toast.show('Deleted chat!', {
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
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.modalContent}>
          
          <View style={ styles.modalTitleContainer }>
            <Text style={ styles.modalTitleText }>Delete ?</Text>
          </View>

          <View style={ styles.modalDescriptionContainer }>
            <Text style={ styles.modalDescriptionText }>Are you sure you want to delete this post ?</Text>
          </View>

          <View style={ styles.optionsContainer }>
            <View style={ styles.cancelOptionContainer }>
              <TouchableOpacity onPress={handleCancel} style={ styles.cancelOption }>
                <Text style={ styles.cancelOptionText }>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={ styles.confirmOptionContainer }>
              <TouchableOpacity onPress={handleDelete} style={ styles.confirmOption }>
                <Text style={ styles.confirmOptionText }>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 316,
    height: 140,
    transform: [{ translateX: -155 }, { translateY: -70 }],
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  modalTitleText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  modalDescriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  modalDescriptionText: {
    color: 'grey',
    textAlign: 'center'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelOptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelOption: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  cancelOptionText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  confirmOptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  confirmOption: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  confirmOptionText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white'
  }
});

export default DeleteOption;
