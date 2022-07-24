import React from 'react';
import {LoginSignUpController} from '../../modules/loginSignup/LoginSignUpController';
import {RootStackParamList} from '../LandingNavigator';
import {StackNavigationProps} from '../RootNavigation';

export const LoginSignUpPage: React.FC<
  StackNavigationProps<RootStackParamList, 'LoginSignUp'>
> = ({route}) => {
  return <LoginSignUpController page={route.params.page} />;
};
