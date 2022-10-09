import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type SortModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveFilter: React.Dispatch<
    React.SetStateAction<'hairstylists' | 'salons'>
  >;
  activeFilter: 'hairstylists' | 'salons';
};

const SortModal: React.FC<SortModalProps> = ({
  modalVisible,
  setModalVisible,
  setActiveFilter,
  activeFilter,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View
          style={{
            width: '100%',
            height: '70%',
            backgroundColor: '#8D81F8',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setActiveFilter('salons');
              setModalVisible(false);
            }}
            style={{
              width: '70%',
              paddingHorizontal: 15,
              paddingVertical: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: activeFilter === 'salons' ? 'green' : '#fff',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: activeFilter === 'salons' ? '#fff' : '#7265E3',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'Poppins',
                textAlign: 'center',
              }}>
              Salons
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveFilter('hairstylists');
              setModalVisible(false);
            }}
            style={{
              width: '70%',
              paddingHorizontal: 15,
              paddingVertical: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                activeFilter === 'hairstylists' ? 'green' : '#fff',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: activeFilter === 'hairstylists' ? '#fff' : '#7265E3',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'Poppins',
                textAlign: 'center',
              }}>
              Hair Stylists
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
    width: '100%',
    height: '100%',
    padding: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SortModal;
