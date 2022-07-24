import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LandingPage} from './mainNavigator/LandingPage';
import {LoginSignUpPage} from './mainNavigator/LoginSignupPage';

export type RootStackParamList = {
  LandingPage: undefined;
  LoginSignUp: {page: 'signin' | 'signup'};
};

const Stack = createStackNavigator<RootStackParamList>();

export const LandingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="LandingPage"
        component={LandingPage}
      />
      <Stack.Screen
        name="LoginSignUp"
        component={LoginSignUpPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
