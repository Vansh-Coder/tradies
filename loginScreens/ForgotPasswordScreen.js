import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ForgotPasswordScreen = ({ navigation, setAuthenticated }) => {
  
  const handleContinue = () => {
    // add toast
    setAuthenticated(true);
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  
  return (
    <View style={ styles.mainContainer }>
      <Text>Forgot password screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ForgotPasswordScreen;
