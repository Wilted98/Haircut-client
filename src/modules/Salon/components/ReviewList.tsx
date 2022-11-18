import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Query} from 'urql';
import {useGetReviewsQuery} from '../../../generated/graphql';
import StarRating from './starRating';
import Ant from 'react-native-vector-icons/AntDesign';

type ReviewListProps = {
  id: number;
};

enum sortOptions {
  NEWEST = 'newest',
  OLDEST = 'oldest',
}

const ReviewList: React.FC<ReviewListProps> = ({id}) => {
  const [sortBy, setSortBy] = React.useState<sortOptions>(sortOptions.NEWEST);
  const [dropActive, setDropActive] = React.useState<boolean>(false);

  const [{data}] = useGetReviewsQuery({
    variables: {options: {id, sortBy: sortBy}},
  });

  return (
    <View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text style={{fontWeight: '800', color: '#000', fontSize: 15}}>
          {data?.getReviews?.length} Comments
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10, fontWeight: '500'}}>SortBy:</Text>
          <View style={{position: 'relative'}}>
            <TouchableOpacity
              onPress={() => setDropActive(!dropActive)}
              style={{
                borderWidth: 1,
                borderColor: '#000',
                padding: 4,
                marginLeft: 4,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '700',
                  color: '#000',
                  textTransform: 'capitalize',
                }}>
                {sortBy}
              </Text>
              <Ant
                name="caretdown"
                size={11}
                color="#000"
                style={{marginLeft: 3}}
              />
            </TouchableOpacity>
            {dropActive && (
              <View
                style={{
                  position: 'absolute',
                  bottom: -52,
                  backgroundColor: '#fff',
                  width: '100%',
                  marginLeft: 4,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: '#000',
                  zIndex: 10,
                  padding: 1,
                }}>
                {(
                  Object.keys(sortOptions) as Array<keyof typeof sortOptions>
                ).map((key, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setSortBy(sortOptions[key]);
                        setDropActive(false);
                      }}
                      key={index}
                      style={{
                        width: '100%',
                        backgroundColor:
                          sortBy === key.toLowerCase() ? '#c4c4c4' : '#fff',
                        padding: 4,
                      }}>
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: '700',
                          color: '#000',
                          textTransform: 'capitalize',
                          marginLeft: 2,
                        }}>
                        {key}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      </View>
      <ScrollView style={{marginBottom: 25}}>
        {data?.getReviews?.map((item, index) => {
          return (
            <View
              key={`app_${index}`}
              style={{
                width: '100%',
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#241332',
                marginVertical: 15,
                borderRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <StarRating
                  emptystarcolor="#241332"
                  fullstarcolor="#241332"
                  numberofstars={5}
                  rating={item.hairstylist_rating}
                />
                <Text style={{marginLeft: 6}}>
                  for{' '}
                  <Text
                    style={{fontWeight: '700', textTransform: 'capitalize'}}>
                    {item.user?.name}
                  </Text>
                </Text>
              </View>
              <Text style={{color: '#241332', marginVertical: 7}}>
                {item.comment}
              </Text>
              <Text>
                Posted by{' '}
                <Text style={{fontWeight: '700', textTransform: 'capitalize'}}>
                  {item.postedBy?.name}
                </Text>
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default ReviewList;
