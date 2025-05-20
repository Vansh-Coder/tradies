import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import TextBubble from './underUserChat/TextBubble';
import ChatOptions from './ChatOptions';
import MuteModal from './MuteModal';
import ArchiveModal from './ArchiveModal';
import DeleteModal from './DeleteModal';
import BlockModal from './BlockModal';
import AttachModal from './AttachModal';
import ImageBubble from './underUserChat/ImageBubble';
import DocumentBubble from './underUserChat/DocumentBubble';

const ChatScreen = ({ route, navigation }) => {

  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
      headerRight: () => (
        <TouchableOpacity onPress={showOptions} ref={optionsButtonRef}>
          <MaterialCommunityIcons name='dots-horizontal' size={25} color="black" style={{ marginRight: 16 }} />
        </TouchableOpacity>
      )
    });
  }, [navigation, name]);

  const [optionsVisible, setOptionsVisible] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState({ top: 0, left: 0 });
  const optionsButtonRef = useRef(null);

  const showOptions = () => {
    optionsButtonRef.current.measure((fx, fy, width, height, px, py) => {
      setOptionsPosition({
        top: py + (height / 2), // Vertical position
        left: px, // Horizontal position
      });
      setOptionsVisible(true);
    });
  };

  const [muteVisible, setMuteVisible] = useState(false);
  const [archiveVisible, setArchiveVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [blockVisible, setBlockVisible] = useState(false);

  const [attachVisible, setAttachVisible] = useState(false);

  const handleAttach = () => {
    setAttachVisible(true);
  }

  const [inputText, setInputText] = useState('');

  const [messages, setMessages] = useState([
    {'id': 4, 'text': "i'm good", 'sender': 'me', 'type': 'text'},
    {'id': 3, 'text': "how are you", 'sender': 'other', 'type': 'text'},
    {'id': 2, 'text': "hi", 'sender': 'other', 'type': 'text'},
    {'id': 1, 'text': "hello", 'sender': 'me', 'type': 'text'}
  ]);

  const handleSendButton = useCallback(() => {
    if (inputText.trim()) {
      const newMessage = { id: messages.length + 1, text: inputText.trim(), sender: 'me', type: 'text' };
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
              return <ImageBubble uri={ item.uri } sender={ item.sender } />;
            }else if (item.type === 'document'){
              return <DocumentBubble fileName={ item.fileName } fileUri={ item.fileUri } sender={ item.sender } />;
            }else{
              return <TextBubble text={ item.text } sender={ item.sender } />;
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

      <ChatOptions
        visible={optionsVisible}
        onClose={() => setOptionsVisible(false)}
        position={optionsPosition}
        name={name}
        onMute={() => setMuteVisible(true)}
        onArchive={() => setArchiveVisible(true)}
        onDelete={() => setDeleteVisible(true)}
        onBlock={() => setBlockVisible(true)}
      />

      <MuteModal
        visible={muteVisible}
        onClose={() => setMuteVisible(false)}
      />

      <ArchiveModal
        visible={archiveVisible}
        onClose={() => setArchiveVisible(false)}
      />

      <DeleteModal
        visible={deleteVisible}
        onClose={() => setDeleteVisible(false)}
      />

      <BlockModal
        visible={blockVisible}
        onClose={() => setBlockVisible(false)}
        name={name}
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
    paddingHorizontal: 10,
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

export default ChatScreen;
