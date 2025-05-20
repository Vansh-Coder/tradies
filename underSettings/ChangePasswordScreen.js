import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

const ChangePasswordScreen = ({ navigation }) => {
  
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={ styles.mainContainer }>
        <View style={ styles.passFieldsContainer }>
          <View style={ styles.currentPassTitleContainer }>
            <Text style={ styles.currentPassTitleText }>Current Password</Text>
          </View>
          <View style={ styles.currentPassFieldContainer }>
            <TextInput
              style={styles.currentPassField}
              placeholder='Current Password'
              onChangeText={setCurrentPass}
              value={currentPass}
            />
          </View>
          <View style={ styles.newPassTitleContainer }>
            <Text style={ styles.newPassTitleText }>New Password</Text>
          </View>
          <View style={ styles.newPassFieldContainer }>
            <TextInput
              style={styles.newPassField}
              placeholder='New Password'
              onChangeText={setNewPass}
              value={newPass}
            />
          </View>
          <View style={ styles.confirmPassTitleContainer }>
            <Text style={ styles.confirmPassTitleText }>Confirm Password</Text>
          </View>
          <View style={ styles.confirmPassFieldContainer }>
            <TextInput
              style={styles.confirmPassField}
              placeholder='Confirm Password'
              onChangeText={setConfirmPass}
              value={confirmPass}
            />
          </View>
        </View>
        <View style={ styles.changePassButtonContainer }>
          <TouchableOpacity onPress={() => Alert.alert('Change Password pressed')} style={ styles.changePassButton }>
            <Text style={ styles.changePassButtonText }>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  passFieldsContainer: {
    flex: 2
  },
  currentPassTitleContainer: {
    marginBottom: 10,
  },
  currentPassTitleText: {
    fontSize: 17,
    fontWeight: '500',
  },
  currentPassFieldContainer: {
    marginBottom: 15,
  },
  currentPassField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
  },
  newPassTitleContainer: {
    marginBottom: 10,
  },
  newPassTitleText: {
    fontSize: 17,
    fontWeight: '500',
  },
  newPassFieldContainer: {
    marginBottom: 15,
  },
  newPassField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
  },
  confirmPassTitleContainer: {
    marginBottom: 10,
  },
  confirmPassTitleText: {
    fontSize: 17,
    fontWeight: '500',
  },
  confirmPassFieldContainer: {
    marginBottom: 15,
  },
  confirmPassField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
  },
  changePassButtonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  changePassButton: {
    borderWidth: 1,
    borderColor: '#E3E5E5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#E3E5E5'
  },
  changePassButtonText: {
    fontSize: 17,
    fontWeight: '500'
  }
});

export default ChangePasswordScreen;
