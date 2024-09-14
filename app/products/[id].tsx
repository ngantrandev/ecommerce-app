import { View, Text, ScrollView } from 'react-native';
import React, { memo, useState } from 'react';

import Image from '~/components/image';
import { Colors } from '~/constants/Colors';
import StarIcon from '~/components/vectors/star';
import Button from '~/components/button';
import Divider from '~/components/divider';

const actionButton = [
  {
    id: 1,
    title: 'S',
  },
  {
    id: 2,
    title: 'M',
  },
  {
    id: 3,
    title: 'L',
  },
];

function ActionButtonList() {
  const [selectedGroup, setSelectedGroup] = useState(1);
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: 'row',
          gap: 20,
        }}
      >
        {actionButton.map(({ title, id }, index) => (
          <Button
            key={index}
            outlined
            title={title}
            titleStyle={[
              {
                color: Colors.light.primary[900],
              },
              id == selectedGroup && {
                color: Colors.light.primary[0],
              },
            ]}
            style={[
              {
                width: 'auto',
                height: 'auto',
                paddingVertical: 7,
                paddingHorizontal: 20,
                marginRight: 8,
              },
              id == selectedGroup && {
                backgroundColor: Colors.light.primary[900],
                borderWidth: 0,
              },
            ]}
            onPress={() => {
              setSelectedGroup(id);
            }}
          ></Button>
        ))}
      </ScrollView>
    </View>
  );
}

const Header = memo(() => {
  return (
    <View
      style={{
        width: '100%',
        height: 364,
        // backgroundColor: 'red',
        borderRadius: 10,
      }}
    >
      <Image
        source={{
          uri: 'https://aothudong.com/upload/product/atd-434/ao-gio-nam-hang-hieu-ghi-dep.jpg',
        }}
      />
    </View>
  );
});

const BottomSheetView = memo(() => {
  return (
    <View
      style={{
        width: '100%',
        bottom: 0,
      }}
    >
      <Divider title="" />
      <View
        style={{
          width: '100%',
          height: 54,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 4,
          bottom: 0,
        }}
      >
        <View
          style={{
            width: '20%',
            marginRight: 30,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: Colors.light.primary[500],
            }}
          >
            Price
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: Colors.light.primary[900],
              fontWeight: 'bold',
            }}
          >{`$ 100`}</Text>
        </View>
        <Button
          title="Add to cart"
          style={{ flex: 1 }}
          titleStyle={{
            fontWeight: 'bold',
          }}
        />
      </View>
    </View>
  );
});

const Content = memo(() => {
  return (
    <View
      style={{
        // flexDirection: 'column',
        rowGap: 13,
        width: '100%',
        flex: 1,
        // backgroundColor: 'red',
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          color: Colors.light.primary[900],
        }}
      >
        Regular Fit Slogan
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 6,
        }}
      >
        <StarIcon active />
        <Text
          style={{
            color: Colors.light.primary[900],
            textDecorationLine: 'underline',
            fontWeight: 'bold',
          }}
        >
          4.0/5
        </Text>
        <Text
          style={{
            color: Colors.light.primary[500],
            fontWeight: 'bold',
          }}
        >
          (45 reviews)
        </Text>
      </View>
      <Text
        style={{
          color: Colors.light.primary[500],
        }}
      >
        The name says it all, the right size slightly snugs the body leaving enough room for comfort
        in the sleeves and waist.
      </Text>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: Colors.light.primary[900],
            marginBottom: 12,
          }}
        >
          Choose size
        </Text>
        <ActionButtonList />
      </View>
    </View>
  );
});

export default function ProductDetail() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Header />
        <Content />
      </ScrollView>
      <BottomSheetView />
    </View>
  );
}
