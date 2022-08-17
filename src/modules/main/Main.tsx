import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useLogoutMutation, useMeQuery} from '../../generated/graphql';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Keyboard} from 'react-native';

export const Main: React.FC = () => {
  const [{data}] = useMeQuery();

  const [, logout] = useLogoutMutation();
  const [searchActive, setSearchActive] = React.useState<boolean>(false);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={style.container}>
      {/* Header and search bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: searchActive ? 'flex-start' : 'space-between',
          marginTop: 20,
          height: 40,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (searchActive) setSearchActive(false);
          }}>
          <Icon name="chevron-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        {!searchActive ? (
          <TouchableOpacity onPress={() => setSearchActive(!searchActive)}>
            <Feather name="search" color="#fff" size={20} />
          </TouchableOpacity>
        ) : (
          <TextInput
            autoFocus={true}
            style={{width: '80%', height: '100%', color: '#fff'}}
            placeholderTextColor="#fff"
            placeholder="Search here..."
          />
        )}
      </View>
      {/* End of header and searchbar */}
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#2E1643',
    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
  },
});
