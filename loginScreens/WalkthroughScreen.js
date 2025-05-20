import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;
const IMAGE_WIDTH = 350;
const IMAGE_HEIGHT = 350;   // maintain aspect of 1:1

const images = {
  'Walkthrough1': require("../assets/Walkthrough1.png"),
  'Walkthrough2': require("../assets/Walkthrough2.png"),
  'Walkthrough3': require("../assets/Walkthrough3.png")
};

const WalkthroughScreen = ({ navigation }) => {

  const data = [
    {'image': "Walkthrough1", 'text': "Explore the Community Around Your Campus"},
    {'image': "Walkthrough2", 'text': "Connect to People Around You"},
    {'image': "Walkthrough3", 'text': "Get Started by Creating your Account"}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSnapToItem = (index) => {
    setCurrentIndex(index);
  };

  const handleCreateAccount = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={ styles.safeArea }>
    <View style={styles.mainContainer}>
      <View style={ styles.titleContainer }>
        <Text style={ styles.titleText }>TRADIES</Text>
      </View>
      <View style={ styles.carouselContainer }>
        <Carousel
        style={ styles.carousel }
        width={screenWidth}
        height={IMAGE_HEIGHT + 175}
        data={data}
        loop={false}
        onSnapToItem={handleSnapToItem}
        renderItem={({ index }) => (
          <View style={ styles.imageContainer }>
            <Image
            key={index}
            source={images[data[index].image]}
            style={styles.image}
            />
          </View>
        )}
      />
      <View style={styles.textContainer} pointerEvents='none'>
        <Text style={styles.text} pointerEvents='none'>{data[currentIndex].text}</Text>
        {data.length > 1 && (
          <View style={styles.pagination}>
            {data.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot, {
                    backgroundColor: index === currentIndex ? 'black' : 'grey',
                    width: index === currentIndex ? 8 : 7,
                    height: index === currentIndex ? 8 : 7
                  }
                ]}
              />
            ))}
          </View>
        )}
      </View>
      </View>
      <View style={ styles.buttonAndLoginContainer }>
        <View style={ styles.createAccountButtonContainer }>
        <TouchableOpacity onPress={handleCreateAccount} style={ styles.createAccountButton }>
          <Text style={ styles.createAccountButtonText }>Create account</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.loginQuestionContainer }>
        <Text style={ styles.loginQuestionText }>Already have an account ?</Text>
        <TouchableOpacity onPress={handleLogin} style={ styles.loginButton }>
          <Text style={ styles.loginText }> Log in</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: IMAGE_HEIGHT + 120
  },
  carousel: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  imageContainer: {
    marginHorizontal: 10,
    alignItems: 'center'
  },
  image: {
    //width: '100%',
    //height: '100%',
    maxWidth: IMAGE_WIDTH,
    maxHeight: IMAGE_WIDTH, // maintain aspect of 1:1
    resizeMode: 'cover'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    maxWidth: (screenWidth * 0.7),
    textAlign: 'center'
  },
  pagination: {
    position: 'absolute',
    bottom: -45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  dot: {
    borderRadius: 6,
    margin: 4
  },
  buttonAndLoginContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  createAccountButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  createAccountButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  createAccountButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  loginQuestionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loginQuestionText: {
    fontSize: 17
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    fontSize: 17,
    fontWeight: '600'
  }
});

export default WalkthroughScreen;
