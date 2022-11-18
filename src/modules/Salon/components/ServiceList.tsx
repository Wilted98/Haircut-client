import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {CONVER_TO_HOURS_AND_MINUTES} from '../../../utils/functions';

type ListObjectProps = {
  id: number;
  name: string;
  price: number;
  duration: number;
  currency: string;
};

type NavBarSalonProps = {
  serviceList: Array<ListObjectProps> | undefined | null;
};

const ServiceList: React.FC<NavBarSalonProps> = ({serviceList}) => {
  return (
    <React.Fragment>
      {serviceList?.map((item: ListObjectProps) => {
        return (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 25,
            }}>
            <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'Poppins',
                  color: '#241332',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: '#9599B3',
                  fontSize: 12,
                  fontWeight: '400',
                  fontFamily: 'Poppins',
                  marginTop: 3,
                }}>
                {CONVER_TO_HOURS_AND_MINUTES(item.duration)}{' '}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: '100%',
              }}>
              <Text
                style={{
                  marginRight: 20,
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'Poppins',
                  color: '#241332',
                }}>
                {item.price} {item.currency}
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 11,
                  backgroundColor: '#C5608F',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    fontFamily: 'Poppins',
                    color: '#fff',
                  }}>
                  Book
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </React.Fragment>
  );
};

export default ServiceList;
