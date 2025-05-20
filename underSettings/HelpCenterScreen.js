import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';

const HelpCenterScreen = ({ navigation }) => {
  
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={ styles.mainContainer }>
        <View style={ styles.helpFieldsContainer }>
          <View style={ styles.subjectTitleContainer }>
            <Text style={ styles.subjectTitleText }>Subject</Text>
          </View>
          <View style={ styles.subjectFieldContainer }>
            <TextInput
              style={ styles.subjectField }
              placeholder='Subject'
              onChangeText={setSubject}
              value={subject}
            />
          </View>
          <View style={ styles.detailsTitleContainer }>
            <Text style={ styles.detailsTitleText }>Details</Text>
          </View>
          <View style={ styles.detailsFieldContainer }>
            <TextInput
              style={ styles.detailsField }
              placeholder='Details...'
              onChangeText={setDetails}
              value={details}
              multiline={true}
              numberOfLines={4}
              textAlignVertical='top'
            />
          </View>
        </View>
        <View style={ styles.sendButtonContainer }>
          <TouchableOpacity onPress={() => Alert.alert('Send pressed')} style={ styles.sendButton }>
            <Text style={ styles.sendButtonText }>Send</Text>
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
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  helpFieldsContainer: {
    flex: 1
  },
  subjectTitleContainer: {
    marginBottom: 10,
  },
  subjectTitleText: {
    fontSize: 17,
    fontWeight: '500'
  },
  subjectFieldContainer: {
    marginBottom: 15,
  },
  subjectField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
  },
  detailsTitleContainer: {
    marginBottom: 10,
  },
  detailsTitleText: {
    fontSize: 17,
    fontWeight: '500'
  },
  detailsFieldContainer: {
    flex: 1
  },
  detailsField: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10
  },
  sendButtonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  sendButton: {
    borderWidth: 1,
    borderColor: '#E3E5E5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#E3E5E5'
  },
  sendButtonText: {
    fontSize: 17,
    fontWeight: '500'
  }
});

export default HelpCenterScreen;
