import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useGetGalleryQuery} from '../../../generated/graphql';
import ImageView from 'react-native-image-viewing';

type GalleryListProps = {
  id: number;
};

const GalleryList: React.FC<GalleryListProps> = ({id}) => {
  const [visible, setIsVisible] = React.useState<boolean>(false);
  const [currentImageIndex, setImageIndex] = React.useState<number>(0);
  const [{data}] = useGetGalleryQuery({
    variables: {getGalleryId: id},
  });

  const width = Dimensions.get('window').width / 2;

  const getAspectRatio = () => Math.random() * 0.35 + 1;

  const renderItem = (photo: string, index: number, string: string) => {
    console.log(`${string}__${index}`);
    return (
      <TouchableOpacity
        key={`${string}__${index}`}
        onPress={() => onSelect(index)}>
        <Image
          source={{uri: photo}}
          style={{
            height: width * getAspectRatio(),
            width: width,
            marginBottom: 10,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
    );
  };

  const onSelect = (index: number) => {
    setImageIndex(index);
    setIsVisible(true);
  };

  const images = data?.getGallery?.photos.map((item: string): {uri: string} => {
    return {uri: item};
  });

  return (
    <>
      <ImageView
        images={images!}
        imageIndex={currentImageIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <ScrollView
        style={{
          height: '60%',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 5}}>
            {data?.getGallery?.photos
              .filter((_, i) => i % 2 === 0)
              .map((item, index) => renderItem(item, index, 'left'))}
          </View>
          <View style={{marginLeft: 5}}>
            {data?.getGallery?.photos
              .filter((_, i) => i % 2 !== 0)
              .map((item, index) => renderItem(item, index, 'right'))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default GalleryList;
