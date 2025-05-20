import React, { useLayoutEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import OrganizerDescriptionOptions from "./OrganizerDescriptionOptions";
import MemberDescriptionOptions from "./MemberDescriptionOptions";
import JoinAccessModal from "./JoinAccessModal";
import LeaveGroupModal from "./LeaveGroupModal";
import ShareList from "../underNewsfeed/ShareList";
import ReportOptionsList from "../underNewsfeed/ReportOptionsList";
import MemberCard from "../cards/MemberCard";

const GroupDescriptionScreen = ({ route, navigation }) => {
  
  const name = route?.params?.name || '';

  const truncateGroupName = (name) => {
    if (name.length > 25){
      const start = name.substring(0, 25);
      return start + '...';
    }else{
      return name;
    }
  };

  const GroupName = truncateGroupName(name);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: GroupName,
      headerRight: () => (
        <TouchableOpacity onPress={showOptions} ref={optionsButtonRef}>
          <MaterialCommunityIcons name='dots-horizontal' size={25} color="black" style={{ marginRight: 16 }} />
        </TouchableOpacity>
      )
    });
  }, [navigation, name]);

  const [organizerOptionsVisible, setOrganizerOptionsVisible] = useState(false);
  const [memberOptionsVisible, setMemberOptionsVisible] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState({ top: 0, left: 0 });
  const optionsButtonRef = useRef(null);

  const showOptions = () => {
    optionsButtonRef.current.measure((fx, fy, width, height, px, py) => {
      setOptionsPosition({
        top: py + (height / 2), // Vertical position
        left: px, // Horizontal position
      });

      const user = "organizer";
      if (user == "organizer"){
        setOrganizerOptionsVisible(true);
      }else{
        setMemberOptionsVisible(true);
      }
    });
  };

  const [joinAccessVisible, setJoinAccessVisible] = useState(false);
  const [leaveGroupVisible, setLeaveGroupVisible] = useState(false);

  const [shareVisible, setShareVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);

  const description = "This is group description where they can give some details about group and their purpose for creating this group.";

  const Organizers = [
    'Alex Johnson',
    'Steve Williams',
    'Robert Rivera',
    'Tucker Carlson'
  ];

  const handleMembersList = () => {
    navigation.navigate('MembersList');
  };

  return (
    <View style={ styles.mainContainer }>
      <ScrollView
        style={ styles.scrollContainer }
        showsVerticalScrollIndicator={false}
      >
        <View style={ styles.groupImageContainer }>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }}
            style={ styles.groupImage }
          />
        </View>
        <View style={ styles.descriptionTitleContainer }>
          <Text style={ styles.descriptionTitleText }>About Group</Text>
        </View>
        <View style={ styles.descriptionFieldContainer }>
          <Text style={ styles.descriptionFieldText }>{ description }</Text>
        </View>
        <View style={ styles.dateTitleContainer }>
          <Text style={ styles.dateTitleText }>Date</Text>
        </View>
        <View style={ styles.dateFieldContainer }>
          <View style={ styles.dateIconContainer }>
            <MaterialCommunityIcons name="calendar" size={24} color="black" />
          </View>
          <View style={ styles.dateTextContainer }>
            <Text style={ styles.dateText }>Saturday, May 25, 2024</Text>
          </View>
        </View>
        <View style={ styles.timeTitleContainer }>
          <Text style={ styles.timeTitleText }>Time</Text>
        </View>
        <View style={ styles.timeFieldContainer }>
          <View style={ styles.timeIconContainer }>
            <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="black" />
          </View>
          <View style={ styles.timeTextContainer }>
            <Text style={ styles.timeText }>10:30 AM to 5:00 PM</Text>
          </View>
        </View>
        <View style={ styles.locationTitleContainer }>
          <Text style={ styles.locationTitleText }>Location</Text>
        </View>
        <View style={ styles.locationFieldContainer }>
          <View style={ styles.locationIconContainer }>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>
          <View style={ styles.locationTextContainer }>
            <Text style={ styles.locationText }>Tempe, Arizona</Text>
          </View>
        </View>
        <View style={ styles.organizersTitleContainer }>
          <Text style={ styles.organizersTitleText }>Organizers</Text>
        </View>
        <View style={ styles.organizersListContainer }>
          {Organizers.map((organizer, index) => (
            <MemberCard key={index} name={organizer} />
          ))}
        </View>
        <View style={ styles.membersButtonContainer }>
          <TouchableOpacity onPress={handleMembersList} style={ styles.membersButton }>
            <Text style={ styles.membersButtonText }>Members List (10)</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={ styles.joinButtonContainer }>
        <TouchableOpacity onPress={() => Alert.alert('Join Group pressed!')} style={ styles.joinButton }>
          <Text style={ styles.joinButtonText }>Join Group</Text>
        </TouchableOpacity>
      </View>
      
      <OrganizerDescriptionOptions
        visible={organizerOptionsVisible}
        onClose={() => setOrganizerOptionsVisible(false)}
        position={optionsPosition}
        navigation={navigation}
        onJoinAccess={() => setJoinAccessVisible(true)}
        onLeave={() => setLeaveGroupVisible(true)}
      />

      <MemberDescriptionOptions
        visible={memberOptionsVisible}
        onClose={() => setMemberOptionsVisible(false)}
        position={optionsPosition}
        onShare={() => setShareVisible(true)}
        onReport={() => setReportVisible(true)}
      />

      <LeaveGroupModal
        visible={leaveGroupVisible}
        onClose={() => setLeaveGroupVisible(false)}
      />

      <JoinAccessModal
        visible={joinAccessVisible}
        onClose={() => setJoinAccessVisible(false)}
      />

      <ShareList
        visible={shareVisible}
        onClose={() => setShareVisible(false)}
      />

      <ReportOptionsList
        visible={reportVisible}
        onClose={() => setReportVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  groupImageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  groupImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  descriptionTitleContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 5
  },
  descriptionTitleText: {
    fontSize: 15,
    fontWeight: '600'
  },
  descriptionFieldContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10
  },
  descriptionFieldText: {
    //
  },
  dateTitleContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 5
  },
  dateTitleText: {
    fontSize: 15,
    fontWeight: '600'
  },
  dateFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    alignSelf: 'flex-start'
  },
  dateIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  dateTextContainer: {
    justifyContent: 'center'
  },
  dateText: {
    fontWeight: '500'
  },
  timeTitleContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 5
  },
  timeTitleText: {
    fontSize: 15,
    fontWeight: '600'
  },
  timeFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    alignSelf: 'flex-start'
  },
  timeIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  timeTextContainer: {
    justifyContent: 'center'
  },
  timeText: {
    fontWeight: '500'
  },
  locationTitleContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 5
  },
  locationTitleText: {
    fontSize: 15,
    fontWeight: '600'
  },
  locationFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    alignSelf: 'flex-start'
  },
  locationIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  locationTextContainer: {
    justifyContent: 'center'
  },
  locationText: {
    fontWeight: '500'
  },
  organizersTitleContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 5
  },
  organizersTitleText: {
    fontSize: 17,
    fontWeight: '600'
  },
  organizersListContainer: {
    marginHorizontal: 5,
    marginBottom: 10
  },
  membersButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 15,
    marginBottom: 10
  },
  membersButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  membersButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#3366CC'
  },
  joinButtonContainer: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  joinButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  joinButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
});

export default GroupDescriptionScreen;
