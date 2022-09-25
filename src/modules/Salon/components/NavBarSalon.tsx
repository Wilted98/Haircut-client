import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

type NavBarSalonProps = {
  salon_titles: Array<string>;
  activeTitle: number;
  setActiveTitle: React.Dispatch<React.SetStateAction<number>>;
};

const NavBarSalon: React.FC<NavBarSalonProps> = ({
  salon_titles,
  activeTitle,
  setActiveTitle,
}) => {
  return (
    <React.Fragment>
      {salon_titles.map((item: string, index: number) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveTitle(index)}
            style={{
              minHeight: 30,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: activeTitle === index ? '#241332' : '#9599B3',
                fontSize: 15,
                fontWeight: '600',
                fontFamily: 'Lato',
              }}>
              {item}
            </Text>
            {activeTitle === index ? (
              <View
                style={{
                  width: '100%',
                  height: 3,
                  backgroundColor: '#241332',
                  borderRadius: 8,
                  marginTop: 6,
                }}
              />
            ) : (
              <View
                style={{
                  width: '100%',
                  height: 3,
                  borderRadius: 8,
                  marginTop: 6,
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </React.Fragment>
  );
};

export default NavBarSalon;
