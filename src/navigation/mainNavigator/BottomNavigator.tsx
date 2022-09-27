import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from './bottomNavigator/Home';
import {Image, Text, View} from 'react-native';
import {colors} from '../../constants/style';

const Tab = createBottomTabNavigator();

const EmptyComponent: React.FC = () => {
  return null;
};

export const BottomNavigator: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let icon = require('../../assets/bottomBar/plus.png');
            if (route.name === 'Home') {
              icon = require('../../assets/bottomBar/sm-solid-home.png');
            } else if (route.name === 'Schedule') {
              icon = require('../../assets/bottomBar/ios-calendar.png');
            } else if (route.name === 'Profile') {
              icon = require('../../assets/bottomBar/sm-solid-friends.png');
            } else if (route.name === 'Explore') {
              icon = require('../../assets/bottomBar/ios-compass.png');
            }
            const tintColor = focused ? colors.accent : '#B6B7B7';
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={icon} style={{tintColor: tintColor}} />
                <Text style={{color: focused ? colors.accent : '#B6B7B7'}}>
                  {route.name}
                </Text>
              </View>
            );
          },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: '#B6B7B7',

          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 80,
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Create" component={Home} />
        <Tab.Screen name="Explore" component={Home} />
        <Tab.Screen name="Profile" component={Home} />
      </Tab.Navigator>
    </>
  );
};
