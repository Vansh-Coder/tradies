import React, { useLayoutEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import CommentCard from '../cards/CommentCard';

const CommentsScreen = ({ navigation, route }) => {

  const [commentLevel, setCommentLevel] = useState(1);
  const userName = "Elon Musk";
  
  const count = route?.params?.commentCount || 0;

  const screenTitle = () => {
    if (count > 0){
      return `Comments (${count})`;
    }else{
      return 'Comments';
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screenTitle()
    });
  }, [navigation, screenTitle]);

  const [commentsLevel1, setCommentsLevel1] = useState([
    { 'id': 1, 'name': 'Alex Williams', 'text': 'Hey! This is a great place. I will visit it sometime, hopefully.' },
    { 'id': 2, 'name': 'Steve Jobs', 'text': 'Awesome!' },
    { 'id': 3, 'name': 'David Johnson', 'text': 'Hey! This is a great place. I will visit it sometime, hopefully. Awesome place! I always wanted to go there too! They have the best food in town.' },
    { 'id': 4, 'name': 'Mark Musk', 'text': 'Awesome place! I always wanted to go there too! They have the best food in town.' }
  ]);

  // each comment of level 1 will have its own list of level 2 comments
  const [commentsLevel2, setCommentsLevel2] = useState([
    { 'id': 1, 'name': 'Alex Williams', 'text': 'Hey! This is a great place. I will visit it sometime, hopefully.' },
    { 'id': 2, 'name': 'Steve Jobs', 'text': 'Awesome!' },
    { 'id': 3, 'name': 'David Johnson', 'text': 'Hey! This is a great place. I will visit it sometime, hopefully. Awesome place! I always wanted to go there too! They have the best food in town.' },
    { 'id': 4, 'name': 'Mark Musk', 'text': 'Awesome place! I always wanted to go there too! They have the best food in town.' }
  ]);

  const [replying, setReplying] = useState(false);

  const [placeholder, setPlaceholder] = useState('Type here...');

  const onReply = (name) => {
    setInputText('');
    setReplying(true)
    setCommentLevel(2);
    const firstName = name.split(' ')[0];
    setPlaceholder(`Replying to ${firstName}...`);
  };

  const handleCancelReplying = () => {
    setInputText('');
    setCommentLevel(1);
    setReplying(false);
    setPlaceholder('Type here...');
  };

  const [inputText, setInputText] = useState('');

  const handleSendButton = useCallback(() => {
    if (inputText.trim()) {
      console.log('Send', commentLevel);
      if (commentLevel == 1){
        const newComment = { id: commentsLevel1.length + 1, name: userName, text: inputText.trim() };
        setCommentsLevel1([...commentsLevel1, newComment]);
      }else{
        const newComment = { id: commentsLevel2.length + 1, name: userName, text: inputText.trim() };
        setCommentsLevel2([...commentsLevel2, newComment]);
      }
      setInputText('');
    }
  }, [inputText, commentsLevel1]);
  
  return (
    <KeyboardAvoidingView
      style={ styles.mainContainer }
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 85 : 0}
    >
      <View style={ styles.commentsListContainer }>
        <FlatList
          data={commentsLevel1}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CommentCard name={ item.name } content={ item.text } onReply={onReply} commentsLevel2={commentsLevel2} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text style={{ fontSize: 17, fontWeight: '600', marginTop: 200, marginHorizontal: 100 }}>No comments yet</Text>}
        />
      </View>
      <View style={ styles.commentBarContainer }>
        <View style={ styles.inputFieldContainer }>
          {replying &&
            <TouchableOpacity onPress={handleCancelReplying} style={ styles.cancelReplyingButton }>
              <Entypo name="cross" size={24} color="grey" />
            </TouchableOpacity>
          }
          <TextInput
            style={[ styles.inputField, replying && { paddingLeft: 5 } ]}
            placeholder={placeholder}
            placeholderTextColor="grey"
            value={inputText}
            onChangeText={setInputText}
            multiline={true}
            numberOfLines={1}
            maxHeight={60}
          />
          <TouchableOpacity onPress={handleSendButton} style={styles.sendIconContainer}>
            <Ionicons name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  commentsListContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  commentBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderTopColor: '#e5e4e2',
    height: 80
  },
  inputFieldContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e4e2',
    borderRadius: 30,
    paddingRight: 10,
  },
  cancelReplyingButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10
  },
  inputField: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 15
  },
  sendIconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default CommentsScreen;
