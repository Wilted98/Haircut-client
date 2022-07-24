import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useLogoutMutation, useMeQuery} from '../../generated/graphql';

export const Main: React.FC = () => {
  const [{data}] = useMeQuery();

  const [, logout] = useLogoutMutation();

  return (
    <View>
      <Text>Hello, {data?.me?.name}</Text>

      <TouchableOpacity
        style={{
          width: 80,
          backgroundColor: 'red',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 15,
        }}
        onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
