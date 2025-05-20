import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import CircularImage from "../shared/CircularImage";

const GroupMessageCard = ({ name, navigation }) => {
  
  handleGroupChat = () => {
    navigation.navigate('GroupChat', { name });
  };
  
  return (
    <View style={ styles.mainContainer }>
      <TouchableOpacity onPress={handleGroupChat} style={ styles.profilePictureContainer }>
        <CircularImage
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGroupChat} style={ styles.messageInfoContainer }>
        <View style={ styles.messageInfoHeader }>
          <Text style={ styles.profileName }>{name}</Text>
          <Text style={ styles.messageTime }>5 Mar</Text>
        </View>
        <View style={ styles.messageInfoFooter }>
          <Text style={ styles.messageOverview }>How are you?</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    //backgroundColor: 'black'
  },
  profilePictureContainer: {
    flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageInfoContainer: {
    flex: 5,
    flexDirection: 'column',
    //backgroundColor: 'cyan'
  },
  messageInfoHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  profileName: {
    flex: 3.5,
    fontSize: 15,
    //backgroundColor: 'green'
  },
  messageTime: {
    flex: 1,
    color: 'grey',
    alignSelf: 'flex-end',
    //backgroundColor: 'purple'
  },
  messageInfoFooter: {
    flex: 1,
    //backgroundColor: 'yellow'
  },
  messageOverview: {
    flex: 1,
    color: 'grey',
    //backgroundColor: 'blue'
  }
});

export default GroupMessageCard;
