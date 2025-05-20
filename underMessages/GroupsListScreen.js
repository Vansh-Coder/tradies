import React from "react";
import { View, StyleSheet, FlatList } from 'react-native';
import GroupMessageCard from "../cards/GroupMessageCard";
import EmptyGroupsList from "./EmptyGroupsList";

const GroupsListScreen = ({ navigation }) => {

  const GROUPS = [
    {'id': 1, 'title': 'ENG 101 Exam Study'},
    {'id': 2, 'title': 'HISTORY 101 Exam Study'},
    {'id': 3, 'title': 'PHY 101 Exam Study'},
    {'id': 4, 'title': 'ENG 107 Exam Study'},
  ];
  
  return (
    <View style={ styles.mainContainer }>
      <FlatList
        data={GROUPS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GroupMessageCard name={ item.title } navigation={navigation} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyGroupsList navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white'
  }
});

export default GroupsListScreen;
