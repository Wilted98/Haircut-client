import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CommonButton from '../../../components/CommonButton';

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
            height: '30%',
            backgroundColor: '#fff',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CommonButton
            onPress={() => {
              setActiveFilter('salons');
              setModalVisible(false);
            }}
            active={activeFilter === 'salons'}
            name="Salons"
          />
          <CommonButton
            onPress={() => {
              setActiveFilter('hairstylists');
              setModalVisible(false);
            }}
            active={activeFilter === 'hairstylists'}
            name="Hair Stylists"
          />
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
