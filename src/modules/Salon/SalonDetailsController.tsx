import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {useGetSalonQuery} from '../../generated/graphql';
import LoadingAnimation from '../../shared/LoadingAnimation';
import NavBarSalon from './components/NavBarSalon';
import ServiceList from './components/ServiceList';

const heightScreen = Dimensions.get('screen').height;

type SalonDetailsProps = {
  SalonId: number;
};

const SalonDetails: React.FC<SalonDetailsProps> = ({SalonId}) => {
  const salonPhoto = require('../../assets/salonPhotos/salon2.webp');
  const SALON_TITLES: Array<string> = ['Services', 'Gallery', 'Review'];

  const [{data, fetching}] = useGetSalonQuery({variables: {id: SalonId}});
  const [activeTitle, setActiveTitle] = React.useState<number>(0);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <LoadingAnimation loadingState={fetching} />

      <Image
        source={salonPhoto}
        style={{
          width: '100%',
          height: heightScreen / 3,
          opacity: 1,
          backgroundColor: 'rgba(0,0,0,0,6)',
        }}
      />
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
