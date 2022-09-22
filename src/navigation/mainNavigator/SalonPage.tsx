import React from 'react';
import SalonDetailsController from '../../modules/Salon/SalonDetailsController';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../MainNavigator';

type NavigationSalonProps = RouteProp<RootStackParamList, 'SalonDetails'>;

type SalonPageProps = {
  route: NavigationSalonProps;
};

export const SalonPage: React.FC<SalonPageProps> = ({route}) => {
  return <SalonDetailsController SalonId={route.params.SalonId} />;
};
