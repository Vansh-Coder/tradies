import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CircularImage from "../shared/CircularImage";

const CommentReplyCard = ({ name, content, onReply }) => {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(421);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  const handleReply = () => {
    onReply(name);
  };

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.profilePictureContainer }>
        <CircularImage
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        />
      </View>
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
        <View style={ styles.replyButtonContainer }>
          <TouchableOpacity onPress={handleReply} style={ styles.replyButton }>
            <Text style={ styles.replyButtonText }>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ styles.likesInfoContainer }>
        <View style={ styles.likesButtonContainer }>
          <TouchableOpacity onPress={handleLike} style={ styles.likesButton }>
            <MaterialCommunityIcons
              name={liked ? "cards-heart" : "cards-heart-outline"}
              size={25}
              color={liked ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>
        <View style={ styles.likesCountContainer }>
          <Text style={ styles.likesCountText }>{likeCount}</Text>
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
  middleContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5
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
    color: 'grey'
  },
  bodyContainer: {
    justifyContent: 'center',
    marginBottom: 5
  },
  bodyText: {
    textAlign: 'left'
  },
  replyButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  replyButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  replyButtonText: {
    color: 'grey'
  },
  likesInfoContainer: {
    flexDirection: 'column',
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
  }
});

export default CommentReplyCard;
