import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CircularImage from '../shared/CircularImage';
import RewardCard from '../cards/RewardCard';

const RewardsScreen = ({ navigation }) => {

  const REWARDS = [
    {'id': 1, 'title': 'Starbucks'},
    {'id': 2, 'title': 'Walmart Inc'},
    {'id': 3, 'title': 'McDonalds'},
    {'id': 4, 'title': 'Starbucks'},
  ];

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.pointsInfoContainer }>
        <CircularImage
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          containerStyleOffset={ styles.imageStyleOffset }
        />
        <Text style={ styles.pointsCountText }>13456</Text>
        <Text style={ styles.pointsTitleText }>Tradies Points Earned</Text>
      </View>
      <View style={ styles.listContainer }>
        <FlatList
          data={REWARDS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <RewardCard name={ item.title } />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Text style={ styles.listHeader }>Ongoing rewards</Text>}
          ListFooterComponent={<Text style={ styles.listFooter }>More rewards soon!</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  pointsInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  imageStyleOffset: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginBottom: 10
  },
  pointsCountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  pointsTitleText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center'
  },
  listContainer: {
    flex: 2
  },
  listHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginVertical: 12,
    paddingLeft: 15
  },
  listFooter: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default RewardsScreen;
