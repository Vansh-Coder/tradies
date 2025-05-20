import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShareListCard from '../cards/ShareListCard';
import Toast from 'react-native-root-toast';

const AddUsersModal = ({ visible, onClose }) => {

  const handlePressOutside = () => {
    onClose();
  };

  const [search, setSearch] = useState('');

  const PEOPLE = [
    {'id': 1, 'name': 'Alex'},
    {'id': 2, 'name': 'Steve'},
    {'id': 3, 'name': 'Victoria'},
    {'id': 4, 'name': 'Josh'},
    {'id': 5, 'name': 'Henry'},
    {'id': 6, 'name': 'Alex'},
    {'id': 7, 'name': 'Steve'},
    {'id': 8, 'name': 'Victoria'},
    {'id': 9, 'name': 'Josh'},
    {'id': 10, 'name': 'Henry'},
  ];

  const [pressedItems, setPressedItems] = useState({});

  const handlePress = (id, name) => {
    setPressedItems((prevState) => ({
      ...prevState,
      [id]: true,
    }));

    Toast.show('Invitation sent!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP + 75,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    // Send invitations logic here
    //console.log(name);
  };

  const handleDone = () => {
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>


        <View style={styles.modalContent}>
          
          <View style={ styles.modalTitleContainer }>
            <Text style={ styles.modalTitleText }>Send Invitations</Text>
          </View>

          <View style={ styles.searchBarContainer }>
            <TouchableOpacity onPress={() => navigation.navigate('Search')} style={ styles.searchIconContainer }>
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
            <View style={ styles.searchFieldContainer }>
              <TextInput
                style={ styles.searchField }
                placeholder='Search'
                placeholderTextColor='grey'
                onChangeText={setSearch}
                value={search}
              />
            </View>
          </View>

          <View style={ styles.listContainer }>
            <FlatList
              data={PEOPLE}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ShareListCard
                  name={ item.name }
                  onPress={() => handlePress(item.id, item.name)}
                  isPressed={pressedItems[item.id]}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={ styles.doneButtonContainer }>
            <TouchableOpacity onPress={handleDone} style={ styles.doneButton }>
              <Text style={ styles.doneButtonText }>Done</Text>
            </TouchableOpacity>
          </View>

        </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '75%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  modalTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    borderWidth: 1,
    borderColor: '#E5E4E2',
    borderRadius: 10,
    backgroundColor: '#E5E4E2',
    flexDirection: 'row',
    padding: 5,
    marginBottom: 20
  },
  searchIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E4E2'
  },
  searchFieldContainer: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: '#E5E4E2'
  },
  searchField: {
    flex: 1,
    fontSize: 15,
    backgroundColor: '#E5E4E2'
  },
  listContainer: {
    flex: 1,
    paddingBottom: 20
  },
  doneButtonContainer: {
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  doneButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'black',
    paddingVertical: 10
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
});

export default AddUsersModal;
