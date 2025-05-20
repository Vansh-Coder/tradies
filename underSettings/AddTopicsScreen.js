import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import TagCard from '../cards/TagCard';

const AddTopicsScreen = ({ navigation }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  // add topics list here
  const Topics = [
    'Football',
    'Art',
    'Job',
    'Internship',
    'CS',
    'UI/UX',
    'Data Science',
    'Marketing',
    'Caligraphy',
    'Painting',
    'Volunteering',
    'Journalism',
    'Engineering',
    'Consulting'
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)){
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    }else{
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleAddTopics = () => {
    navigation.navigate('Profile', { selectedTags })
  };

  const isButtonDisabled = (selectedTags.length === 0);

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.titleContainer }>
        <Text style={ styles.titleText }>Add your topics</Text>
      </View>
      <View style={ styles.descriptionContainer }>
        <Text style={ styles.descriptionText }>We will boost your post on feed according to categories</Text>
      </View>
      <View style={ styles.topicsContainer }>
        {Topics.map((topic, index) => (
          <TouchableOpacity key={index} onPress={() => toggleTag(topic)} style={styles.topics}>
            <TagCard
              name={topic}
              containerStyleOffset={[
                styles.topicsStyleOffset, {backgroundColor: selectedTags.includes(topic) ? 'grey' : 'white'}
              ]}
              textStyleOffset={ styles.topicsTextStyleOffset }
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={ styles.addTopicsButtonContainer }>
        <TouchableOpacity
          onPress={handleAddTopics}
          style={[ styles.addTopicsButton, isButtonDisabled && styles.disabledButton ]}
          disabled={isButtonDisabled}
        >
          <Text style={ styles.addTopicsButtonText }>Add topics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'grey'
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    //backgroundColor: 'yellow'
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey'
  },
  topicsContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 35,
    //backgroundColor: 'pink'
  },
  topics: {
    marginRight: 10,
    marginBottom: 10,
  },
  topicsStyleOffset: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 0,
    marginBottom: 0,
  },
  topicsTextStyleOffset: {
    fontSize: 18,
    fontWeight: '400',
  },
  addTopicsButtonContainer: {
    flex: 2,
    justifyContent: 'center',
    //backgroundColor: 'grey'
  },
  addTopicsButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: 'black'
  },
  disabledButton: {
    backgroundColor: '#d3d3d3',
    borderColor: '#d3d3d3'
  },
  addTopicsButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
    //backgroundColor: 'red'
  }
});

export default AddTopicsScreen;
