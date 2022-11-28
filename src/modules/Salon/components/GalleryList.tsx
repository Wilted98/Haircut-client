import React from 'react';
import {Text, View, Image} from 'react-native';
import {useGetGalleryQuery} from '../../../generated/graphql';

type GalleryListProps = {
  id: number;
};

const GalleryList: React.FC<GalleryListProps> = ({id}) => {
  const [{data}] = useGetGalleryQuery({
    variables: {getGalleryId: id},
  });

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        height: '100%',
        flexWrap: 'wrap',
      }}>
      {data?.getGallery?.photos.length! > 0 &&
        data?.getGallery?.photos.map((photo, index) => {
          return (
            <Image
              key={index}
              style={{
                width: '100%',
                height: 200,
                marginBottom: 20,
                borderRadius: 20,
              }}
              source={{uri: photo}}
            />
          );
        })}
    </View>
  );
};
export default GalleryList;
