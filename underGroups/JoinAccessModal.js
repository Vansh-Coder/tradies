import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity, Alert, Switch } from 'react-native';
import Toast from 'react-native-root-toast';

const JoinAccessModal = ({ visible, onClose }) => {

  const handlePressOutside = () => {
    onClose();
  };

  const description = "If the join access is private, only people with an invitation link can join, but the group remains visible in search.";

  const [publicEnabled, setPublicEnabled] = useState(true);
  const [privateEnabled, setPrivateEnabled] = useState(false);

  const handleToggles = () => {
    setPublicEnabled(previousState => !previousState);
    setPrivateEnabled(previousState => !previousState);
  };

  const handleUpdate = () => {
    // handle update logic here
    const access = publicEnabled ? 'Public' : 'Private';
    Toast.show(access + ' access updated!', {
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
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.modalContent}>
          
          <View style={ styles.modalTitleContainer }>
            <Text style={ styles.modalTitleText }>Update Join Access</Text>
          </View>

          <View style={ styles.modalDescriptionContainer }>
            <Text style={ styles.modalDescriptionText }>{description}</Text>
          </View>

          <View style={ styles.optionContainer }>
            <View style={ styles.optionTextContainer }>
              <Text style={ styles.publicText }>Public</Text>
            </View>
            <View style={ styles.optionToggleContainer }>
              <Switch
                value={publicEnabled}
                onChange={handleToggles}
                trackColor={{true: '#A9A9A9'}}
              />
            </View>
          </View>

          <View style={ styles.optionContainer }>
            <View style={ styles.optionTextContainer }>
              <Text style={ styles.privateText }>Private</Text>
            </View>
            <View style={ styles.optionToggleContainer }>
              <Switch
                value={privateEnabled}
                onChange={handleToggles}
                trackColor={{true: '#A9A9A9'}}
              />
            </View>
          </View>

          <View style={ styles.updateButtonContainer }>
            <TouchableOpacity onPress={handleUpdate} style={ styles.updateButton }>
              <Text style={ styles.updateButtonText }>Update</Text>
            </TouchableOpacity>
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
    width: 310,
    height: 270,
    transform: [{ translateX: -155 }, { translateY: -135 }],
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
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
  optionContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  optionTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  publicText: {
    paddingRight: 15,
    fontSize: 18,
    fontWeight: '600'
  },
  privateText: {
    paddingRight: 10,
    fontSize: 18,
    fontWeight: '600'
  },
  optionToggleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  updateButtonContainer: {
    justifyContent: 'center',
    marginTop: 5,
    paddingHorizontal: 10
  },
  updateButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'black',
    paddingVertical: 10
  },
  updateButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
});

export default JoinAccessModal;
