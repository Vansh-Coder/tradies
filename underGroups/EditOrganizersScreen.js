import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import OrganizerCard from "../cards/OrganizerCard";
import AddUsersModal from "./AddUsersModal";

const EditOrganizersScreen = ({ navigation }) => {
  
  const [organizers, setOrganizers] = useState([
    {'id': 1, 'name': 'Alex Johnson'},
    {'id': 2, 'name': 'Steve Johnson'},
    {'id': 3, 'name': 'Adam Williams'},
    {'id': 4, 'name': 'Lebron Johnson'},
  ]);

  const screenTitle = 'Edit Organizers ' + '(' + organizers.length + ')';

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
    setOrganizers(organizers.filter(organizer => organizer.id !== id));
  };

  return (
    <View style={ styles.mainContainer }>
      <FlatList
        data={organizers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <OrganizerCard
            name={ item.name }
            onRemove={() => handleRemoveMember( item.id )}
          />
        )}
        showsVerticalScrollIndicator={false}
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

export default EditOrganizersScreen;
