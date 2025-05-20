import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';

const LoginScreen = ({ navigation, setAuthenticated }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    navigation.navigate('EnterEmail');
  };

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

  const handleLogin = () => {
    //Login logic here
    //If authenticated set true
    setAuthenticated(true);
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
    <View style={ styles.mainContainer }>
      <View style={ styles.emailFieldContainer }>
        <TextInput
          style={ styles.emailField }
          placeholder="University Email"
          value={email}
          onChangeText={setEmail}
        />
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
      <View style={ styles.forgotButtonContainer }>
        <TouchableOpacity onPress={handleForgotPassword} style={ styles.forgotButton }>
          <Text style={ styles.forgotButtonText }>Forgot password?</Text>
        </TouchableOpacity>
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
        <View style={ styles.loginButtonContainer }>
          <TouchableOpacity onPress={handleLogin} style={ styles.loginButton }>
            <Text style={ styles.loginButtonText }>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.signupInfoContainer }>
          <Text style={ styles.signupInfoText }>Don't have an account ? </Text>
          <TouchableOpacity onPress={handleSignup} style={ styles.signupButton }>
            <Text style={ styles.signupButtonText }>Sign Up</Text>
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
  loginButtonContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 15
  },
  loginButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  loginButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white'
  },
  signupInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupInfoText: {
    fontSize: 15
  },
  signupButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupButtonText: {
    fontSize: 15,
    fontWeight: '600'
  }
});

export default LoginScreen;
