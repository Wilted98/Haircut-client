import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
// import {BottomNavigator} from './mainNavigator/BottomNavigator';
import {SalonPage} from './mainNavigator/SalonPage';
import {MainPage} from './mainNavigator/MainPage';
import DrawerScreen from './mainNavigator/Drawer';

export type RootStackParamList = {
  Main: undefined;
  SalonDetails: {SalonId: number};
  Profile: undefined;
};

const Stack = createDrawerNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        drawerStyle: {
          height: '95%',
          alignSelf: 'center',
          marginTop: '5%',
          borderTopRightRadius: 50,
          overflow: 'hidden',
          borderBottomRightRadius: 50,
        },
      }}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={MainPage}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SalonDetails"
        component={SalonPage}
      />
    </Stack.Navigator>
  );
};
