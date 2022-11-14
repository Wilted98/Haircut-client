import React from 'react';
import {View} from 'react-native';
import FA from 'react-native-vector-icons/FontAwesome';

type indexProps = {
  numberofstars: number;
  rating: number;
  emptystarcolor: string;
  fullstarcolor: string;
};

const index: React.FC<indexProps> = ({
  numberofstars,
  rating,
  emptystarcolor,
  fullstarcolor,
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {[...new Array(numberofstars)].map((_, index) => {
        if (index + 1 <= rating) {
          return <FA name="star" color={fullstarcolor} />;
        }
        if (rating % index >= 0.5 && rating % index <= 1) {
          return <FA name="star-half-empty" color={emptystarcolor} />;
        }
        return <FA name="star-o" color={emptystarcolor} />;
      })}
    </View>
  );
};
export default index;
