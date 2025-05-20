import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CircularImage from "../shared/CircularImage";
import TagCard from "./TagCard";

const ProfileCard = ({ name, tags }) => {

  return (
    <View style={ styles.mainContainer }>

      <View style={ styles.headerImageOuterContainer }>
        <TouchableOpacity onPress={() => Alert.alert('Header image pressed')} style={ styles.headerImageInnerContainer }>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }}
            style={ styles.headerImage }
          />
        </TouchableOpacity>
      </View>

      <View style={ styles.profilePictureOuterContainer }>
        <TouchableOpacity onPress={() => Alert.alert('Profile image pressed')} style={ styles.profilePictureInnerContainer }>
          <CircularImage
            imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            containerStyleOffset={{ width: 90, height: 90, borderRadius: 45, borderWidth: 3 }}
          />
        </TouchableOpacity>
      </View>

      <View style={ styles.profileInfoContainer }>

        <View style={ styles.profileHeaderContainer }>
          <View style={ styles.profileHeaderTop }>
            <View style={ styles.profileNameContainer }>
              <Text style={ styles.profileName }>{name}</Text>
            </View>
            <View style={ styles.profilePointsContainer }>
              <View style={ styles.tradiesPointsContainer }>
                <TouchableOpacity onPress={() => Alert.alert('T-points pressed')} style={ styles.tradiesPoints }>
                  <View style={ styles.tradiesPointsImageContainer }>
                    <Ionicons name="square" size={24} color="black" style={ styles.tradiesIcon } />
                  </View>
                  <Text style={ styles.tradiesPointsText }>100</Text>
                </TouchableOpacity>
              </View>
              <View style={ styles.streakPointsContainer }>
                <TouchableOpacity onPress={() => Alert.alert('Streak pressed')} style={ styles.streakPoints }>
                  <View style={ styles.streakPointsImageContainer }>
                    <Ionicons name="square" size={24} color="black" style={ styles.streakIcon } />
                  </View>
                  <Text style={ styles.streakPointsText }>10</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={ styles.profileHeaderBottom }>
            <Text style={ styles.profileBio }>User Bio</Text>
          </View>
        </View>

        <View style={ styles.profileStatsContainer }>
          <View style={ styles.friendsAndPosts }>
            <Text style={ styles.friendsCount }>238</Text>
            <Text style={ styles.friendsText }>Friends</Text>
            <Text style={ styles.postsCount }>84</Text>
            <Text style={ styles.postsText }>Posts</Text>
            <View style={ styles.friendsContainerOffset }></View>
          </View>
          <View style={ styles.userLocationContainer }>
            <View style={ styles.locationIconContainer }>
              <Ionicons name="location-outline" size={25} color="grey" />
            </View>
            <Text style={ styles.userLocationText }>Tempe, AZ</Text>
          </View>
          <View style={ styles.profileTagsContainer }>
            {tags && tags.map((tag, index) => (
              <TagCard key={index} name={tag} />
            ))}
          </View>
        </View>

        <View style={ styles.profileFooter }>
          <View style={ styles.connectButtonContainer }>
            <TouchableOpacity onPress={() => Alert.alert('Connect button pressed')} style={ styles.connectButton }>
              <Text style={ styles.connectButtonText }>Connect</Text>
            </TouchableOpacity>
          </View>
          <View style={ styles.chatButtonContainer }>
            <TouchableOpacity onPress={() => Alert.alert('Chat button pressed')} style={ styles.chatButton }>
              <Text style={ styles.chatButtonText }>Chat</Text>
            </TouchableOpacity>
          </View>
          <View style={ styles.profileFooterOffset }></View>
        </View>
    
      </View>

      <View style={ styles.footerEndDivider }></View>

      <View style={ styles.recentPostTitleContainer }>
        <Text style={ styles.recentPostTitle }>Recent post</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  headerImageOuterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 170,
  },
  headerImageInnerContainer: {
    flex: 1,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    //backgroundColor: 'purple'
  },
  profilePictureOuterContainer: {
    marginTop: -50,
    marginLeft: 20,
    pointerEvents: 'box-none',
    alignItems: 'flex-start',
    //backgroundColor: 'pink'
  },
  profilePictureInnerContainer: {
    //backgroundColor: 'grey'
  },
  profileInfoContainer: {
    flex: 2,
    flexDirection: 'column',
    //backgroundColor: 'yellow'
  },
  profileHeaderContainer: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'grey'
  },
  profileHeaderTop: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'red'
  },
  profileNameContainer: {
    flex: 1.7,
    justifyContent: 'center',
    //backgroundColor: 'yellow'
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 20,
    //backgroundColor: 'pink'
  },
  profilePointsContainer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'white'
  },
  tradiesPointsContainer: {
    flex: 1,
    //backgroundColor: 'grey',
  },
  tradiesPoints: {
    flexDirection: 'row',
    backgroundColor: '#E3E5E5',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    paddingVertical: 3,
    alignItems: 'center'
  },
  tradiesPointsImageContainer: {
    flex: 1,
    //backgroundColor: 'orange',
    alignItems: 'flex-end'
  },
  tradiesIcon: {
    //backgroundColor: 'white'
  },
  tradiesPointsText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    paddingLeft: 3
    //backgroundColor: 'pink'
  },
  streakPointsContainer: {
    flex: 1,
    marginRight: 15,
    marginLeft: 5,
    //backgroundColor: 'blue',
  },
  streakPoints: {
    flexDirection: 'row',
    backgroundColor: '#E3E5E5',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    paddingVertical: 3,
    alignItems: 'center'
  },
  streakPointsImageContainer: {
    flex: 1,
    //backgroundColor: 'orange',
    alignItems: 'flex-end'
  },
  streakIcon: {
    //backgroundColor: 'white'
  },
  streakPointsText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    paddingLeft: 3
    //backgroundColor: 'pink'
  },
  profileHeaderBottom: {
    flex: 1,
    //backgroundColor: 'indigo'
  },
  profileBio: {
    fontSize: 15,
    color: 'grey',
    paddingLeft: 20,
    marginBottom: 10,
    //backgroundColor: 'white'
  },
  profileStatsContainer: {
    flex: 2,
    flexDirection: 'column',
    //marginLeft: 20,
    //backgroundColor: 'orange'
  },
  friendsAndPosts: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    marginLeft: 15,
    //backgroundColor: 'cyan'
  },
  friendsCount: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    //backgroundColor: 'grey'
  },
  friendsText: {
    flex: 1.2,
    color: 'grey',
    //backgroundColor: 'pink'
  },
  postsCount: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'right',
    //backgroundColor: 'grey'
  },
  postsText: {
    flex: 1.2,
    color: 'grey',
    textAlign: 'center',
    //backgroundColor: 'pink'
  },
  friendsContainerOffset: {
    flex: 5
  },
  userLocationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 7,
    marginLeft: 15,
    //backgroundColor: 'yellow'
  },
  locationIconContainer: {
    //backgroundColor: 'pink'
  },
  userLocationText: {
    color: 'grey',
    //backgroundColor: 'orange'
  },
  profileTagsContainer: {
    flex: 2,
    marginLeft: 20,
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //backgroundColor: 'pink'
  },
  profileFooter: {
    flex: 1.5,
    flexDirection: 'row',
    marginLeft: 20,
    //backgroundColor: 'red'
  },
  connectButtonContainer: {
    flex: 1,
    //backgroundColor: 'cyan',
    justifyContent: 'center',
    marginRight: 10
  },
  connectButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  connectButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    //backgroundColor: 'grey'
  },
  chatButtonContainer: {
    flex: 1,
    //backgroundColor: 'purple',
    justifyContent: 'center'
  },
  chatButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  chatButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    //backgroundColor: 'grey'
  },
  profileFooterOffset: {
    flex: 0.8,
    //backgroundColor: 'black'
  },
  footerEndDivider: {
    flex: 0.5,
    height: 2,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: 11,
    marginBottom: 12
  },
  recentPostTitleContainer: {
    flex: 0.5,
    marginBottom: 15,
    //backgroundColor: 'orange'
  },
  recentPostTitle: {
    fontWeight: 'bold',
    paddingLeft: 10,
    //backgroundColor: 'grey'
  }
});

export default ProfileCard;
