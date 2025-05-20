import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import PostCard from '../cards/PostCard';
import ProfileCard from '../cards/ProfileCard';

const ProfileScreen = ({ route }) => {

  const selectedTags = route?.params?.selectedTags || [];

  const userName = "David Gram";

  const POSTS = [
    {id: '1', title: 'first'},
    {id: '2', title: 'second'},
    {id: '3', title: 'third'},
    {id: '4', title: 'fourth'}
  ];
  
  return (
    <View style={ styles.mainContainer }>
      <FlatList
        data={POSTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PostCard name={ item.title } />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ProfileCard name={ userName } tags={selectedTags} />}
        ListFooterComponent={<Text style={ styles.listFooter }>You're all caught up!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  listFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default ProfileScreen;