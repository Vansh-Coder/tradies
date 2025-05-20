import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CircularImage from '../shared/CircularImage';
import MessageCard from '../cards/MessageCard';

const NotificationsScreen = ({ navigation }) => {

  const NOTIFICATIONS = [
    {id: '1', title: 'Eddy liked your post'},
    {id: '2', title: 'Min commented on your post...'},
    {id: '3', title: 'Eddy liked your post'},
    {id: '4', title: 'Min commented on your post...'}
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={ styles.connectionsTitleContainer }>
        <Text style={ styles.connectionsTitleText }>Pending Connections</Text>
      </View>
      <View style={ styles.connectionsNavigatorContainer }>
        <TouchableOpacity onPress={() => navigation.navigate('PendingConnections')} style={ styles.connectionsNavigator }>
          <View style={ styles.connectionsInfoContainer }>
            <View style={ styles.connectionsProfilePictureContainer }>
              <CircularImage
                imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </View>
            <View style={ styles.connectionsHeaderContainer }>
              <View style={ styles.connectionsHeaderTop }>
                <Text style={ styles.connectionsHeaderTopText }>Connection requests</Text>
              </View>
              <View style={ styles.connectionsHeaderBottom }>
                <Text style={ styles.connectionsHeaderBottomText }>David + 5 others</Text>
              </View>
            </View>
            <View style={ styles.connectionsProceedIconContainer }>
              <Ionicons name="chevron-forward-outline" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={ styles.notificationsTitleContainer }>
        <Text style={ styles.notificationsTitleText }>Recent notifications</Text>
      </View>
      <View style={ styles.notificationsListContainer }>
        <FlatList
          data={NOTIFICATIONS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <MessageCard name={ item.title } />}
          showsVerticalScrollIndicator={false}
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
  connectionsTitleContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    //backgroundColor: 'yellow'
  },
  connectionsTitleText: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 15,
    //backgroundColor: 'orange'
  },
  connectionsNavigatorContainer: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'red'
  },
  connectionsNavigator: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'pink'
  },
  connectionsInfoContainer: {
    flex: 0.75,
    flexDirection: 'row',
    //backgroundColor: 'blue'
  },
  connectionsProfilePictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white'
  },
  connectionsHeaderContainer: {
    flex: 4,
    flexDirection: 'column',
    //backgroundColor: 'purple'
  },
  connectionsHeaderTop: {
    flex: 1,
    justifyContent: 'flex-end',
    //backgroundColor: 'cyan'
  },
  connectionsHeaderTopText: {
    fontSize: 15,
    fontWeight: '500',
    //marginBottom: 1,
    //backgroundColor: 'grey'
  },
  connectionsHeaderBottom: {
    flex: 1,
    //backgroundColor: 'blue'
  },
  connectionsHeaderBottomText: {
    color: 'grey',
    //backgroundColor: 'black'
  },
  connectionsProceedIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'orange'
  },
  notificationsTitleContainer: {
    flex: 0.5,
    justifyContent: 'center',
    //backgroundColor: 'yellow'
  },
  notificationsTitleText: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 15,
    //backgroundColor: 'orange'
  },
  notificationsListContainer: {
    flex: 7,
    marginTop: 4,
    //backgroundColor: 'cyan'
  }
});

export default NotificationsScreen;
