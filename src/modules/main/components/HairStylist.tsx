import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Star from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../../../navigation/MainNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type hairstylistprops = {
  hairStylistName: string;
  salonName: string;
  rating: number;
  id: number;
};

export const HairStylist: React.FC<hairstylistprops> = ({
  hairStylistName,
  salonName,
  rating,
  id,
}) => {
  const bgImage = require('../../../assets/salonPhotos/Salon_1.webp');

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'SalonDetails'>
    >();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('SalonDetails', {SalonId: id});
      }}>
      <Image style={styles.backgroundImage} source={bgImage} />
      <View style={styles.rightTriangle}></View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          fontFamily: 'Poppins',
          color: '#fff',
          textAlign: 'right',
          margin: 20,
        }}>
        {hairStylistName}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          fontFamily: 'Poppins',
          color: '#fff',
          textAlign: 'right',
          marginRight: 20,
        }}>
        {salonName}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-end',
          marginRight: 20,
          marginTop: 20,
        }}>
        <Star name="star" color="#D69421" size={18} />
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 12,
            fontWeight: '400',
            color: '#fff',
            marginLeft: 10,
          }}>
          {rating}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderRadius: 20,
    position: 'relative',
    marginBottom: 15,
  },
  rightTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 560,
    borderBottomWidth: 320,
    borderLeftWidth: 0,
    borderTopColor: '#352641',
    borderRightColor: '#352641',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backgroundImage: {
    height: 200,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.6,
  },
});
