import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import CircularImage from '../shared/CircularImage';
import MessageCard from '../cards/MessageCard';

const MessagesScreen = ({ navigation }) => {

  const MESSAGES = [
    {id: '1', title: 'Robert'},
    {id: '2', title: 'Tucson'},
    {id: '3', title: 'David'},
    {id: '4', title: 'Steve'},
    {id: '5', title: 'Robert'},
    {id: '6', title: 'Tucson'},
    {id: '7', title: 'David'},
    {id: '8', title: 'Steve'},
    {id: '9', title: 'Robert'},
    {id: '10', title: 'Tucson'},
    {id: '11', title: 'David'},
    {id: '12', title: 'Steve'}
  ];

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.messageHeaderContainer }>
        <Text style={ styles.messageHeader }>Message</Text>
        <View style={ styles.writeButtonContainer }>
          <TouchableOpacity onPress={() => Alert.alert('Write button pressed')} style={ styles.writeButton }>
            <Text style={ styles.writeButtonText }>Write</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ styles.messageGroupsContainer }>
        <TouchableOpacity onPress={() => navigation.navigate('GroupsList')} style={ styles.messageGroups }>
          <View style={ styles.groupsInnerContainer }>
            <View style={ styles.groupsProfileContainer }>
              <CircularImage
                imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </View>
            <View style={ styles.groupsInfoContainer }>
              <View style={ styles.groupsInfoHeader }>
                <Text style={ styles.groupsProfileName }>Groups</Text>
                <Text style={ styles.groupsMessageTime }>9:45 AM</Text>
              </View>
              <View style={ styles.groupsInfoFooter }>
                <Text style={ styles.groupsMessageOverview }>2 new messages</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={ styles.messageFriendsContainer }>
        <View style={ styles.friendsHeaderContainer }>
          <Text style={ styles.friendsHeader }>Friends</Text>
        </View>
        <View style={ styles.friendsList }>
          <FlatList
          data={MESSAGES}
          renderItem={({ item }) => <MessageCard name={ item.title } navigation={navigation} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={ styles.messageArchivedContainer }>
        <TouchableOpacity onPress={() => Alert.alert('Archived pressed')} style={ styles.messageArchived }>
          <Text style={ styles.messageArchivedText }>Archived (1)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  messageHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10
  },
  messageHeader: {
    flex: 2,
    //backgroundColor: 'green',
    fontSize: 35,
    fontWeight: 'bold'
  },
  writeButtonContainer: {
    flex: 1,
    //backgroundColor: 'pink',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 15,
    paddingTop: 5
  },
  writeButton: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 11,
    paddingVertical: 2.5
  },
  writeButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white'
  },
  messageGroupsContainer: {
    flex: 0.75,
    //backgroundColor: 'yellow',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  messageGroups: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  groupsInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'black'
  },
  groupsProfileContainer: {
    flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  groupsInfoContainer: {
    flex: 5,
    flexDirection: 'column',
    //backgroundColor: 'cyan'
  },
  groupsInfoHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    //backgroundColor: 'pink'
  },
  groupsProfileName: {
    flex: 3.5,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
    //backgroundColor: 'green'
  },
  groupsMessageTime: {
    flex: 1,
    color: 'grey',
    alignSelf: 'flex-end',
    //backgroundColor: 'purple'
  },
  groupsInfoFooter: {
    flex: 1,
    //backgroundColor: 'yellow'
  },
  groupsMessageOverview: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
    //backgroundColor: 'blue'
  },
  messageFriendsContainer: {
    flex: 6,
    flexDirection: 'column',
    //backgroundColor: 'pink'
  },
  friendsHeaderContainer: {
    flex: 0.9,
    //backgroundColor: 'orange',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10
  },
  friendsHeader: {
    //backgroundColor: 'purple',
    fontSize: 18,
    fontWeight: '600'
  },
  friendsList: {
    flex: 6
  },
  messageArchivedContainer: {
    flex: 0.6,
    //backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageArchived: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    //backgroundColor: 'cyan'
  },
  messageArchivedText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
    //backgroundColor: 'yellow'
  }
});

export default MessagesScreen;
