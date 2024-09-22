import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Button from '~/components/button';
import LocationIcon from '~/components/vectors/location';
import { Colors } from '~/constants/Colors';
import Divider from '~/components/divider';
import CardIcon from '~/components/vectors/card';
import CashIcon from '~/components/vectors/cash';
import AppleLogo from '~/components/vectors/apple';
import VisaLogo from '~/components/vectors/visa';
import PencilIcon from '~/components/vectors/pencil';
import Input from '~/components/input';
import DiscountIcon from '~/components/vectors/discount';

function Address() {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles['section-title']}>Delivery Address</Text>
        <Button style={{ height: 'auto' }} textonly>
          <Text
            style={{
              textDecorationLine: 'underline',
            }}
          >
            Change
          </Text>
        </Button>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 16,
          columnGap: 8,
        }}
      >
        <LocationIcon />
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.light.primary[900],
            }}
          >
            Home
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.light.primary[500],
            }}
          >
            925 S Chugach St #APT 10, Alaska 99645
          </Text>
        </View>
      </View>
    </View>
  );
}

const buttonList = [
  {
    id: 1,
    title: 'Card',
    'left-icon': <CardIcon />,
  },
  {
    id: 2,
    title: 'Cash',
    'left-icon': <CashIcon />,
  },
  {
    id: 3,
    title: 'Pay',
    'left-icon': <AppleLogo />,
  },
];

function ActionButtonList() {
  const [selectedButton, setSelectedButton] = useState(1);

  return (
    <View
      style={{
        rowGap: 16,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          columnGap: 8,
          width: '100%',
        }}
      >
        {buttonList.map((button) => {
          const leftIcon = button['left-icon'];

          return (
            <Button
              key={button.id}
              style={[styles.button, selectedButton === button.id && styles['active-button']]}
              onPress={() => setSelectedButton(button.id)}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  columnGap: 6,
                }}
              >
                {leftIcon &&
                  React.cloneElement(leftIcon, {
                    color:
                      selectedButton === button.id
                        ? Colors.light.primary[0]
                        : Colors.light.primary[900],
                  })}
                <Text
                  style={[
                    styles['text-button'],
                    selectedButton === button.id && styles['active-text-button'],
                  ]}
                >
                  {button.title}
                </Text>
              </View>
            </Button>
          );
        })}
      </View>
      <Button
        outlined
        style={{ width: '100%', borderWidth: 1, borderColor: Colors.light.primary[100] }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 8,
            }}
          >
            <VisaLogo
              style={{
                width: 44,
                height: 14,
              }}
            />
            <Text>**** **** **** 2512</Text>
          </View>
          <PencilIcon />
        </View>
      </Button>
    </View>
  );
}

function Payment() {
  return (
    <View
      style={{
        rowGap: 16,
      }}
    >
      <Text style={styles['section-title']}>Payment Method</Text>
      <ActionButtonList />
    </View>
  );
}

function OrderSummary() {
  const [totalPrice, setTotalPrice] = React.useState(0);

  return (
    <View
      style={{
        rowGap: 16,
      }}
    >
      <Text style={styles['section-title']}>Order Summary</Text>

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

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          columnGap: 8,
          // backgroundColor: 'lightgray',
          height: 50,
        }}
      >
        <Input
          style={{
            flex: 3,
          }}
          leftIcon={<DiscountIcon />}
          placeholder="Enter promo code"
        />
        <Button style={{ flex: 1, height: '100%' }}>
          <Text style={{ color: Colors.light.primary[0] }}>Add</Text>
        </Button>
      </View>
    </View>
  );
}

export default function CheckoutScreen() {
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'space-between',
        paddingBottom: 8,
        rowGap: 8,
      }}
    >
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Address />
          <Divider
            style={{
              marginVertical: 20,
            }}
          />
          <Payment />
          <Divider
            style={{
              marginVertical: 20,
            }}
          />
          <OrderSummary />
        </ScrollView>
      </View>
      <Button
        style={{
          height: 54,
        }}
      >
        <Text
          style={{
            color: Colors.light.primary[0],
            fontSize: 16,
          }}
        >
          Place Order
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: Colors.light.primary[0],
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: Colors.light.primary[100],
  },
  'text-button': {
    color: Colors.light.primary[900],
    fontSize: 14,
  },
  'active-button': {
    backgroundColor: Colors.light.primary[900],
    borderWidth: 0,
  },
  'active-text-button': {
    color: Colors.light.primary[0],
  },
  'section-title': {
    fontSize: 16,
    color: Colors.light.primary[900],
    fontWeight: 'bold',
  },
  'row-space-between': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
