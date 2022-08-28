import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {
  GetAllHairStylistsQueryVariables,
  useGetAllHairStylistsQuery,
  useLogoutMutation,
  useMeQuery,
} from '../../generated/graphql';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Keyboard} from 'react-native';
import {HairStylist} from './components/HairStylist';

export const Main: React.FC = () => {
  const [, logout] = useLogoutMutation();
  const [searchActive, setSearchActive] = React.useState<boolean>(false);
  const [{data}] = useGetAllHairStylistsQuery();

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
          paddingHorizontal: 25,
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

      <View style={style.hairStylist}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            fontFamily: 'Poppins',
            color: '#36486b',
            marginBottom: 25,
          }}>
          Hair Stylist
        </Text>
        {data?.getAllHairStylists.map(hairstylist => {
          return (
            <HairStylist
              key={hairstylist.id}
              hairStylistName={hairstylist.name}
              salonName={hairstylist.salon?.name as string}
              rating={hairstylist.salon?.rating as number}
            />
          );
        })}
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#2E1643',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  hairStylist: {
    height: '88%',
    width: '100%',
    zIndex: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
