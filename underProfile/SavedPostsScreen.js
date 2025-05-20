import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import EmptyListComponent from "./EmptyListComponent";

const SavedPostsScreen = ({ navigation, route }) => {
  
  const name = route?.params?.name || '';

  //
  
  const SAVEDPOSTS = [];

  return (
    <View style={ styles.mainContainer }>
      <FlatList
        data={SAVEDPOSTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{ item.name }</Text>}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyListComponent navigation={navigation} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default SavedPostsScreen;
