import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import { setStringAsync } from 'expo-clipboard';
import Toast from 'react-native-root-toast';
import CircularImage from '../shared/CircularImage';

const SettingsScreen = ({ navigation }) => {

  const [isEnabled, setIsEnabled] = useState(false);

  const copyURL = async () => {
    await setStringAsync('invitation link');
    Toast.show('Copied Link!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM - 75,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={ styles.settingsProfileContainer }>
        <View style={ styles.profileHeaderContainer }>
          <View style={ styles.profilePictureContainer }>
            <CircularImage
              imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              containerStyleOffset={{ width: 70, height: 70, borderRadius: 35 }}
            />
          </View>
          <View style={ styles.profileNameAndEmail }>
            <View style={ styles.profileNameContainer }>
              <Text style={ styles.profileNameText }>Full Name</Text>
            </View>
            <View style={ styles.profileEmailContainer }>
              <Text style={ styles.profileEmailText }>Email</Text>
            </View>
          </View>
        </View>
        <View style={ styles.editProfileButtonContainer }>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={ styles.editProfileButton }>
            <Text style={ styles.editProfileButtonText }>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ styles.settingsAccountContainer }>
        <View style={ styles.accountTitleContainer }>
          <Text style={ styles.accountTitleText }>Account</Text>
        </View>
        <View style={ styles.accountDetailsContainer }>
          <TouchableOpacity onPress={() => navigation.navigate('EditAccount')} style={ styles.accountDetails }>
            <View style={ styles.accountDetailsIconContainer }>
              <MaterialCommunityIcons name="account-outline" size={27} color="black" />
            </View>
            <View style={ styles.accountDetailsTitleContainer }>
              <Text style={ styles.accountDetailsTitleText }>Accounts</Text>
            </View>
            <View style={ styles.accountDetailsProceedIconContainer }>
              <Ionicons name="chevron-forward-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={ styles.passwordDetailsContainer }>
          <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')} style={ styles.passwordDetails }>
            <View style={ styles.passwordDetailsIconContainer }>
              <Feather name="lock" size={23} color="black" />
            </View>
            <View style={ styles.passwordDetailsTitleContainer }>
              <Text style={ styles.passwordDetailsTitleText }>Password</Text>
            </View>
            <View style={ styles.passwordDetailsProceedIconContainer }>
              <Ionicons name="chevron-forward-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={ styles.notificationsDetailsContainer }>
          <View style={ styles.notificationsDetailsIconContainer }>
            <Ionicons name="notifications-outline" size={25} color="black" />
          </View>
          <View style={ styles.notificationsDetailsTitleContainer }>
            <Text style={ styles.notificationsDetailsTitleText }>Notifications</Text>
          </View>
          <View style={ styles.notificationsDetailsToggleContainer }>
            <Switch
              value={isEnabled}
              onChange={() => setIsEnabled(previousState => !previousState)}
              trackColor={{true: '#A9A9A9'}}
            />
          </View>
        </View>
      </View>
      <View style={ styles.settingsMoreContainer }>
        <View style={ styles.moreTitleContainer }>
          <Text style={ styles.moreTitleText }>More</Text>
        </View>
        <View style={ styles.rewardsDetailsContainer }>
          <TouchableOpacity onPress={() => navigation.navigate('Rewards')} style={ styles.rewardsDetails }>
            <View style={ styles.rewardsDetailsIconContainer }>
              <MaterialCommunityIcons name="star-outline" size={28} color="black" />
            </View>
            <View style={ styles.rewardsDetailsTitleContainer }>
              <Text style={ styles.rewardsDetailsTitleText }>Rewards</Text>
            </View>
            <View style={ styles.rewardsDetailsProceedIconContainer }>
              <Ionicons name="chevron-forward-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={ styles.helpDetailsContainer }>
          <TouchableOpacity onPress={() => navigation.navigate('HelpCenter')} style={ styles.helpDetails }>
            <View style={ styles.helpDetailsIconContainer }>
              <Feather name="help-circle" size={24} color="black" />
            </View>
            <View style={ styles.helpDetailsTitleContainer }>
              <Text style={ styles.helpDetailsTitleText }>Help</Text>
            </View>
            <View style={ styles.helpDetailsProceedIconContainer }>
              <Ionicons name="chevron-forward-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={ styles.inviteFriendsContainer }>
          <View style={ styles.inviteFriendsIconContainer }>
            <Feather name="users" size={23} color="black" />
          </View>
          <View style={ styles.inviteFriendsTitleContainer }>
            <Text style={ styles.inviteFriendsTitleText }>Invite Friends</Text>
          </View>
          <View style={ styles.inviteFriendsLinkContainer }>
            <TouchableOpacity onPress={copyURL} style={ styles.inviteFriendsLink }>
              <Text style={ styles.inviteFriendsLinkText }>Copy Link</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={ styles.moreContainerOffset }></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white'
  },
  settingsProfileContainer: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'pink'
  },
  profileHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'grey'
  },
  profilePictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white'
  },
  profileNameAndEmail: {
    flex: 4,
    flexDirection: 'column',
    paddingLeft: 10,
    //backgroundColor: 'green'
  },
  profileNameContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    //backgroundColor: 'orange'
  },
  profileNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    //backgroundColor: 'red'
  },
  profileEmailContainer: {
    flex: 1,
    //backgroundColor: 'blue'
  },
  profileEmailText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
    //backgroundColor: 'purple'
  },
  editProfileButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  editProfileButton: {
    borderWidth: 1,
    borderColor: '#E3E5E5',
    borderRadius: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#E3E5E5'
  },
  editProfileButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingsAccountContainer: {
    flex: 1.5,
    flexDirection: 'column',
    //backgroundColor: 'grey'
  },
  accountTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
    //backgroundColor: 'green'
  },
  accountTitleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  accountDetailsContainer: {
    flex: 1,
    //backgroundColor: 'pink'
  },
  accountDetails: {
    flex: 1,
    flexDirection: 'row'
  },
  accountDetailsIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red'
  },
  accountDetailsTitleContainer: {
    flex: 6,
    justifyContent: 'center',
    //backgroundColor: 'orange'
  },
  accountDetailsTitleText: {
    fontSize: 15
  },
  accountDetailsProceedIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red'
  },
  passwordDetailsContainer: {
    flex: 1,
    //backgroundColor: 'green'
  },
  passwordDetails: {
    flex: 1,
    flexDirection: 'row'
  },
  passwordDetailsIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  passwordDetailsTitleContainer: {
    flex: 6,
    justifyContent: 'center'
  },
  passwordDetailsTitleText: {
    fontSize: 15
  },
  passwordDetailsProceedIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationsDetailsContainer: {
    flex: 1,
    flexDirection: 'row'
    //backgroundColor: 'pink'
  },
  notificationsDetailsIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationsDetailsTitleContainer: {
    flex: 5,
    justifyContent: 'center'
  },
  notificationsDetailsTitleText: {
    fontSize: 15
  },
  notificationsDetailsToggleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red'
  },
  settingsMoreContainer: {
    flex: 2,
    flexDirection: 'column',
    //backgroundColor: 'yellow'
  },
  moreTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
    //backgroundColor: 'green'
  },
  moreTitleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  rewardsDetailsContainer: {
    flex: 1
  },
  rewardsDetails: {
    flex: 1,
    flexDirection: 'row'
  },
  rewardsDetailsIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rewardsDetailsTitleContainer: {
    flex: 6,
    justifyContent: 'center'
  },
  rewardsDetailsTitleText: {
    fontSize: 15
  },
  rewardsDetailsProceedIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpDetailsContainer: {
    flex: 1,
    //backgroundColor: 'pink'
  },
  helpDetails: {
    flex: 1,
    flexDirection: 'row'
  },
  helpDetailsIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpDetailsTitleContainer: {
    flex: 6,
    justifyContent: 'center'
  },
  helpDetailsTitleText: {
    fontSize: 15
  },
  helpDetailsProceedIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inviteFriendsContainer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'grey'
  },
  inviteFriendsIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white'
  },
  inviteFriendsTitleContainer: {
    flex: 5,
    justifyContent: 'center',
    //backgroundColor: 'green'
  },
  inviteFriendsTitleText: {
    fontSize: 15
  },
  inviteFriendsLinkContainer: {
    flex: 2,
    //backgroundColor: 'orange'
  },
  inviteFriendsLink: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  inviteFriendsLinkText: {
    fontSize: 15,
    fontWeight: '500'
  },
  moreContainerOffset: {
    flex: 2
  }
});

export default SettingsScreen;
