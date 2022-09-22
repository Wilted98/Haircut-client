import React from 'react';
import {View, Text} from 'react-native';

type SalonDetailsProps = {
  SalonId: number;
};

const SalonDetails: React.FC<SalonDetailsProps> = ({SalonId}) => {
  console.log(SalonId, 'aaa');
  return (
    <View>
      <Text>Hello, MotherFuckers!</Text>
    </View>
  );
};

export default SalonDetails;
