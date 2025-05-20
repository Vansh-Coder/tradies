import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import GroupTextBubble from './underGroupChat/GroupTextBubble';
import OrganizerChatOptions from './underGroupChat/OrganizerChatOptions';
import MemberChatOptions from './underGroupChat/MemberChatOptions';
import MuteModal from './MuteModal';
import LeaveGroupModal from '../underGroups/LeaveGroupModal';
import AttachModal from './AttachModal';
import GroupImageBubble from './underGroupChat/GroupImageBubble';
import GroupDocumentBubble from './underGroupChat/GroupDocumentBubble';

const GroupChatScreen = ({ route, navigation }) => {

  const { name } = route.params;

  const truncateName = (name) => {
    if (name.length > 25){
      start = name.substring(0, 25);
      return start + "...";
    }else{
      return name;
    }
  };

  const truncatedName = truncateName(name);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: truncatedName,
      headerRight: () => (
        <TouchableOpacity onPress={showOptions} ref={optionsButtonRef}>
          <MaterialCommunityIcons name='dots-horizontal' size={25} color="black" style={{ marginRight: 16 }} />
        </TouchableOpacity>
      )
    });
  }, [navigation, truncatedName]);

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

  const [muteVisible, setMuteVisible] = useState(false);
  const [leaveVisible, setLeaveVisible] = useState(false);

  const [attachVisible, setAttachVisible] = useState(false);

  const handleAttach = () => {
    setAttachVisible(true);
  }

  const [inputText, setInputText] = useState('');

  const [messages, setMessages] = useState([
    {'id': 4, 'text': "i'm good", 'sender': 'me', 'type': 'text'},
    {'id': 3, 'text': "how are you", 'sender': 'member2', 'type': 'text'},
    {'id': 2, 'text': "hi", 'sender': 'member1', 'type': 'text'},
    {'id': 1, 'text': "hello", 'sender': 'me', 'type': 'text'}
  ]);

  const handleSendButton = useCallback(() => {
    if (inputText.trim()) {
      const newMessage = { id: messages.length + 1, text: inputText, sender: 'me', type: 'text' };
      setMessages([newMessage, ...messages]);
      setInputText('');
    }
  }, [inputText, messages]);

  const handleImagePick = (image) => {
    const newMessage = {
      id: messages.length + 1,
      fileName: image.fileName || image.uri.split('/').pop(),
      uri: image.uri,
      sender: 'me',
      type: 'image',
    };
    setMessages([newMessage, ...messages]);
  };

  const handleDocumentPick = (document) => {
    const newMessage = {
      id: messages.length + 1,
      fileName: document.name,
      fileUri: document.uri,
      sender: 'me',
      type: 'document',
    };
    setMessages([newMessage, ...messages]);
  };

  return (
    <KeyboardAvoidingView
      style={ styles.mainContainer }
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 85 : 0}
    >
      <View style={ styles.messageListContainer }>
        <FlatList
          data={messages}
          renderItem={({ item }) => {
            if (item.type === 'image'){
              return <GroupImageBubble uri={ item.uri } sender={ item.sender } />;
            }else if (item.type === 'document'){
              return <GroupDocumentBubble fileName={ item.fileName } fileUri={ item.fileUri } sender={ item.sender } />;
            }else{
              return <GroupTextBubble text={ item.text } sender={ item.sender } />;
            }
          }}
          keyExtractor={(item) => item.id}
          inverted={true}
        />
      </View>
      <View style={styles.messageBarContainer}>
        <TouchableOpacity onPress={handleAttach} style={ styles.attachIconContainer }>
          <Ionicons name="add-circle-outline" size={31} color="black" />
        </TouchableOpacity>
        <View style={ styles.inputFieldContainer }>
          <TextInput
            style={styles.inputField}
            placeholder="Type here..."
            value={inputText}
            onChangeText={setInputText}
            multiline={true}
            numberOfLines={1}
            maxHeight={100}
          />
          <TouchableOpacity onPress={handleSendButton} style={styles.sendIconContainer}>
            <Ionicons name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <OrganizerChatOptions
        visible={organizerOptionsVisible}
        onClose={() => setOrganizerOptionsVisible(false)}
        position={optionsPosition}
        navigation={navigation}
        onMute={() => setMuteVisible(true)}
      />

      <MemberChatOptions
        visible={memberOptionsVisible}
        onClose={() => setMemberOptionsVisible(false)}
        position={optionsPosition}
        navigation={navigation}
        onMute={() => setMuteVisible(true)}
        onLeave={() => setLeaveVisible(true)}
      />

      <MuteModal
        visible={muteVisible}
        onClose={() => setMuteVisible(false)}
      />

      <LeaveGroupModal
        visible={leaveVisible}
        onClose={() => setLeaveVisible(false)}
      />

      <AttachModal
        visible={attachVisible}
        onClose={() => setAttachVisible(false)}
        onImagePick={handleImagePick}
        onDocumentPick={handleDocumentPick}
      />

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  messageListContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  messageBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderTopColor: '#e5e4e2'
  },
  attachIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3
  },
  inputFieldContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e4e2',
    borderRadius: 20,
    paddingRight: 10,
  },
  inputField: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 12,
    paddingRight: 10,
    fontSize: 15
  },
  sendIconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default GroupChatScreen;
