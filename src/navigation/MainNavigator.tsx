import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomNavigator} from './mainNavigator/BottomNavigator';
import {SalonPage} from './mainNavigator/SalonPage';

export type RootStackParamList = {
  Main: undefined;
  SalonDetails: {SalonId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={BottomNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SalonDetails"
        component={SalonPage}
      />
    </Stack.Navigator>
  );
};
