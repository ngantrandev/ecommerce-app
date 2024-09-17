import { View, Text, StyleProp, ViewStyle, FlatList } from 'react-native';
import React from 'react';

import StarIcon from '~/components/vectors/star';
import { Colors } from '~/constants/Colors';
import Divider from '~/components/divider';
import DotIcon from '~/components/vectors/dot';

type StarCoutingSize = 1 | 2 | 3 | 4 | 5;

interface ReviewData {
  star: StarCoutingSize;
  content: string;
  author: string;
  date: string;
}

const reviewData: ReviewData[] = [
  {
    star: 4,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 1,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 3,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 1,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 1,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 2,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
  {
    star: 5,
    content: 'Good product',
    author: 'John Doe',
    date: '12/12/2021',
  },
];

function StarCouting({ star, percent }: { star: StarCoutingSize; percent: number }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 6,
        }}
      >
        {Array.from({ length: star }, (_, i) => (
          <StarIcon key={i} active />
        ))}
        {Array.from({ length: 5 - star }, (_, i) => (
          <StarIcon key={i} />
        ))}
      </View>

      <View
        style={{
          flex: 1,
          width: 100,
          height: 5,
          backgroundColor: Colors.light.primary[100],
          borderRadius: 10,
          marginLeft: 12,
        }}
      >
        <View
          style={{
            width: `${percent}%`,
            height: '100%',
            backgroundColor: Colors.light.primary[900],
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}

function ReviewSummary({ style }: { style?: StyleProp<ViewStyle> }) {
  return (
    <View
      style={[
        {
          width: '100%',
        },
        style,
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 16,
        }}
      >
        <Text
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            height: '100%',
            includeFontPadding: false,
            // letterSpacing: 20,
          }}
        >
          4.0
        </Text>
        <View
          style={{
            flexDirection: 'column',
            rowGap: 6,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              columnGap: 9,
            }}
          >
            <StarIcon active />
            <StarIcon active />
            <StarIcon active />
            <StarIcon active />
            <StarIcon />
          </View>
          <Text
            style={{
              textTransform: 'capitalize',
              fontSize: 16,
              color: Colors.light.primary[500],
            }}
          >
            1034 ratings
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          rowGap: 12,
        }}
      >
        <StarCouting star={5} percent={80} />
        <StarCouting star={4} percent={20} />
        <StarCouting star={3} percent={15} />
        <StarCouting star={2} percent={36} />
        <StarCouting star={1} percent={10} />
      </View>
    </View>
  );
}
function ReviewItem({ review }: { review: ReviewData }) {
  const { star, content, author, date } = review;

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'column',
        rowGap: 12,
      }}
    >
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          columnGap: 6,
        }}
      >
        {Array.from({ length: star }, (_, i) => (
          <StarIcon key={i} active />
        ))}
        {Array.from({ length: 5 - star }, (_, i) => (
          <StarIcon key={i} />
        ))}
      </View>
      <Text
        style={{
          fontSize: 14,
          color: Colors.light.primary[500],
          fontWeight: 400,
        }}
      >
        {content}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 4,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: Colors.light.primary[900],
          }}
        >
          {author}
        </Text>
        <DotIcon />
        <Text
          style={{
            color: Colors.light.primary[500],
          }}
        >
          {date}
        </Text>
      </View>
    </View>
  );
}

export default function ReviewDetailScreen() {
  return (
    <View
      style={
        {
          // backgroundColor: 'red',
          // height: '100%',
        }
      }
    >
      <ReviewSummary />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 16,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}
        >
          45 Reviews
        </Text>

        <Text
          style={{
            fontSize: 12,
            color: Colors.light.primary[500],
          }}
        >
          Most relevant
        </Text>
      </View>

      <FlatList
        style={{
          width: '100%',
        }}
        data={reviewData}
        renderItem={({ item, index }) => <ReviewItem key={index} review={item} />}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <Divider
            style={{
              marginTop: 16,
              marginBottom: 16,
            }}
          />
        )}
      />
    </View>
  );
}
