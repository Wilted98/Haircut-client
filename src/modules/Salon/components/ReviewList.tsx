import React from 'react';
import {View, Text} from 'react-native';
import {Query} from 'urql';
import {useGetReviewsQuery} from '../../../generated/graphql';
import StarRating from './starRating';

type ReviewListProps = {
  id: number;
};

const ReviewList: React.FC<ReviewListProps> = ({id}) => {
  const [{data}] = useGetReviewsQuery({variables: {id: id}});

  return (
    <View>
      {data?.getReviews?.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              width: '100%',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderWidth: 1,
              borderColor: '#241332',
              marginVertical: 15,
              borderRadius: 10,
            }}>
            <StarRating
              emptystarcolor="#241332"
              fullstarcolor="#241332"
              numberofstars={5}
              rating={item.hairstylist_rating}
            />
            <Text style={{color: '#241332'}}>{item.comment}</Text>
            <Text>Posted by {item.postedBy?.name}</Text>
          </View>
        );
      })}
    </View>
  );
};
export default ReviewList;
