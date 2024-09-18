import { View, ScrollView, StyleSheet, Text } from 'react-native';
import React, { useCallback, useEffect } from 'react';

import CartItem from './CartItem';
import { Colors } from '~/constants/Colors';
import Divider from '~/components/divider';
import Button from '~/components/button';
import RightArrowIcon from '~/components/vectors/rightarrow';
import { CartType } from '~/types/cart';

const cartItems: CartType[] = [
  {
    id: 1,
    name: 'Black T-shirt',
    price: 150,
    quantity: 3,
  },
  {
    id: 2,
    name: 'Black Jeans',
    price: 200,
    quantity: 2,
  },
  {
    id: 3,
    name: 'White Shirt',
    price: 180,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Red Hoodie',
    price: 250,
    quantity: 4,
  },
  {
    id: 5,
    name: 'Blue Denim Jacket',
    price: 300,
    quantity: 1,
  },
  {
    id: 6,
    name: 'Green Sweatpants',
    price: 120,
    quantity: 5,
  },
  {
    id: 7,
    name: 'Yellow Skirt',
    price: 160,
    quantity: 2,
  },
  {
    id: 8,
    name: 'Brown Leather Boots',
    price: 400,
    quantity: 1,
  },
  {
    id: 9,
    name: 'Grey Cap',
    price: 90,
    quantity: 6,
  },
  {
    id: 10,
    name: 'White Sneakers',
    price: 220,
    quantity: 3,
  },
];

export default function CartScreen() {
  const [carts, setCarts] = React.useState(cartItems);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const handleChangeQuantity = useCallback(() => {
    const total = carts.reduce((acc, cart) => {
      return acc + cart.price * cart.quantity;
    }, 0);

    setTotalPrice(total);
  }, [carts]);

  useEffect(() => {
    handleChangeQuantity();
  }, [carts]);

  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {carts.map((value, index) => (
            <CartItem
              cart={value}
              key={index}
              style={{
                marginBottom: 14,
              }}
              onDelete={() => {
                setCarts(
                  carts.filter((_, i) => {
                    return i !== index;
                  })
                );
              }}
              onDecrease={() => {
                setCarts(
                  carts.map((cart, i) => {
                    if (i === index) {
                      return {
                        ...cart,
                        quantity: cart.quantity - 1,
                      };
                    }
                    return cart;
                  })
                );
                handleChangeQuantity();
              }}
              onIncrease={() => {
                setCarts(
                  carts.map((cart, i) => {
                    if (i === index) {
                      return {
                        ...cart,
                        quantity: cart.quantity + 1,
                      };
                    }
                    return cart;
                  })
                );
                handleChangeQuantity();
              }}
            />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            rowGap: 16,
            marginTop: 24,
          }}
        >
          <View style={styles['row-space-between']}>
            <Text style={{ fontSize: 16, color: Colors.light.primary[500] }}>Sub-total</Text>
            <Text
              style={{ fontSize: 16, color: Colors.light.primary[900], fontWeight: 'bold' }}
            >{`$ ${totalPrice}`}</Text>
          </View>
          <View style={styles['row-space-between']}>
            <Text style={{ fontSize: 16, color: Colors.light.primary[500] }}>VAT</Text>
            <Text
              style={{ fontSize: 16, color: Colors.light.primary[900], fontWeight: 'bold' }}
            >{`$ 0.00`}</Text>
          </View>
          <View style={styles['row-space-between']}>
            <Text style={{ fontSize: 16, color: Colors.light.primary[500] }}>Shipping fee</Text>
            <Text
              style={{ fontSize: 16, color: Colors.light.primary[900], fontWeight: 'bold' }}
            >{`$ 0.00`}</Text>
          </View>
          <Divider style={{ marginVertical: 0 }} />
          <View style={styles['row-space-between']}>
            <Text style={{ fontSize: 16, color: Colors.light.primary[500] }}>Total</Text>
            <Text
              style={{ fontSize: 16, color: Colors.light.primary[900], fontWeight: 'bold' }}
            >{`$ ${totalPrice}`}</Text>
          </View>
        </View>
        <Button style={{ marginTop: 14 }}>
          <View style={{ flexDirection: 'row', columnGap: 10 }}>
            <Text style={{ color: Colors.light.primary[0], fontSize: 16 }}>Go To Checkout</Text>
            <RightArrowIcon />
          </View>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  scrollView: {
    width: '100%',
    flex: 1,
  },
  'row-space-between': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
