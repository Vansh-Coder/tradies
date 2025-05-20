import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import GroupsScreen from '../tabs/groups';
import SearchScreen from '../stackOptions/SearchScreen';
import NotificationsScreen from '../stackOptions/NotificationsScreen';
import AddGroupScreen from '../underGroups/AddGroupScreen';
import GroupDescriptionScreen from '../underGroups/GroupDescriptionScreen';
import MembersList from '../underGroups/MembersList';
import EditGroupScreen from '../underGroups/EditGroupScreen';
import EditOrganizersScreen from '../underGroups/EditOrganizersScreen';
import EditMembersScreen from '../underGroups/EditMembersScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const GroupsStack = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Groups"
        component={GroupsScreen}
        options={({ navigation }) => ({
          headerTitle: 'Groups',
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
        options={({ navigation}) => ({
          header: () => (
            <SafeAreaView style={styles.mainHeader}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.icon } />
              </TouchableOpacity>
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
            </View>
            </SafeAreaView>
          ),
          headerLeft: () => null,
          headerStyle: {height: 40}
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
        name="AddGroup"
        component={AddGroupScreen}
        options={({ navigation }) => ({
          headerTitle: "Add Group",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => Alert.alert('Add group pressed!')} style={ styles.addGroupButton }>
              <Text style={ styles.addGroupButtonText }>Add</Text>
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="GroupDescription"
        component={GroupDescriptionScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="MembersList"
        component={MembersList}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EditGroup"
        component={EditGroupScreen}
        options={({ navigation }) => ({
          headerTitle: "Edit Group Details",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => Alert.alert('Done edit pressed!')} style={ styles.doneEditButton }>
              <Text style={ styles.doneEditButtonText }>Done</Text>
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="EditOrganizers"
        component={EditOrganizersScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="black" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="EditMembers"
        component={EditMembersScreen}
        options={({ navigation }) => ({
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
    //backgroundColor: 'white'
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
    marginLeft: 5,
    marginBottom: 8
  },
  headerIcons: {
    flexDirection: 'row',
    marginRight: 16,
  },
  icon: {
    marginLeft: 16
  },
  addGroupButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 16
  },
  addGroupButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  },
  doneEditButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  doneEditButtonText: {
    fontSize: 16,
    fontWeight: '600'
  }
});

export default GroupsStack;
