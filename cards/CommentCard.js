import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CircularImage from "../shared/CircularImage";
import CommentReplyCard from "./CommentReplyCard";

const CommentCard = ({ name, content, onReply, commentsLevel2 }) => {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(421);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  const [repliesExist, setRepliesExist] = useState(false);
  const [viewReplies, setViewReplies] = useState(false);

  useEffect(() => {
    setRepliesExist(commentsLevel2.length > 0);
  }, [commentsLevel2]);

  const handleReply = () => {
    onReply(name);
  };

  const handleViewReplies = () => {
    setViewReplies(!viewReplies);
  };

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.profilePictureContainer }>
        <CircularImage
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        />
      </View>
      <View style={ styles.dynamicContainer }>
      <View style={ styles.middleAndLikesInfoContainer }>
      <View style={ styles.middleContainer }>
        <View style={ styles.nameAndTimeContainer }>
          <View style={ styles.nameContainer }>
            <Text style={ styles.nameText }>{ name }</Text>
          </View>
          <View style={ styles.timeContainer }>
            <Text style={ styles.timeText }>2h ago</Text>
          </View>
        </View>
        <View style={ styles.bodyContainer }>
          <Text style={ styles.bodyText }>{ content }</Text>
        </View>
        <View style={ styles.footerContainer }>
          <View style={ styles.replyButtonContainer }>
            <TouchableOpacity onPress={handleReply} style={ styles.replyButton }>
              <Text style={ styles.replyButtonText }>Reply</Text>
            </TouchableOpacity>
          </View>
          <View style={ styles.viewRepliesContainer }>
            {repliesExist && ( // currently visible all time since using const data
              <TouchableOpacity onPress={handleViewReplies} style={ styles.viewRepliesButton }>
                <Text style={ styles.viewRepliesButtonText }>View replies</Text>
              </TouchableOpacity>    
            )}
          </View>
        </View>
      </View>
      <View style={ styles.likesInfoContainer }>
        <View style={ styles.likesButtonContainer }>
          <TouchableOpacity onPress={handleLike} style={ styles.likesButton }>
            <MaterialCommunityIcons
              name={liked ? 'cards-heart' : 'cards-heart-outline'}
              size={25}
              color={liked ? 'red' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View style={ styles.likesCountContainer }>
          <Text style={ styles.likesCountText }>{likeCount}</Text>
        </View>
      </View>
      </View>
      <View style={viewReplies && styles.repliesListContainer }>
        {viewReplies && (
          <FlatList
            data={commentsLevel2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CommentReplyCard name={ item.name } content={ item.text } onReply={onReply} />}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<Text>Error !</Text>}
          />
        )}
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  profilePictureContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  dynamicContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  middleAndLikesInfoContainer: {
    flexDirection: 'row'
  },
  middleContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5,
  },
  nameAndTimeContainer: {
    flexDirection: 'row'
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    fontSize: 15,
    fontWeight: '600'
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  timeText: {
    fontSize: 12,
    color: 'grey'
  },
  bodyContainer: {
    justifyContent: 'center',
    marginBottom: 5
  },
  bodyText: {
    textAlign: 'left'
  },
  footerContainer: {
    flexDirection: 'row'
  },
  replyButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  replyButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  replyButtonText: {
    color: 'grey'
  },
  viewRepliesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  viewRepliesButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewRepliesButtonText: {
    color: 'grey'
  },
  likesInfoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  likesButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2
  },
  likesButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  likesCountContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  likesCountText: {
    color: 'grey'
  },
  repliesListContainer: {
    paddingTop: 10
  }
});

export default CommentCard;
