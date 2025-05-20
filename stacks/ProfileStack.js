import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../tabs/profile';
import SavedPostsScreen from '../underProfile/SavedPostsScreen';
import SettingsScreen from '../stackOptions/SettingsScreen';
import EditProfileScreen from '../underSettings/EditProfileScreen';
import EditAccountScreen from '../underSettings/EditAccountScreen';
import EnterLocationScreen from '../underSettings/EnterLocationScreen';
import AddTopicsScreen from '../underSettings/AddTopicsScreen';
import ChangePasswordScreen from '../underSettings/ChangePasswordScreen';
import RewardsScreen from '../underSettings/RewardsScreen';
import HelpCenterScreen from '../underSettings/HelpCenterScreen';

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={({ navigation }) => ({
        headerTitle: 'Profile',
        headerTitleAlign: 'center',
        headerRight: () => (
          <View style={ styles.headerIcons }>
            <TouchableOpacity onPress={() => navigation.navigate('SavedPosts')}>
              <Ionicons name="bookmark-outline" size={24} color="black" style={ styles.savePostIcon } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Ionicons name="settings-outline" size={25} color="black" style={ styles.settingIcon } />
            </TouchableOpacity>
          </View>
        )
      })}
    >
    </Stack.Screen>
    <Stack.Screen
      name="SavedPosts"
      component={SavedPostsScreen}
      options={({ navigation }) => ({
        headerTitle: "Saved Posts",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.backIcon } />
          </TouchableOpacity>
        )
      })}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.backIcon } />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={({ navigation }) => ({
        headerTitle: 'Edit Profile',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.backIcon } />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => Alert.alert('Save pressed')} style={ styles.saveButton }>
            <Text style={ styles.saveButtonText }>Save</Text>
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="EnterLocation"
      component={EnterLocationScreen}
      options={({ navigation }) => ({
        headerTitle: 'Enter Your Location',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.backIcon } />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="AddTopics"
      component={AddTopicsScreen}
      options={({ navigation }) => ({
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.backIcon } />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => Alert.alert('Skip pressed')} style={ styles.skipButton }>
            <Text style={ styles.skipButtonText }>Skip</Text>
          </TouchableOpacity>
        )
      })}
    />
    <Stack.Screen
      name="EditAccount"
      component={EditAccountScreen}
      options={({ navigation }) => ({
        headerTitle: 'Edit Account',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.backIcon } />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
      options={({ navigation }) => ({
        headerTitle: 'Change Password',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.backIcon } />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Rewards"
      component={RewardsScreen}
      options={({ navigation }) => ({
        headerTitle: 'Rewards',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.backIcon } />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="HelpCenter"
      component={HelpCenterScreen}
      options={({ navigation }) => ({
        headerTitle: 'Help Center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.backIcon } />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
    backIcon: {
      marginLeft: 16
    },
    headerIcons: {
      flexDirection: 'row',
      marginRight: 16
    },
    savePostIcon: {
      marginLeft: 16
    },
    settingIcon: {
      marginLeft: 16
    },
    saveButton: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20,
      backgroundColor: 'black',
      paddingVertical: 5,
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16
    },
    saveButtonText: {
      fontSize: 15,
      fontWeight: '600',
      color: 'white'
    },
    skipButton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16
    },
    skipButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: 'grey'
    }
});

export default ProfileStack;
