import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import OTPTextView from 'react-native-otp-textinput';

const EnterCodeScreen = ({ route, setAuthenticated }) => {
  
  const email = route?.params?.email || '';

  const truncateEmail = (email) => {
    if (email.length > 14){
      const start = email.substring(0, 3);
      const end = email.substring(email.length - 8);
      return start + "***" + end;
    }else{
      return email;
    }
  };

  const truncatedEmail = truncateEmail(email);

  const handleOTPInput = (code) => {
    if (code.length == 4){
      // check OTP code here
      // if successful set true
      setAuthenticated(true);
    }
  };

  const handleResend = () => {
    // resend OTP logic here
    Alert.alert('Resend pressed!');
  };
  
  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.titleContainer }>
        <Text style={ styles.titleText }>Enter authentication code</Text>
      </View>
      <View style={ styles.descriptionContainer }>
        <Text style={ styles.descriptionText }>Enter the 4-digit OTP that we sent on your email {truncatedEmail}</Text>
      </View>
      <View style={styles.OTPFieldContainer}>
        <OTPTextView
          containerStyle={styles.OTPField}
          inputCount={4}  // Number of OTP fields
          textInputStyle={styles.OTPFieldInput}
          handleTextChange={handleOTPInput}
          tintColor='black'
          offTintColor='#D3D3D3'
          keyboardType="numeric"
          autoFocus={true}
        />
      </View>
      <View style={ styles.resendButtonContainer }>
        <TouchableOpacity onPress={handleResend} style={ styles.resendButton }>
          <Text style={ styles.resendButtonText }>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center'
  },
  OTPFieldContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  OTPField: {
    width: '80%',
    alignItems: 'center'
  },
  OTPFieldInput: {
    fontSize: 18,
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  resendButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  resendButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  resendButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white'
  }
});

export default EnterCodeScreen;
