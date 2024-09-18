import { View, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import React from 'react';

import { Colors } from '~/constants/Colors';
import Button from '~/components/button';
import TrashIcon from '~/components/vectors/trash';
import Image from '~/components/image';
import { CartType } from '~/types/cart';

export default function CartItem({
  cart,
  style,
  onDelete,
  onIncrease,
  onDecrease,
}: {
  cart: CartType;
  style?: StyleProp<ViewStyle>;
  onDelete?: () => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
}) {
  const { name, price, size, quantity: cartQuantity } = cart;
  const [quantity, setQuantity] = React.useState(cartQuantity);
  return (
    <View style={[sytles.container, style]}>
      <Image style={sytles.image} />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <View style={sytles['row-space-between']}>
          <View>
            <Text style={sytles['product-name-style']}>{name}</Text>
            <Text
              style={{
                fontSize: 12,
                color: Colors.light.primary[500],
              }}
            >
              {`Size: ${size || 'N/A'}`}
            </Text>
          </View>
          <Button textonly onPress={onDelete} activeOpacity={0.5}>
            <TrashIcon />
          </Button>
        </View>
        <View style={sytles['row-space-between']}>
          <Text style={sytles['product-name-style']}>{`$ ${price}`}</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 9,
            }}
          >
            <Button
              onPress={() => {
                if (quantity > 1 && onDecrease) {
                  setQuantity(quantity - 1);
                  onDecrease();
                }
              }}
              textonly
              style={{
                width: 22,
                height: 22,
                borderWidth: 1,
                borderRadius: 4,
                borderColor: Colors.light.primary[500],
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>-</Text>
            </Button>
            <Text>{quantity}</Text>

            <Button
              onPress={() => {
                if (onIncrease) {
                  setQuantity(quantity + 1);
                  onIncrease();
                }
              }}
              textonly
              style={{
                width: 22,
                height: 22,
                borderWidth: 1,
                borderRadius: 4,
                borderColor: Colors.light.primary[500],
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>+</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const sytles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 16,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.light.primary[100],
  },
  image: {
    width: 83,
    height: 79,
  },
  'row-space-between': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  'product-name-style': {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
