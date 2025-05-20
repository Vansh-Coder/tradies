import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";

const EnterEmailScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // check email logic here
    // if valid send code on email
    navigation.navigate('EnterCode', { email: email });
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
    <View style={ styles.mainContainer }>
      <View style={ styles.progressBar }>
        <View style={ styles.filledBar }/>
        <View style={ styles.emptyBar }/>
      </View>
      <View style={ styles.titleContainer }>
        <Text style={ styles.titleText }>Enter your email address</Text>
      </View>
      <View style={ styles.emailFieldContainer }>
        <TextInput
          style={ styles.emailField }
          placeholder="University Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={ styles.continueButtonContainer }>
        <TouchableOpacity onPress={handleContinue} style={ styles.continueButton }>
          <Text style={ styles.continueButtonText }>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  progressBar: {
    flexDirection: 'row',
    height: 4,
    borderRadius: 20,
    marginBottom: 30,
    backgroundColor: '#e5e4e2'
  },
  filledBar: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'black'
  },
  emptyBar: {
    flex: 1
  },
  titleContainer: {
    justifyContent: 'center',
    marginBottom: 15
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  emailFieldContainer: {
    justifyContent: 'center'
  },
  emailField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e4e2',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 15
  },
  continueButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  continueButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  continueButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default EnterEmailScreen;
