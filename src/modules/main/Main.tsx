import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {
  useGetAllHairStylistsQuery,
  useGetAllSalonsQuery,
  useLogoutMutation,
} from '../../generated/graphql';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Keyboard} from 'react-native';
import {HairStylist} from './components/HairStylist';
import Ant from 'react-native-vector-icons/AntDesign';
import SortModal from './components/SortModal';
import {Salon} from './components/Salon';

export const Main: React.FC = () => {
  const [, logout] = useLogoutMutation();
  const [searchActive, setSearchActive] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [activeFilter, setActiveFilter] = React.useState<
    'hairstylists' | 'salons'
  >('hairstylists');

  const [hairstylists] = useGetAllHairStylistsQuery();
  const [salons] = useGetAllSalonsQuery();

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={style.container}>
      {/* Modal */}
      <SortModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      {/* End of Modal */}
      {/* Header and search bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: searchActive ? 'flex-start' : 'space-between',
          marginTop: 20,
          height: 40,
          paddingHorizontal: 20,
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
            fontSize: 12,
            fontWeight: '700',
            fontFamily: 'Poppins',
            color: '#36486b',
            marginBottom: 5,
          }}>
          Sort by:
        </Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              fontFamily: 'Poppins',
              color: '#36486b',
              marginBottom: 25,
            }}>
            {activeFilter === 'hairstylists' ? 'Hair Stylists' : 'Salons'}
          </Text>
          <Ant
            name="caretdown"
            size={25}
            color="#000"
            style={{marginBottom: 25, marginLeft: 10}}
          />
        </TouchableOpacity>
        {activeFilter === 'hairstylists' ? (
          <ScrollView>
            {hairstylists.data?.getAllHairStylists.map(hairstylist => {
              return (
                <HairStylist
                  key={hairstylist.id}
                  hairStylistName={hairstylist.name}
                  salonName={hairstylist.salon?.name as string}
                  rating={hairstylist.rating as number}
                  id={hairstylist.salon?.id as number}
                />
              );
            })}
          </ScrollView>
        ) : (
          <ScrollView>
            {salons.data?.getAllSalons?.map(salon => {
              return (
                <Salon
                  key={salon.id}
                  salonName={salon.name as string}
                  rating={salon.rating as number}
                  id={salon.id as number}
                />
              );
            })}
          </ScrollView>
        )}
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
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
