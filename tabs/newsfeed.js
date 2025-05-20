import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import CircularImage from '../shared/CircularImage';
import PostCard from '../cards/PostCard';

const NewsfeedScreen = ({ navigation }) => {

  const DATA = [
    {id: '1', title: 'first'},
    {id: '2', title: 'second'},
    {id: '3', title: 'third'},
    {id: '4', title: 'fourth'}
  ];

  return (
    <View style={ styles.container }>
      <View style={ styles.upper }>
        <TouchableOpacity onPress={() => navigation.navigate('Profile Tab')} style={ styles.userProfile } >
          <CircularImage imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddPost')} style={ styles.inputContainer }>
          <Text style={ styles.input }>What's Happening</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddPost')} style={ styles.buttonContainer }>
          <Text style={ styles.button }>Add Post</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.lower }>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <PostCard name={ item.title } navigation={navigation} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Text style={ styles.listHeader }>Explore Community</Text>}
          ListFooterComponent={<Text style={ styles.listFooter }>You're all caught up!</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  upper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  userProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 4,
    paddingLeft: 2
  },
  input: {
    fontSize: 14,
    color: 'grey'
  },
  buttonContainer: {
    flex: 1.5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'black',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    marginHorizontal: 5,
  },
  button: {
    color: 'white',
    fontWeight: '600'
  },
  lower: {
    flex: 10
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 7,
    marginVertical: 10
  },
  listFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default NewsfeedScreen;