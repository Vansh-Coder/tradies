import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';

const SignupScreen = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const openURL = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        }else{
          Alert.alert('Error! Please try again later.');
        }
      })
      .catch((err) => Alert.alert('Error! Please try again later.', err));
  };

  const handleTOSHyperlink = () => {
    openURL("https://www.tradiesofficial.com/terms-and-conditions");
  };

  const handlePPHyperlink = () => {
    openURL("https://www.tradiesofficial.com/terms-and-conditions");
  };

  const handleSignup = () => {
    //Signup logic here
    //If successful send code on email
    navigation.navigate('EnterCode', { email: email });
  };

  const handleLogin = () => {
    //Login logic here
    //If authenticated set true
    navigation.navigate('Login');
  };

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
    <View style={ styles.mainContainer }>
      <View style={ styles.firstNameFieldContainer }>
        <TextInput
          style={ styles.firstNameField }
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={ styles.lastNameFieldContainer }>
        <TextInput
          style={ styles.lastNameField }
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={ styles.emailFieldContainer }>
        <TextInput
          style={ styles.emailField }
          placeholder="University Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={ styles.contactFieldOuterContainer }>
        <View style={ styles.contactFieldInnerContainer }>
          <Text
            style={[ styles.countryCodeText, {color: number ? 'black' : '#C7C7CD'} ]}
          >+1</Text>
          <TextInput
            style={styles.contactField}
            placeholder='Contact Number'
            value={number}
            onChangeText={setNumber}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={ styles.passwordFieldContainer }>
        <TextInput
          style={ styles.passwordField }
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={ styles.confirmPasswordFieldContainer }>
        <TextInput
          style={ styles.confirmPasswordField }
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={ styles.lowerContainer }>
        <View style={ styles.legalStatementContainer }>
          <Text style={ styles.legalStatementText }>
            By continuing, you agree to our{' '}
            <Text onPress={handleTOSHyperlink} style={ styles.hyperText }>
              Terms of Service
            </Text>{' '}
            and{' '}
            <Text onPress={handlePPHyperlink} style={ styles.hyperText }>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
        <View style={ styles.signupButtonContainer }>
          <TouchableOpacity onPress={handleSignup} style={ styles.signupButton }>
            <Text style={ styles.signupButtonText }>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.loginInfoContainer }>
          <Text style={ styles.loginInfoText }>Already have an account ? </Text>
          <TouchableOpacity onPress={handleLogin} style={ styles.loginButton }>
            <Text style={ styles.loginButtonText }>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  firstNameFieldContainer: {
    justifyContent: 'center',
    marginBottom: 10
  },
  firstNameField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e4e2',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  lastNameFieldContainer: {
    justifyContent: 'center',
    marginBottom: 10
  },
  lastNameField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e4e2',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  emailFieldContainer: {
    justifyContent: 'center',
    marginBottom: 10
  },
  emailField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e4e2',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  contactFieldOuterContainer: {
    justifyContent: 'center',
    marginBottom: 10
  },
  contactFieldInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e4e2',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  countryCodeText: {
    fontSize: 16
  },
  contactField: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 5
  },
  passwordFieldContainer: {
    justifyContent: 'center',
    marginBottom: 15
  },
  passwordField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e4e2',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  confirmPasswordFieldContainer: {
    justifyContent: 'center',
    marginBottom: 15
  },
  confirmPasswordField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e4e2',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  forgotButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  forgotButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotButtonText: {
    fontSize: 16,
    fontWeight: '500'
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  legalStatementContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 20
  },
  legalStatementText: {
    fontSize: 12
  },
  hyperText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'blue'
  },
  signupButtonContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 15
  },
  signupButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  signupButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white'
  },
  loginInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginInfoText: {
    fontSize: 15
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    fontSize: 15,
    fontWeight: '600'
  }
});

export default SignupScreen;
