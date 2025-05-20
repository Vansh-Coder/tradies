import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import OrganizerCard from "../cards/OrganizerCard";
import AddUsersModal from "./AddUsersModal";

const EditMembersScreen = ({ navigation }) => {
  
  const [members, setMembers] = useState([
    {'id': 1, 'name': 'Alex Johnson'},
    {'id': 2, 'name': 'Steve Johnson'},
    {'id': 3, 'name': 'Adam Williams'},
    {'id': 4, 'name': 'Lebron Johnson'},
  ]);

  const screenTitle = 'Edit Members ' + '(' + members.length + ')';

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screenTitle,
      headerRight: () => (
        <TouchableOpacity onPress={() => setAddVisible(true)} style={{ marginRight: 16 }}>
          <Feather name="user-plus" size={24} color="black" />
        </TouchableOpacity>
      )
    });
  }, [navigation, screenTitle]);

  const [addVisible, setAddVisible] = useState(false);

  const handleRemoveMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <View style={ styles.mainContainer }>
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <OrganizerCard
            name={ item.name }
            onRemove={() => handleRemoveMember( item.id )}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={ styles.emptyListComponent }>List of group members will show here!</Text>}
      />

      <AddUsersModal
        visible={addVisible}
        onClose={() => setAddVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  emptyListComponent: {
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 15,
    fontWeight: '600',
    color: 'grey'
  }
});

export default EditMembersScreen;
