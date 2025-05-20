import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MemberCard from "../cards/MemberCard";

const MembersList = ({ navigation }) => {
  
  const Members = [
    {'id': 1, 'name': 'Steve Williams'},
    {'id': 2, 'name': 'Alex Johnson'},
    {'id': 3, 'name': 'John Cena'},
    {'id': 4, 'name': 'Lebron James'},
    {'id': 5, 'name': 'Travis Scott'},
  ];

  const screenTitle = 'Members ' + '(' + Members.length + ')';

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screenTitle
    });
  }, [navigation, screenTitle]);

  return (
    <View style={ styles.mainContainer }>
      <FlatList
        data={Members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MemberCard name={ item.name } />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10
  }
});

export default MembersList;
