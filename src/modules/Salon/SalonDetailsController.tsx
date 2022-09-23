import React from 'react';
import {View, Text} from 'react-native';
import {useGetSalonQuery} from '../../generated/graphql';
import LoadingAnimation from '../../shared/LoadingAnimation';

type SalonDetailsProps = {
  SalonId: number;
};

const SalonDetails: React.FC<SalonDetailsProps> = ({SalonId}) => {
  const [{data, fetching}] = useGetSalonQuery({variables: {id: SalonId}});

  return (
    <>
      <LoadingAnimation loadingState={fetching} />

      <View>
        <Text>Hello,{data?.getSalon?.name}</Text>
      </View>
    </>
  );
};

export default SalonDetails;
