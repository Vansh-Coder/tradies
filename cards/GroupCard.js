import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import CircularImage from '../shared/CircularImage';

const GroupCard = ({ name, navigation }) => {

  const handleCardPress = () => {
    navigation.navigate('GroupDescription', { name });
  };

  const handleJoinGroup = () => {
    Alert.alert('Group joined!');
  };
  
  return (
    <TouchableOpacity onPress={handleCardPress} style={ styles.mainContainer }>
      <View style={ styles.groupPhotoContainer }>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }}
          style={ styles.groupPhoto }
        />
      </View>
      <View style={ styles.groupTitleContainer }>
        <Text style={ styles.groupTitle }>{name}</Text>
      </View>
      <View style={ styles.groupFooter }>
        <View style={ styles.groupInfoContainer }>
          <View style={ styles.dateAndTimeContainer }>
            <MaterialCommunityIcons name="calendar-outline" size={25} color="grey" />
            <Text style={ styles.dateAndTime }>SAT, MAY 11 | 7:00 PM MST</Text>
          </View>
          <View style={ styles.locationContainer }>
            <Ionicons name="location-outline" size={26} color="grey" />
            <Text style={ styles.location }>HAYDEN LIBRARY, TEMPE</Text>
          </View>
          <TouchableOpacity onPress={() => Alert.alert('Multiple profiles pressed')} style={ styles.multipleProfilesContainer }>
            <View>
              <CircularImage
                imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </View>
            <View style={{ marginLeft: -10 }}>
              <CircularImage
                imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </View>
            <View style={{ marginLeft: -10 }}>
              <CircularImage
                imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </View>
            <View style={{ marginLeft: -10 }}>
              <CircularImage
                imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={ styles.joinButtonContainer }>
          <TouchableOpacity onPress={handleJoinGroup} style={ styles.joinButton }>
            <Text style={ styles.joinButtonText }>Join Group</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 7,
  },
  groupPhotoContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    alignSelf: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  groupPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  groupTitleContainer: {
    flex: 0.5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  groupTitle: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  groupFooter: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  groupInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    borderBottomLeftRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingLeft: 10
  },
  dateAndTimeContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  dateAndTime: {
    fontSize: 10,
    color: 'grey',
    marginTop: 7,
    marginLeft: 3
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  location: {
    fontSize: 10,
    color: 'grey',
    marginTop: 5,
    marginLeft: 2
  },
  multipleProfilesContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  joinButtonContainer: {
    flex: 1,
    borderBottomRightRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingRight: 15
  },
  joinButton: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  joinButtonText: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white'
  }
});

export default GroupCard;
