import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

/*
<SafeAreaView style={styles.mainHeader}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={24} color="black" style={ styles.icon } />
              </TouchableOpacity>
              <SafeAreaView style={styles.headerTitleContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder='Search...'
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmitEditing={() => {
                      if (searchText.trim()){
                        setSearchHistory(prev => [...prev, searchText]);
                      }
                      setSearchText('');
                    }}
                  />
              </SafeAreaView>
            </View>
            </SafeAreaView>
      headerStyle: {height: 40}
*/

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <SafeAreaView style={{ }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, paddingRight: 15 }}>
            <TextInput
              style={styles.searchInput}
              placeholder='Search...'
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={() => {
              if (searchText.trim()){
                setSearchHistory(prev => [...prev, searchText]);
              }
              setSearchText('');
              }}
            />
          </View>
        </View>
        </SafeAreaView>
      )
    });
  }, [navigation, searchText]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.recentTitleContainer}>
        <Text style={styles.recentTitleText}>Recent searches</Text>
      </View>
      <View style={styles.searchHistoryContainer}>
        <FlatList
          data={searchHistory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.searchHistoryText}>{ item }</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    borderWidth: 1
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  headerTitleContainer: {
    flex: 1,
    marginRight: 16,
    borderWidth: 1
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    paddingLeft: 10,
    height: 40,
    fontSize: 15
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    //paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white'
  },
  recentTitleContainer: {
    justifyContent: 'center',
    marginBottom: 20,
    //backgroundColor: 'orange'
  },
  recentTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
    //backgroundColor: 'yellow'
  },
  searchHistoryContainer: {
    flex: 10,
    //backgroundColor: 'pink'
  },
  searchHistoryText: {
    fontSize: 16,
    marginBottom: 10,
    //backgroundColor: 'grey'
  }
});

export default SearchScreen;
