import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {useGetSalonQuery} from '../../generated/graphql';
import LoadingAnimation from '../../shared/LoadingAnimation';
import NavBarSalon from './components/NavBarSalon';
import ServiceList from './components/ServiceList';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/MainNavigator';

const heightScreen = Dimensions.get('screen').height;

type SalonDetailsProps = {
  SalonId: number;
};

const SalonDetails: React.FC<SalonDetailsProps> = ({SalonId}) => {
  const salonPhoto = require('../../assets/salonPhotos/salon2.webp');
  const SALON_TITLES: Array<string> = ['Services', 'Gallery', 'Reviews'];

  const [{data, fetching}] = useGetSalonQuery({variables: {id: SalonId}});
  const [activeTitle, setActiveTitle] = React.useState<number>(0);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={{width: '100%', height: '100%', position: 'relative'}}>
      <LoadingAnimation loadingState={fetching} />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 40,
          left: 10,
          zIndex: 20,
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
        }}>
        <Icon name="chevron-back-outline" size={35} color="#fff" />
      </TouchableOpacity>

      <View
        style={{
          width: '100%',
          height: heightScreen / 3,
          position: 'relative',
        }}>
        <Image
          source={salonPhoto}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          top: -50,
          borderTopLeftRadius: 60,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <NavBarSalon
            activeTitle={activeTitle}
            salon_titles={SALON_TITLES}
            setActiveTitle={setActiveTitle}
          />
        </View>
        <View style={{marginTop: 25}}>
          {activeTitle === 0 && (
            <ServiceList serviceList={data?.getSalon?.services} />
          )}
        </View>
      </View>
    </View>
  );
};

export default SalonDetails;
