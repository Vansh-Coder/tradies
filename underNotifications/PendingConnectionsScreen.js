import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import RequestCard from '../cards/RequestCard';

const PendingConnectionsScreen = ({ navigation }) => {

  const PENDING = [
    {'id': 1, 'title': 'Alex'},
    {'id': 2, 'title': 'Steve'},
    {'id': 3, 'title': 'Robert'},
    {'id': 4, 'title': 'James'},
  ];

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={PENDING}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RequestCard name={ item.title } />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Text style={ styles.listFooter }>No more pending connections right now!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white'
  },
  listFooter: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginTop: 10
  }
});

export default PendingConnectionsScreen;
