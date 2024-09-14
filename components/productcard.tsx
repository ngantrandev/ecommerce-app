import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { ProductType } from '~/types/product';
import Image from '~/components/image';
import HeartIcon from '~/components/vectors/heart';
import { Colors } from '~/constants/Colors';
import Button from '~/components/button';

export default function ProductCard({
  product,
  navigation,
}: {
  product: ProductType;
  navigation: any;
}) {
  const { id, name, price, img, discount } = product;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate({
          name: 'products/[id]',
          params: {
            product: product,
          },
        });
      }}
      style={{
        position: 'relative',
        // width: 200,
        flex: 1,
        overflow: 'hidden',
        gap: 8,
        // margin: 10,
      }}
    >
      <Image
        style={{
          borderRadius: 10,
          width: '100%',
          height: 250,
        }}
        source={img}
      />
      <View
        style={{
          width: '100%',
        }}
      >
        <Text
          style={{
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors.light.primary[900],
            marginBottom: 3,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            textTransform: 'capitalize',
            fontWeight: 'semibold',
            fontSize: 12,
          }}
        >
          <Text
            style={{
              color: Colors.light.primary[500],
            }}
          >
            ${price}
          </Text>
          <Text
            style={{
              color: Colors.light.error.red,
            }}
          >
            {`   -${discount}%`}
          </Text>
        </Text>
      </View>

      <Button
        textonly
        activeOpacity={0.5}
        style={{
          position: 'absolute',
          padding: 8,
          backgroundColor: Colors.light.primary[0],
          top: 12,
          right: 12,
        }}
      >
        <HeartIcon size={18} />
      </Button>
    </TouchableOpacity>
  );
}
