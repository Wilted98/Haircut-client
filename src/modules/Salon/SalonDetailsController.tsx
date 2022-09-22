import React from 'react';
import {View, Text} from 'react-native';
import {useGetSalonByIdMutation} from '../../generated/graphql';
import LoadingAnimation from '../../shared/LoadingAnimation';

type SalonDetailsProps = {
  SalonId: number;
};

const SalonDetails: React.FC<SalonDetailsProps> = ({SalonId}) => {
  const [{data, fetching}, getSalonDetails] = useGetSalonByIdMutation();

  const getData = async () => {
    await getSalonDetails({id: SalonId});
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <LoadingAnimation loadingState={fetching} />

      <View>
        <Text>Hello, {data?.getSalonById?.name}!</Text>
      </View>
    </>
  );
};

export default SalonDetails;
