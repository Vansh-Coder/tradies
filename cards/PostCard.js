import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Toast from 'react-native-root-toast';
import CircularImage from '../shared/CircularImage';
import ImageCarousel from '../shared/ImageCarousel';
import NormalOptions from '../underNewsfeed/NormalOptions';
import ReportOptionsList from '../underNewsfeed/ReportOptionsList';
import ShareList from '../underNewsfeed/ShareList';
import AuthorOptions from '../underNewsfeed/AuthorOptions';
import DeleteOption from '../underNewsfeed/DeleteOption';

const PostCard = ({ name, navigation }) => {

  const [normalOptionsVisible, setNormalOptionsVisible] = useState(false);
  const [authorOptionsVisible, setAuthorOptionsVisible] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState({ top: 0, left: 0 });
  const optionsButtonRef = useRef(null);

  const showOptions = () => {
    optionsButtonRef.current.measure((fx, fy, width, height, px, py) => {
      setOptionsPosition({
        top: py + (height / 2), // Vertical position
        left: px, // Horizontal position
      });
      // Different options according to user
      const user = "other";
      if (user === "author"){
        setAuthorOptionsVisible(true);
      }else{
        setNormalOptionsVisible(true);
      }
    });
  };

  const [reportVisible, setReportVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(110);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));

    if (!liked){
      Toast.show('Liked!', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM - 75,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  }

  const commentCount = 32;

  const handleComments = () => {
    navigation.navigate('Comments', {commentCount: commentCount});
  };

  const [shareVisible, setShareVisible] = useState(false);

  const handleShare = () => {
    setShareVisible(true);
  }

  return (
    <View style={ styles.mainContainer }>

      <View style={ styles.postHeader }>

        <TouchableOpacity onPress={() => Alert.alert('Profile pressed')} style={ styles.profilePic }>
          <CircularImage imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        </TouchableOpacity>

        <View style={ styles.headerInfo }>
          <TouchableOpacity onPress={() => Alert.alert('Profile pressed')} style={ styles.userNameContainer }>
            <Text style={ styles.userName }>{ name }</Text>
          </TouchableOpacity>
          <Text style={ styles.userBio }>Sample bio!</Text>
          <Text style={ styles.timeAndLocation}>Time | Location</Text>
        </View>

        <TouchableOpacity
          onPress={showOptions}
          ref={optionsButtonRef}
          style={ styles.optionsButton }
        >
          <MaterialCommunityIcons name='dots-horizontal' size={25} color="black" />
        </TouchableOpacity>

      </View>

      <View style={ styles.postCaptionContainer }>
        <Text style={ styles.postCaption }>Sample Caption!</Text>
      </View>

      <TouchableOpacity style={ styles.postImageContainer }>
        <ImageCarousel/>
      </TouchableOpacity>

      <View style={ styles.postFooter }>

        <View style={ styles.likeButtonAndCount }>
          <TouchableOpacity onPress={handleLike} style={ styles.likeButton }>
            <MaterialCommunityIcons
              name={liked ? 'cards-heart' : 'cards-heart-outline'}
              size={25}
              color={liked ? 'red' : 'black'}
            />
          </TouchableOpacity>
          <View style={ styles.likeCountContainer }>
            <Text style={ styles.likeCountText }>{likeCount}</Text>
          </View>
        </View>

        <View style={ styles.commentButtonAndCount }>
          <TouchableOpacity onPress={handleComments} style={ styles.commentButton }>
            <MaterialCommunityIcons name='comment-outline' size={25} color="black" />
          </TouchableOpacity>
          <View style={ styles.commentCountContainer }>
            <Text style={ styles.commentCountText }>{commentCount}</Text>
          </View>
        </View>

        <View style={ styles.shareButtonAndCount }>
          <TouchableOpacity onPress={handleShare} style={ styles.shareButton }>
            <Feather name='send' size={25} color="black" />
          </TouchableOpacity>
          <View style={ styles.shareCountContainer }>
            <Text style={ styles.shareCountText }>32</Text>
          </View>
        </View>

        <View style={ styles.emptySpace } ></View>

      </View>

      <NormalOptions
        visible={normalOptionsVisible}
        onClose={() => setNormalOptionsVisible(false)}
        position={optionsPosition}
        onReport={() => setReportVisible(true)}
      />

      <ReportOptionsList
        visible={reportVisible}
        onClose={() => setReportVisible(false)}
      />

      <AuthorOptions
        visible={authorOptionsVisible}
        onClose={() => setAuthorOptionsVisible(false)}
        position={optionsPosition}
        navigation={navigation}
        onDelete={() => setDeleteVisible(true)}
      />

      <DeleteOption
        visible={deleteVisible}
        onClose={() => setDeleteVisible(false)}
      />

      <ShareList
        visible={shareVisible}
        onClose={() => setShareVisible(false)}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    marginHorizontal: 7,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 10
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 8,
    paddingLeft: 4
  },
  profilePic: {
    flex: 1,
    alignItems: 'center'
  },
  headerInfo: {
    flex: 5,
    flexDirection: 'column',
    paddingLeft: 5
  },
  userNameContainer: {
    flex: 1
  },
  userName: {
    fontSize: 15,
    fontWeight: '600'
  },
  userBio: {
    fontSize: 13,
    flex: 1
  },
  timeAndLocation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: 9,
  },
  optionsButton: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 12
  },
  postCaptionContainer: {
    flex: 1,
    fontSize: 14,
    marginTop: 8,
    marginBottom: 3,
    paddingHorizontal: 5,
    alignSelf: 'stretch',
    paddingHorizontal: 14
  },
  postCaption: {
    textAlign: 'left',
  },
  postImageContainer: {
    flex: 3,
    height: 350,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 7
  },
  postImage: {
    flex: 1,
    borderRadius: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  postFooter:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 4,
    paddingLeft: 10,
    marginBottom: 5,
    //backgroundColor: 'cyan'
  },
  likeButtonAndCount: {
    flex: 1,
    flexDirection: 'row'
  },
  likeButton: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  likeCountContainer: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'grey'
  },
  likeCountText: {
    fontSize: 13,
    //backgroundColor: 'yellow'
  },
  commentButtonAndCount: {
    flex: 1,
    flexDirection: 'row'
  },
  commentButton: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  commentCountContainer: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'grey'
  },
  commentCountText: {
    fontSize: 13,
    //backgroundColor: 'yellow'
  },
  shareButtonAndCount: {
    flex: 1,
    flexDirection: 'row'
  },
  shareButton: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  shareCountContainer: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'grey'
  },
  shareCountText: {
    fontSize: 13,
    //backgroundColor: 'yellow'
  },
  emptySpace: {
    flex: 1.5,
    //backgroundColor: 'pink'
  }
});

export default PostCard;
