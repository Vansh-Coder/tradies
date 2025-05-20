import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const RewardCard = ({ name }) => {

  return (
    <View style={ styles.mainContainer }>
      <TouchableOpacity onPress={() => Alert.alert('Reward pressed')} style={ styles.mainInnerContainer }>
        <View style={ styles.cardInfoContainer }>
          <View style={ styles.cardStatusContainer }>
            <Text style={ styles.cardStatusText }>Expires soon</Text>
          </View>
          <View style={ styles.companyTitleContainer }>
            <Text style={ styles.companyTitleText }>{ name }</Text>
          </View>
          <View style={ styles.cardFooterContainer }>
            <View style={ styles.cardPointsContainer }>
              <Text style={ styles.cardPointsText }>200/200</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('Redeem pressed')} style={ styles.redeemButton }>
              <Text style={ styles.redeemButtonText }>Redeem Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={ styles.companyLogoOuterContainer }>
          <View style={ styles.companyLogoInnerContainer }>
            <Image
              source={require('../assets/Starbucks.png')}
              style={ styles.companyLogo }
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  mainInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    //backgroundColor: 'cyan'
  },
  cardInfoContainer: {
    flex: 4,
    flexDirection: 'column',
    //backgroundColor: 'pink'
  },
  cardStatusContainer: {
    flex: 1,
    //backgroundColor: 'orange'
  },
  cardStatusText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'red',
    //backgroundColor: 'yellow'
  },
  companyTitleContainer: {
    flex: 2,
    //backgroundColor: 'grey'
  },
  companyTitleText: {
    fontSize: 18,
    fontWeight: '600',
    //backgroundColor: 'cyan'
  },
  cardFooterContainer: {
    flex: 2,
    flexDirection: 'row',
    //backgroundColor: 'orange'
  },
  cardPointsContainer: {
    borderWidth: 1,
    borderColor: '#DEFFEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#DEFFEE',
    marginRight: 5
  },
  cardPointsText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2ECC71'
  },
  redeemButton: {
    borderWidth: 1,
    borderColor: '#2ECC71',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#2ECC71'
  },
  redeemButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white'
  },
  companyLogoOuterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'grey'
  },
  companyLogoInnerContainer: {
    height: 70,
    width: 70,
    //backgroundColor: 'yellow'
  },
  companyLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    //backgroundColor: 'pink'
  }
});

export default RewardCard;
