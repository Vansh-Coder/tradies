import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GroupCard from '../cards/GroupCard';

const GroupsScreen = ({ navigation }) => {

  const GROUPS = [
    {id: '1', title: 'English 101 Study for Exam'},
    {id: '2', title: 'Chemistry 101 Study for Exam'},
    {id: '3', title: 'Maths 101 Study for Exam'},
    {id: '4', title: 'History 101 Study for Exam'}
  ];

  const handleAddGroup = () => {
    navigation.navigate('AddGroup');
  };

  return (
    <View style={ styles.mainContainer }>
      <FlatList
        data={GROUPS}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <GroupCard name={ item.title } navigation={navigation} />}
        ListHeaderComponent={
          <View style={ styles.listHeaderContainer }>
            <View style={ styles.listHeaderTitleContainer }>
              <Text style={ styles.listHeaderTitleText }>Connect with your groups</Text>
            </View>
            <View style={ styles.addGroupButtonContainer }>
              <TouchableOpacity onPress={handleAddGroup} style={ styles.addGroupButton }>
                <Ionicons name="add-circle" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        }
        ListFooterComponent={<Text style={ styles.listFooter }>You're all caught up!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  listHeaderContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10
  },
  listHeaderTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  listHeaderTitleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  addGroupButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  addGroupButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  listFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default GroupsScreen;
