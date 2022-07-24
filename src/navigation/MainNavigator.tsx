import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MainPage} from './mainNavigator/MainPage';

export type RootStackParamList = {
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={MainPage}
      />
    </Stack.Navigator>
  );
};
