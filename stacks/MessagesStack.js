import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MessagesScreen from '../tabs/messages';
import GroupsListScreen from '../underMessages/GroupsListScreen';
import GroupChatScreen from '../underMessages/GroupChatScreen';
import ChatScreen from '../underMessages/ChatScreen';
import MediaDocsLinksScreen from '../underMessages/MediaDocsLinksScreen';
import CircularImage from '../shared/CircularImage';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const MessagesStack = () => {

  const [searchText, setSearchText] = useState('');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={({ navigation }) => ({
          header: () => (
            <SafeAreaView style={styles.mainHeader}>
            <View style={styles.headerContainer}>
              <SafeAreaView style={styles.headerTitleContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder='Search...'
                  onChangeText={setSearchText}
                  value={searchText}
                  onSubmitEditing={() => {
                    navigation.setParams({ searchText });
                    setSearchText('');
                  }}
                />
              </SafeAreaView>
              <TouchableOpacity onPress={() => navigation.navigate('Profile Tab')} style={ styles.icon } >
                <CircularImage imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
              </TouchableOpacity>
            </View>
            </SafeAreaView>
          ),
          headerLeft: () => null,
          headerStyle: {height: 40}
        })}
      >
      </Stack.Screen>
      <Stack.Screen
        name="GroupsList"
        component={GroupsListScreen}
        options={({ navigation }) => ({
          headerTitle: 'Groups',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="GroupChat"
        component={GroupChatScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="MediaDocsLinks"
        component={MediaDocsLinksScreen}
        options={({ navigation }) => ({
          headerTitle: 'Media | Docs | Links',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          )
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    backgroundColor: 'white',
    paddingBottom: -30
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  headerTitleContainer: {
    flex: 1,
    marginRight: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 20
  },
  icon: {
    marginRight: 16,
    marginBottom: 10
  }
});

export default MessagesStack;
