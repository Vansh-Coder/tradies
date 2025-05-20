import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NFCScreen from "../tabs/nfc";

const Stack = createStackNavigator();

const NFCStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NFC"
        component={NFCScreen}
        options={({ navigation }) => ({
          headerTitle: 'NFC Tap'
        })}
      />
    </Stack.Navigator>
  );
};

export default NFCStack;
