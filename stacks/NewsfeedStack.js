import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NewsfeedScreen from '../tabs/newsfeed';
import SearchScreen from '../stackOptions/SearchScreen';
import NotificationsScreen from '../stackOptions/NotificationsScreen';
import PendingConnectionsScreen from '../underNotifications/PendingConnectionsScreen';
import AddPostScreen from '../underNewsfeed/AddPostScreen';
import EditPostScreen from '../underNewsfeed/EditPostScreen';
import CommentsScreen from '../underNewsfeed/CommentsScreen';

const Stack = createStackNavigator();

const NewsfeedStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Newsfeed"
        component={NewsfeedScreen}
        options={({ navigation }) => ({
          headerTitle: 'TRADIES',
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={styles.headerIcons}>
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Ionicons name="search" size={25} color="black" style={{ marginLeft: 16 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Ionicons name="notifications-outline" size={25} color="black" style={{ marginLeft: 16 }} />
              </TouchableOpacity>
            </View>
          ),
        })}
      >
      </Stack.Screen>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={() => ({
          headerLeft: () => null
        })}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PendingConnections"
        component={PendingConnectionsScreen}
        options={({ navigation }) => ({
          headerTitle: 'Pending Connections',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={({ navigation }) => ({
          headerTitle: 'Add Post',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => Alert.alert('Post button pressed')} style={ styles.postButton }>
              <Text style={ styles.postButtonText }>Post</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EditPost"
        component={EditPostScreen}
        options={({ navigation }) => ({
          headerTitle: 'Edit Post',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => Alert.alert('Done button pressed')} style={ styles.deleteButton }>
              <Text style={ styles.deleteButtonText }>Done</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={ styles.closeButton }>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: 'row',
    marginRight: 16,
  },
  icon: {
    marginLeft: 16
  },
  postButton: {
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
  postButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white'
  },
  deleteButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  deleteButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  }
});

export default NewsfeedStack;
